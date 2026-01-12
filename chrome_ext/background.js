const sites = [
  { id: 'github', name: 'GitHub', pattern: '*://github.com/*', hostPattern: 'github.com', css: 'styles/github.css' },
  { id: 'gmail', name: 'Gmail', pattern: '*://mail.google.com/*', hostPattern: 'mail.google.com', css: 'styles/gmail.css' }
];

// Inject or remove CSS based on site state
async function updateTab(tabId, url) {
  const { siteStates = {} } = await chrome.storage.sync.get('siteStates');

  for (const site of sites) {
    if (url.includes(site.hostPattern)) {
      const enabled = siteStates[site.id] !== false; // default to enabled

      if (enabled) {
        try {
          await chrome.scripting.insertCSS({
            target: { tabId },
            files: [site.css]
          });
        } catch (e) {
          // Tab might not be ready or accessible
        }
      } else {
        try {
          await chrome.scripting.removeCSS({
            target: { tabId },
            files: [site.css]
          });
        } catch (e) {
          // CSS might not be inserted
        }
      }
    }
  }
}

// Listen for tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    updateTab(tabId, tab.url);
  }
});

// Listen for messages from popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'toggleSite') {
    // Update all matching tabs
    chrome.tabs.query({}, (tabs) => {
      const site = sites.find(s => s.id === message.siteId);
      if (site) {
        for (const tab of tabs) {
          if (tab.url && tab.url.includes(site.hostPattern)) {
            if (message.enabled) {
              chrome.scripting.insertCSS({
                target: { tabId: tab.id },
                files: [site.css]
              }).catch(() => {});
            } else {
              chrome.scripting.removeCSS({
                target: { tabId: tab.id },
                files: [site.css]
              }).catch(() => {});
            }
          }
        }
      }
    });
  }
});
