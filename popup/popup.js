document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('getTitleBtn').addEventListener('click', function () {
      // Get the active tab
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        var tabTitle = activeTab.title;
        document.getElementById('titleDisplay').textContent = tabTitle;
      });
    });
  });
  