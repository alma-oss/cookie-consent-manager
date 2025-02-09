# Upgrade from 2.x to 3.0
Release 3.0 includes backward-incompatible changes, including changes in the underlying vanilla-cookieconsent library,
which has also been upgraded from version 2 to 3.

This guide summarizes relevant changes in both `@almacareer/cookie-consent` and `(vanilla-cookieconsent)[https://github.com/orestbida/cookieconsent]`
library to help you upgrade your codebase.

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

## Theming changes and Spirit Design System upgrade

TODO

See readme for [full theming documentation](README.md#theming).

## Other notable changes

- Legacy CommonJS support (CJS) has been removed. Use ESM import syntax instead.
- `cookieTable` configuration does not affect in any way any cookies. The cookie table is used only for listing the cookies in the preferences modal.
  If you want to clear cookies by the underlying library, you can enable `autoClearCookies` and provide `autoClear` configuration in the `config` option.
- `updateLanguage()` method of the underlying vanilla-cookieconsent library has been renamed to `setLanguage()`
- `config` configuration option, which is used for overrides of the internal config of the underlying library is now deep merged,
  which means that you can override only the properties you need to change, and the rest will be kept from the default config (even nested properties).
