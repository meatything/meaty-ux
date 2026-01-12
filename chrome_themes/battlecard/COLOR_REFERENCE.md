# Chrome Theme Color Reference

Complete documentation for all color properties in the BattleCard Chrome theme.

## Frame Colors
**Window frame and border colors**

- `frame` - Active window frame color (top bar and borders)
- `frame_inactive` - Inactive window frame color
- `frame_incognito` - Active incognito window frame color
- `frame_incognito_inactive` - Inactive incognito window frame color

## Tab Background Colors
**Background colors for tabs**

- `background_tab` - Active tab background
- `background_tab_inactive` - Inactive tab background
- `background_tab_incognito` - Active incognito tab background
- `background_tab_incognito_inactive` - Inactive incognito tab background

## Tab Text Colors
**Text colors for tabs**

- `tab_text` - Text color for active tab
- `tab_background_text` - Text color for inactive tabs
- `tab_background_text_inactive` - Text color for inactive tabs (alternative)
- `tab_background_text_incognito` - Text color for incognito tabs
- `tab_background_text_incognito_inactive` - Text color for inactive incognito tabs

## Toolbar Colors
**Toolbar and navigation elements**

- `toolbar` - Main toolbar background color
- `toolbar_button_icon` - Color of icons in toolbar (extensions, menu, etc.)
- `bookmark_text` - Text color for bookmark bar items
- `button_background` - Background for toolbar buttons

## Omnibox Colors
**Address bar (URL bar) colors**

- `omnibox_background` - Background color of the address bar
- `omnibox_text` - Text color in the address bar

## New Tab Page (NTP) Colors
**Colors for the new tab page**

- `ntp_background` - Background color of new tab page
- `ntp_header` - Header text color on new tab page
- `ntp_link` - Link color on new tab page
- `ntp_text` - General text color on new tab page

## Color Format

All colors use RGB format: `[R, G, B]` where each value is 0-255.

Optional: Add a fourth value for transparency: `[R, G, B, A]` where A is 0.0-1.0.

## BattleCard Color Mapping

- **Dark Theme**: Using very dark neutrals (neutral.1000 through neutral.950)
- **Text**: Light neutral colors for contrast (neutral.400, neutral.300)
- **Accents**: Blue links for familiarity
- **Incognito**: Slightly lighter than normal mode for distinction
