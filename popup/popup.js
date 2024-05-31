document.addEventListener('DOMContentLoaded', function() {
    const openProfileLinksBtn = document.getElementById('openProfileLinksBtn');
  
    openProfileLinksBtn.addEventListener('click', function() {
      const linkedinProfileLinks = [
        "https://www.linkedin.com/in/profile1",
        "https://www.linkedin.com/in/profile2",
        "https://www.linkedin.com/in/profile3"
      ];
  
      openLinkedInProfiles(linkedinProfileLinks);
    });
  
    async function openLinkedInProfiles(links) {
      for (const link of links) {
        const tab = await createTab(link);
        chrome.scripting.executeScript(
          {
            target: { tabId: tab.id },
            function: extractProfileData
          },
          (results) => {
            if (results && results[0]) {
              const profileData = results[0].result;
              sendDataToAPI(profileData);
              chrome.tabs.remove(tab.id);
            }
          }
        );
      }
    }
  
    function createTab(url) {
      return new Promise(resolve => {
        chrome.tabs.create({ url: url }, tab => {
          resolve(tab);
        });
      });
    }
  
    function sendDataToAPI(data) {
      fetch('http://localhost:3000/api/profiles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(responseData => console.log('Data sent to API:', responseData))
      .catch(error => console.error('Error sending data to API:', error));
    }
  });
  
  // Function to be injected into LinkedIn profile page to extract data
  function extractProfileData() {
    const name = document.querySelector('.inline.t-24.t-black.t-normal.break-words')?.innerText;
    const location = document.querySelector('.t-16.t-black.t-normal.inline-block')?.innerText;
    const about = document.querySelector('.pv-about__summary-text')?.innerText;
    const bio = document.querySelector('.pv-text-details__left-panel')?.innerText;
    const followerCount = parseInt(document.querySelector('.t-16.t-black.t-normal')?.innerText.match(/\d+/)[0]);
    const connectionCount = parseInt(document.querySelector('.t-16.t-black.t-normal')?.innerText.match(/\d+/)[0]);
  
    return {
      name,
      location,
      about,
      bio,
      followerCount,
      connectionCount
    };
  }
  