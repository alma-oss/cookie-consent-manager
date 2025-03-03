# Upgrade from 2.x to 3.0
Release 3.0 includes many backward-incompatible changes, including changes in the underlying vanilla-cookieconsent library,
which has also been upgraded from version 2 to 3.

This guide summarizes relevant changes in both `@almacareer/cookie-consent` and
[`vanilla-cookieconsent`](https://github.com/orestbida/cookieconsent) library to help you upgrade your codebase.

## Library npm scope changed to `@almacareer`

The library has been moved from `@lmc-eu` to `@almacareer` npm organization.

If you use the library via npm, update your package.json file

```diff
-"@lmc-eu/cookie-consent": "^2.6.0"
+"@almacareer/cookie-consent": "^3.0.0"
```

If you use the library via CDN, update the URL to styles and script:

```diff
-<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@lmc-eu/cookie-consent-manager@2/CookieConsentManager.min.css">
+<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@almacareer/cookie-consent-manager@3/CookieConsentManager.min.css">

-<script defer src="https://cdn.jsdelivr.net/npm/@lmc-eu/cookie-consent-manager@2/init.js"></script>
+<script defer src="https://cdn.jsdelivr.net/npm/@almacareer/cookie-consent-manager@3/init.js"></script>
```

## Renamed init function

The `lmc` prefix has been removed from the init function name.

```diff
-initLmcCookieConsentManager('demo.example', { /* ... */ });
+initCookieConsentManager('demo.example', { /* ... */ });
```

Also, the typescript type has been renamed from `LmcCookieConsentManager` to `CookieConsentManager`.

## Data attribute to open the cookie preference window has changed

The `data-cc` attribute that opened the cookie settings window has been changed from `c-settings` to `show-preferencesModal`.

```diff
-<a href="" data-cc="c-settings">Open cookie settings</a>
+<a href="" data-cc="show-preferencesModal">Open cookie preferences</a>
```

> [!NOTE]
> It is legally required to provide the user with a link to change cookie preferences even after the first consent is given.

## Cookie has been renamed

The cookie storing the consent data has been changed from `lmc_ccm` to `almacareer_ccm`. If you directly read the cookie value
(either on the backend or on the frontend), you need to update the cookie name.

> [!CAUTION]
> **Keep in mind that renaming the cookie will cause all previously given consents to be re-requested from all users.**
> This is expected and inevitable behavior with this change, as there is no legal way to migrate the old cookie to the
> new one, as we technically can't transfer the validity period of the old consent to the new cookie.

## Cookie content structure has changed

The internal structure of JSON cookie data has been changed and expanded.

The main change is that `cookie.level` is now `cookie.categories`. If you work with cookie data on the server,
you must update your server-side code to reflect this.

### Before
```json
{
  "level": [
    "necessary",
    "analytics",
    "functionality",
    "ad",
    "personalization"
  ],
  "revision": 0,
  "data": {
    "serviceName": "demo.example",
    "uid": "foo-bar-baz"
  },
  "rfc_cookie": true
}
```
### After
```json
{
  "categories": [
    "necessary",
    "analytics",
    "functionality",
    "ad",
    "personalization"
  ],
  "revision": 0,
  "data": {
    "serviceName": "demo.example",
    "uid": "foo-bar-baz"
  },
  "consentTimestamp": "2024-12-12T12:12:12.333Z",
  "consentId": "f6152595-45a0-4371-aa68-2fe97137111a",
  "services": {
    "necessary": [],
    "ad": [],
    "analytics": [],
    "functionality": [],
    "personalization": []
  },
  "lastConsentTimestamp": "2024-12-12T12:12:12.333Z",
  "expirationTime": 1764690394793
}
```

## Data attribute to run third-party scripts has changed

If you have conditional third-party scripts that depend on the consent category, you need to update the data attribute:

```diff
-<script data-cookiecategory="personalization" src="personalization.js" type="text/plain" defer></script>
+<script data-category="personalization" src="personalization.js" type="text/plain" defer></script>
```
## Method `allowedCategory()` renamed `acceptedCategory()`

If you use the `allowedCategory()` method to check if a consent category is allowed and to run conditional code based
on that, you need to rename the method to `acceptedCategory()`.

```diff
-if (cookieConsent.allowedCategory('personalization')) {
+if (cookieConsent.acceptedCategory('personalization')) {
  // Run personalization code
}
```

## Translation override `settingsModalMoreInfo` renamed

To be in line with the `vanilla-cookieconsent` library terminology, the term "preferences" is used instead of "settings".
If you used `translationOverrides` configuration, the key `settingsModalMoreInfo` has been renamed to `preferencesModalMoreInfo`.

## Secondary button mode config was removed

Configuration option `secondaryButtonMode` has been removed.

The consent dialog now always has a primary button "Accept all" and a secondary button "Accept necessary"
with no option to reconfigure this.

## Callbacks have been renamed and now have different parameters

- All callbacks now always have parameters `cookie` and `cookieConsent`.
- All callback parameters are now encapsulated in an object `{}` on the position of the first parameter.
- Two callbacks have been renamed for consistency with the vanilla-cookieconsent library:
  - `onAccept()` is now `onConsent()`
  - `onFirstAccept` is now `onFirstConsent()`

See readme for [callbacks documentation](README.md#callbacks).

## Spirit Design System upgrade and color themes

The library now uses the Spirit Design System color themes.

For users of Spirit Design System version 3 and newer, the color themes are already included in the CSS. No action is needed.

If you use an older version of Spirit Design System, or you do not use Spirit Design System at all, you need to include the color themes in your CSS:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@almacareer/cookie-consent-manager@3/CookieConsentManagerThemes.min.css">
```

See readme for [documentation](README.md#loading-the-plugin).

## Theming changes

Starting from version 3, the Cookie Consent Manager uses only the CSS custom properties provided by the
underlying vanilla-cookieconsent library and does not introduce any own custom properties.

Not all CSS custom properties have their equivalent in the new version of the library (and vice versa).
The table below lists all custom properties used in the previous version and their new names, paired as close as possible.

| Category          | CSS custom property – old name            | CSS custom property – new name                 |
|-------------------|-------------------------------------------|------------------------------------------------|
| Common            | `--lmcccm-font-family`                    | `--cc-font-family`                             |
|                   | `--lmcccm-base-font-size`                 | N/A                                            |
|                   | `--lmcccm-bg`                             | `--cc-bg`                                      |
|                   | `--lmcccm-text`                           | `--cc-primary-color`                           |
|                   | N/A                                       | `--cc-secondary-color`                         |
| Links             | `--lmcccm-link-text`                      | `--cc-link-color`                              |
|                   | `--lmcccm-link-text-decoration`           | N/A                                            |
|                   | `--lmcccm-link-hover-text`                | N/A                                            |
|                   | `--lmcccm-link-hover-text-decoration`     | N/A                                            |
|                   | `--lmcccm-link-active-text`               | N/A                                            |
| Buttons           | `--lmcccm-btn-font-weight`                | N/A                                            |
|                   | `--lmcccm-btn-text-transform`             | N/A                                            |
|                   | `--lmcccm-btn-border-width`               | N/A                                            |
|                   | `--lmcccm-btn-border-style`               | N/A                                            |
|                   | `--lmcccm-btn-border-radius`              | `--cc-btn-border-radius`                       |
|                   | `--lmcccm-btn-primary-bg`                 | `--cc-btn-primary-bg`                          |
|                   | `--lmcccm-btn-primary-text`               | `--cc-btn-primary-color`                       |
|                   | `--lmcccm-btn-primary-border`             | `--cc-btn-primary-border-color`                |
|                   | `--lmcccm-btn-primary-hover-bg`           | `--cc-btn-primary-hover-bg`                    |
|                   | `--lmcccm-btn-primary-hover-text`         | `--cc-btn-primary-hover-color`                 |
|                   | `--lmcccm-btn-primary-hover-border`       | `--cc-btn-primary-hover-border-color`          |
|                   | `--lmcccm-btn-primary-active-bg`          | N/A <sup>\*</sup>                              |
|                   | `--lmcccm-btn-primary-active-text`        | N/A <sup>\*</sup>                              |
|                   | `--lmcccm-btn-primary-active-border`      | N/A <sup>\*</sup>                              |
|                   | `--lmcccm-btn-secondary-bg`               | `--cc-btn-secondary-bg`                        |
|                   | `--lmcccm-btn-secondary-text`             | `--cc-btn-secondary-color`                     |
|                   | `--lmcccm-btn-secondary-border`           | `--cc-btn-secondary-border-color`              |
|                   | `--lmcccm-btn-secondary-hover-bg`         | `--cc-btn-secondary-hover-bg`                  |
|                   | `--lmcccm-btn-secondary-hover-text`       | `--cc-btn-secondary-hover-color`               |
|                   | `--lmcccm-btn-secondary-hover-border`     | `--cc-btn-secondary-hover-border-color`        |
|                   | `--lmcccm-btn-secondary-active-bg`        | N/A <sup>\*</sup>                              |
|                   | `--lmcccm-btn-secondary-active-text`      | N/A <sup>\*</sup>                              |
|                   | `--lmcccm-btn-secondary-active-border`    | N/A <sup>\*</sup>                              |
| Toggles           | N/A                                       | `--cc-pm-toggle-border-radius`                 |
|                   | `--lmcccm-toggle-bg-on`                   | `--cc-toggle-on-bg`                            |
|                   | `--lmcccm-toggle-bg-off`                  | `--cc-toggle-off-bg`                           |
|                   | `--lmcccm-toggle-knob-bg` <sup>\*\*</sup> | `--cc-toggle-on-knob-bg` <sup>\*\*</sup>       |
|                   | `--lmcccm-toggle-knob-bg` <sup>\*\*</sup> | `--cc-toggle-off-knob-bg` <sup>\*\*</sup>      |
|                   | `--lmcccm-toggle-knob-icon-color`         | N/A <sup>\*\*\*</sup>                          |
|                   | `--lmcccm-toggle-bg-readonly`             | `--cc-toggle-readonly-bg`                      |
|                   | N/A                                       | `--cc-toggle-readonly-knob-bg`                 |
|                   | N/A                                       | `--cc-toggle-readonly-knob-icon-color`         |
| Cookie categories | `--lmcccm-cookie-category-border-radius`  | N/A                                            |
|                   | `--lmcccm-cookie-category-bg`             | `--cc-cookie-category-block-bg`                |
|                   | N/A                                       | `--cc-cookie-category-block-border`            |
|                   | `--lmcccm-cookie-category-hover-bg`       | `--cc-cookie-category-block-hover-bg`          |
|                   | N/A                                       | `--cc-cookie-category-block-hover-border`      |
|                   | N/A                                       | `--cc-cookie-category-expanded-block-bg`       |
|                   | N/A                                       | `--cc-cookie-category-expanded-block-hover-bg` |
|                   | `--lmcccm-cookie-table-border`            | N/A                                            |
| Separators        | `--lmcccm-modal-section-border`           | `--cc-separator-border-color`                  |
| Backdrop          | `--lmcccm-backdrop-color`                 | `--cc-overlay-bg`                              |
| Modal             | `--lmcccm-modal-max-width`                | N/A                                            |
|                   | `--lmcccm-modal-max-height`               | N/A                                            |
|                   | N/A                                       | `--cc-modal-margin`                            |
|                   | `--lmcccm-modal-border-radius`            | `--cc-modal-border-radius`                     |
|                   | `--lmcccm-modal-bg`                       | N/A <sup>\*\*\*\*</sup>                        |
|                   | `--lmcccm-modal-text`                     | N/A <sup>\*\*\*\*</sup>                        |
|                   | N/A                                       | `--cc-modal-transition-duration`               |
| Footer            | N/A                                       | `--cc-footer-bg`                               |
|                   | N/A                                       | `--cc-footer-color`                            |
|                   | N/A                                       | `--cc-footer-border-color`                     |

<sup>\*)</sup> Active state is generally not styled in the vanilla-cookieconsent library.<br />
<sup>\*\*)</sup> Knob background color is now set separately for on and off states.<br />
<sup>\*\*\*)</sup> Knob icon color is now inherited from the toggle background color.<br />
<sup>\*\*\*\*)</sup> Modal background and text color now use the common `--cc-bg` and `--cc-primary-color` custom properties.

See readme for [full theming documentation](README.md#theming).

## Other notable changes

- Legacy CommonJS support (CJS) has been removed. Use ESM import syntax instead.
- `cookieTable` configuration does not affect in any way any cookies. The cookie table is used only for listing the cookies in the preferences modal.
  If you want to clear cookies by the underlying library, you can enable `autoClearCookies` and provide `autoClear` configuration in the `config` option.
- `updateLanguage()` method of the underlying vanilla-cookieconsent library has been renamed to `setLanguage()`
- `config` configuration option, which is used for overrides of the internal config of the underlying library is now deep merged,
  which means that you can override only the properties you need to change, and the rest will be kept from the default config (even nested properties).
