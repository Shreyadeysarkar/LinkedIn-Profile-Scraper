// extractData.js

(function() {
    // Example code to extract data from LinkedIn profile page
    const name = document.querySelector('.inline.t-24.t-black.t-normal.break-words')?.innerText || '';
    const location = document.querySelector('.t-16.t-black.t-normal.inline-block')?.innerText || '';
    const about = document.querySelector('.pv-about__summary-text')?.innerText || '';
    const bio = document.querySelector('.pv-text-details__left-panel')?.innerText || '';
    const followerCount = parseInt(document.querySelector('.t-16.t-black.t-normal')?.innerText.match(/\d+/)?.[0] || '0');
    const connectionCount = parseInt(document.querySelector('.t-16.t-black.t-normal')?.innerText.match(/\d+/)?.[0] || '0');
  
    return {
      name,
      location,
      about,
      bio,
      followerCount,
      connectionCount
    };
  })();
  