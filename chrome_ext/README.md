# CSS Override Chrome Extension

A Chrome extension that applies custom CSS overrides to specific websites.

## Installation

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable **Developer mode** (toggle in the top right corner)
3. Click **Load unpacked**
4. Select the `chrome_ext` directory

## Supported Sites

| Site | Override |
|------|----------|
| github.com | Background color changed to `#121212` |

## Adding More Sites

To add CSS overrides for additional sites:

1. Create a new CSS file in the `styles/` directory (e.g., `styles/newsite.css`)
2. Add a new entry to the `content_scripts` array in `manifest.json`:

```json
{
  "matches": ["*://newsite.com/*"],
  "css": ["styles/newsite.css"],
  "run_at": "document_start"
}
```

3. Reload the extension in `chrome://extensions/`
