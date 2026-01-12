const sites = [
  { id: 'github', name: 'GitHub', pattern: '*://github.com/*', css: 'styles/github.css' },
  { id: 'gmail', name: 'Gmail', pattern: '*://mail.google.com/*', css: 'styles/gmail.css' }
];

async function init() {
  const container = document.getElementById('sites');
  const { siteStates = {} } = await chrome.storage.sync.get('siteStates');

  for (const site of sites) {
    const enabled = siteStates[site.id] !== false; // default to enabled

    const row = document.createElement('div');
    row.className = 'site-row';
    row.innerHTML = `
      <span class="site-name">${site.name}</span>
      <label class="toggle">
        <input type="checkbox" data-site="${site.id}" ${enabled ? 'checked' : ''}>
        <span class="slider"></span>
      </label>
    `;
    container.appendChild(row);
  }

  container.addEventListener('change', async (e) => {
    if (e.target.type === 'checkbox') {
      const siteId = e.target.dataset.site;
      const enabled = e.target.checked;

      const { siteStates = {} } = await chrome.storage.sync.get('siteStates');
      siteStates[siteId] = enabled;
      await chrome.storage.sync.set({ siteStates });

      // Notify background to update tabs
      chrome.runtime.sendMessage({ action: 'toggleSite', siteId, enabled });
    }
  });
}

init();
