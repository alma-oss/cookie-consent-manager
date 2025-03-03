<a name="3.0.0"></a>
# [3.0.0](https://github.com/alma-oss/cookie-consent-manager/compare/2.6.0...3.0.0) (2025-03-03)

> [!NOTE]
> For detailed upgrade instructions to version 3.0, please refer to the [upgrade guide](UPGRADE-3.0.md).

### BREAKING CHANGES

- Change default cookie name from `lmc_ccm` to `almacareer_ccm` ([bd12817](https://github.com/alma-oss/cookie-consent-manager/commit/bd12817))
- Change library npm organization to almacareer (fixes [#391](https://github.com/alma-oss/cookie-consent-manager/issues/391)) ([7698504](https://github.com/alma-oss/cookie-consent-manager/commit/7698504))
- Remove CommonJS suppport ([65b015e](https://github.com/alma-oss/cookie-consent-manager/commit/65b015e))
- Remove secondary button mode ([78e3e69](https://github.com/alma-oss/cookie-consent-manager/commit/78e3e69))
- Rename callbacks to match names from the vanilla-cookieconsent ([77160a2](https://github.com/alma-oss/cookie-consent-manager/commit/77160a2))
- Rename LmcCookieConsentManager to CookieConsentManager (part of [#392](https://github.com/alma-oss/cookie-consent-manager/issues/392)) ([bfc1ddf](https://github.com/alma-oss/cookie-consent-manager/commit/bfc1ddf))
- Rename settingsModalMoreInfo to preferencesModalMoreInfo ([8f88088](https://github.com/alma-oss/cookie-consent-manager/commit/8f88088))
- Update Spirit design tokens to v3 ([18e4f8b](https://github.com/alma-oss/cookie-consent-manager/commit/18e4f8b))
- Use named exports only ([23b9a1d](https://github.com/alma-oss/cookie-consent-manager/commit/23b9a1d))

### Code Refactoring

- Build package using Vite ([d3e6fc9](https://github.com/alma-oss/cookie-consent-manager/commit/d3e6fc9))
- Clean up ESBuild after migration to Vite ([766e444](https://github.com/alma-oss/cookie-consent-manager/commit/766e444))
- Decouple and test consentCollector ([22cf710](https://github.com/alma-oss/cookie-consent-manager/commit/22cf710))
- Extract pushToDataLayer to standalone and tested module ([4b6ef02](https://github.com/alma-oss/cookie-consent-manager/commit/4b6ef02))
- Rebuild distribuition ([bfe60da](https://github.com/alma-oss/cookie-consent-manager/commit/bfe60da))
- Rename settings-modal scss file to preferences-modal be consistent with the source code ([3ed682d](https://github.com/alma-oss/cookie-consent-manager/commit/3ed682d))
- Serve app using Vite ([18d4d89](https://github.com/alma-oss/cookie-consent-manager/commit/18d4d89))
- Switch package to be ESM only ([f770495](https://github.com/alma-oss/cookie-consent-manager/commit/f770495))
- Update CookieConsentManager to use API of vanilla-cookieconsent v3 ([f9d98e8](https://github.com/alma-oss/cookie-consent-manager/commit/f9d98e8))
- Update pushToDataLayer to new internal cookie value structure ([3c7ad75](https://github.com/alma-oss/cookie-consent-manager/commit/3c7ad75))
- Update translations to use new config structure ([e3cc92e](https://github.com/alma-oss/cookie-consent-manager/commit/e3cc92e))

### Dependencies

- Update dependency vanilla-cookieconsent to v3.1.0 ([abebff4](https://github.com/alma-oss/cookie-consent-manager/commit/abebff4))
- Update dependency nanoid to v5.0.9 [SECURITY] ([1026781](https://github.com/alma-oss/cookie-consent-manager/commit/1026781))
- Downgrade and lock conventional-changelog-cli on v3 ([66c82d7](https://github.com/alma-oss/cookie-consent-manager/commit/66c82d7))
- Migrate config renovate.json ([c6a4f66](https://github.com/alma-oss/cookie-consent-manager/commit/c6a4f66))
- Replace unmaintained npm-run-all ([13a9899](https://github.com/alma-oss/cookie-consent-manager/commit/13a9899))
- Update all (sub)dependencies and all dev dependencies

### Documentation

- Add catalog info for Backstage ([69f9bdd](https://github.com/alma-oss/cookie-consent-manager/commit/69f9bdd))
- Add link to consumed API into catalog-info ([2c3d5f1](https://github.com/alma-oss/cookie-consent-manager/commit/2c3d5f1))
- Add UPGRADE guide for version 3 ([c45b2fa](https://github.com/alma-oss/cookie-consent-manager/commit/c45b2fa))
- Add upgrade guide placeholder ([8056d04](https://github.com/alma-oss/cookie-consent-manager/commit/8056d04))
- Clarify GTM management by Alma Career Central ([c863589](https://github.com/alma-oss/cookie-consent-manager/commit/c863589))
- Fix link rendering in UPGRADE guide ([e39dc3c](https://github.com/alma-oss/cookie-consent-manager/commit/e39dc3c))
- Redesign docs using Spirit Design System ([07cee6e](https://github.com/alma-oss/cookie-consent-manager/commit/07cee6e))
- Sort languages in docs by their name, not code ([ddd86e5](https://github.com/alma-oss/cookie-consent-manager/commit/ddd86e5))
- Update contacts in package.json ([dca097a](https://github.com/alma-oss/cookie-consent-manager/commit/dca097a))
- Update example builds to match vanilla-cookieconsent v3 ([cf95e7e](https://github.com/alma-oss/cookie-consent-manager/commit/cf95e7e))
- Update examples to new API ([99e6af4](https://github.com/alma-oss/cookie-consent-manager/commit/99e6af4))
- Update README header to clearly states affiliation of the library ([6eb71e4](https://github.com/alma-oss/cookie-consent-manager/commit/6eb71e4))
- Update README to version 3 changes ([1951362](https://github.com/alma-oss/cookie-consent-manager/commit/1951362))
- Update version reference in readme ([8666483](https://github.com/alma-oss/cookie-consent-manager/commit/8666483))

### Features

- Add French (fr) translation ([97073c0](https://github.com/alma-oss/cookie-consent-manager/commit/97073c0))
- Add Portuguese (pt) translation ([7deb4bf](https://github.com/alma-oss/cookie-consent-manager/commit/7deb4bf))
- Add Romanian (ro) translation ([cc16614](https://github.com/alma-oss/cookie-consent-manager/commit/cc16614))
- Add Serbian (sr) translation ([3cd805c](https://github.com/alma-oss/cookie-consent-manager/commit/3cd805c))
- Add Spanish (es) translation ([84e5205](https://github.com/alma-oss/cookie-consent-manager/commit/84e5205))
- Submit consent language to consent collector (fixes [#387](https://github.com/alma-oss/cookie-consent-manager/issues/387)) ([d5a0eb0](https://github.com/alma-oss/cookie-consent-manager/commit/d5a0eb0))
- Use deep merge for config overwrites (fixes [#385](https://github.com/alma-oss/cookie-consent-manager/issues/385)) ([c0b8bba](https://github.com/alma-oss/cookie-consent-manager/commit/c0b8bba))
- Use new default consentCollectorApiUrl with a new resource type ([99a9b2e](https://github.com/alma-oss/cookie-consent-manager/commit/99a9b2e))

### Chores

- Do not publish npm to beta tag ([54aa329](https://github.com/alma-oss/cookie-consent-manager/commit/54aa329))
- Fix disabling commit hooks on CI ([a3ea991](https://github.com/alma-oss/cookie-consent-manager/commit/a3ea991))
- Change base branch for Renovate updates back to `main` ([c5f5455](https://github.com/alma-oss/cookie-consent-manager/commit/c5f5455))
- Lock eslint ^8 for renovate bot ([5b94ff6](https://github.com/alma-oss/cookie-consent-manager/commit/5b94ff6))
- Move repository from lmc-eu to alma-oss ([0beb8e0](https://github.com/alma-oss/cookie-consent-manager/commit/0beb8e0))
- Replace auto-assign github action ([a43aa6d](https://github.com/alma-oss/cookie-consent-manager/commit/a43aa6d))
- Replace node 16 with node 18 in gh actions builds ([6daf9ba](https://github.com/alma-oss/cookie-consent-manager/commit/6daf9ba))
- Setup github-actions packages updates using renovate bot ([718ada8](https://github.com/alma-oss/cookie-consent-manager/commit/718ada8))
- Switch from `sass` to `sass-embedded` ([09d9f8b](https://github.com/alma-oss/cookie-consent-manager/commit/09d9f8b))
- Update codeowners ([6d3a1c2](https://github.com/alma-oss/cookie-consent-manager/commit/6d3a1c2))
- Update version replace script to ESM ([970d6ac](https://github.com/alma-oss/cookie-consent-manager/commit/970d6ac))


<a name="2.6.0"></a>
# [2.6.0](https://github.com/lmc-eu/cookie-consent-manager/compare/2.5.0...2.6.0) (2024-04-10)

### Dependencies

- Update bugfix versions of dependencies ([6e58251](https://github.com/lmc-eu/cookie-consent-manager/commit/6e58251))

### Documentation

- Extend README to contain cookieTable example configuration ([a416a4a](https://github.com/lmc-eu/cookie-consent-manager/commit/a416a4a))
- Minor readme clarifications ([0ebb3ec](https://github.com/lmc-eu/cookie-consent-manager/commit/0ebb3ec))
- Update another link to orestbida library documentation to point to its branch v2.9 ([452d7ae](https://github.com/lmc-eu/cookie-consent-manager/commit/452d7ae))
- Update links to orestbida library documentation to point to its branch v2.9 ([17084ae](https://github.com/lmc-eu/cookie-consent-manager/commit/17084ae))

### Features

- Add ability to set cookie table ([b7b2b4d](https://github.com/lmc-eu/cookie-consent-manager/commit/b7b2b4d))
- Add Bosnian (bs) language ([096b6bd](https://github.com/lmc-eu/cookie-consent-manager/commit/096b6bd))
- Add Estonian (et) translation ([06eba57](https://github.com/lmc-eu/cookie-consent-manager/commit/06eba57))
- Add Latvian (lv) translation ([e389ed6](https://github.com/lmc-eu/cookie-consent-manager/commit/e389ed6))
- Add Lithuanian (lt) translation ([112b232](https://github.com/lmc-eu/cookie-consent-manager/commit/112b232))
- Add Macedonian (mk) translation ([b3c8990](https://github.com/lmc-eu/cookie-consent-manager/commit/b3c8990))
- Export all types of vanilla cookie consent ([7bb36d2](https://github.com/lmc-eu/cookie-consent-manager/commit/7bb36d2))

### Chores

- DRY when importing language configs ([a49d8f9](https://github.com/lmc-eu/cookie-consent-manager/commit/a49d8f9))
- Extract language loading to separate function ([6e6e21c](https://github.com/lmc-eu/cookie-consent-manager/commit/6e6e21c))
- Optimize imports ([25a636e](https://github.com/lmc-eu/cookie-consent-manager/commit/25a636e))
- Refactor block assembly ([6bd7ac4](https://github.com/lmc-eu/cookie-consent-manager/commit/6bd7ac4))

### Styles

- Always define types before use and do not warn for unused vars in exported types ([05d7ce6](https://github.com/lmc-eu/cookie-consent-manager/commit/05d7ce6))
- Fix enum definition which breaks eslint ([8842da9](https://github.com/lmc-eu/cookie-consent-manager/commit/8842da9)), closes [#issuecomment-1599432772](https://jira.int.lmc.cz/browse/issuecomment-1599432772)
- Fix errors detected by @lmc-eu/eslint-config-typescript rules ([cb4da09](https://github.com/lmc-eu/cookie-consent-manager/commit/cb4da09))
- Fix various eslint warnings and errors ([0082e41](https://github.com/lmc-eu/cookie-consent-manager/commit/0082e41))
- Optimize imports and minor codestyle improvements ([b467d03](https://github.com/lmc-eu/cookie-consent-manager/commit/b467d03))
- Replace concatenation with string templates ([27a87ed](https://github.com/lmc-eu/cookie-consent-manager/commit/27a87ed))
- Use object property shorthand ([c3de7fd](https://github.com/lmc-eu/cookie-consent-manager/commit/c3de7fd))


<a name="2.5.0"></a>
# [2.5.0](https://github.com/lmc-eu/cookie-consent-manager/compare/2.4.1...2.5.0) (2024-01-11)

### Documentation

- Rebrand to Alma Career also in documentation and meta information ([a9f9a1c](https://github.com/lmc-eu/cookie-consent-manager/commit/a9f9a1c))

### Features

- Add Croatian (hr) translation ([2ee50f3](https://github.com/lmc-eu/cookie-consent-manager/commit/2ee50f3))
- Add Slovenian (sl) translation ([aee08f7](https://github.com/lmc-eu/cookie-consent-manager/commit/aee08f7))
- Extend types to allow cookie tables settings ([33313ac](https://github.com/lmc-eu/cookie-consent-manager/commit/33313ac))
- Update translations and unify Cookie policy document naming ([0ef63d0](https://github.com/lmc-eu/cookie-consent-manager/commit/0ef63d0))

### Chores

- **deps:** Update dependency @lmc-eu/spirit-design-tokens to v1 ([8ab4715](https://github.com/lmc-eu/cookie-consent-manager/commit/8ab4715))
- Fix ts-jest config deprecations ([135288d](https://github.com/lmc-eu/cookie-consent-manager/commit/135288d))


<a name="2.4.1"></a>
# [2.4.1](https://github.com/lmc-eu/cookie-consent-manager/compare/2.4.0...2.4.1) (2023-12-27)

### Documentation

- Add notice about necessity to implement cookie deletion by each product itself ([45feb44](https://github.com/lmc-eu/cookie-consent-manager/commit/45feb44))

### Features

- Replace LMC company name with Alma Career ([9c2788a](https://github.com/lmc-eu/cookie-consent-manager/commit/9c2788a))
- Update hu translation ([2ede16e](https://github.com/lmc-eu/cookie-consent-manager/commit/2ede16e))
- Update links to privacy policy ([88b634e](https://github.com/lmc-eu/cookie-consent-manager/commit/88b634e))

### Chores

- Upgrade @lmc-eu/eslint-config-base to 3.0.1 ([0d6de3b](https://github.com/lmc-eu/cookie-consent-manager/commit/0d6de3b))
- **deps-dev:** Bump postcss from 8.4.19 to 8.4.31 ([1fdc8c9](https://github.com/lmc-eu/cookie-consent-manager/commit/1fdc8c9))
- **deps:** Bump @babel/traverse from 7.16.0 to 7.23.2 ([059ee92](https://github.com/lmc-eu/cookie-consent-manager/commit/059ee92))
- **deps:** Bump semver from 5.7.1 to 5.7.2 ([0189bab](https://github.com/lmc-eu/cookie-consent-manager/commit/0189bab))
- **deps:** Bump word-wrap from 1.2.3 to 1.2.5 ([5a94e5f](https://github.com/lmc-eu/cookie-consent-manager/commit/5a94e5f))
- **deps:** Update to Jest 29 ([5acdade](https://github.com/lmc-eu/cookie-consent-manager/commit/5acdade))
- Try to build this package also on Node.js v20 ([706ab9a](https://github.com/lmc-eu/cookie-consent-manager/commit/706ab9a))


<a name="2.4.0"></a>
# [2.4.0](https://github.com/lmc-eu/cookie-consent-manager/compare/2.3.3...2.4.0) (2023-06-13)

### Bug Fixes

- Fix imports not being properly recognized by IDEs ([18bfb83](https://github.com/lmc-eu/cookie-consent-manager/commit/18bfb83))

### Features

- Make part of settings modal text overridable ([7eccc48](https://github.com/lmc-eu/cookie-consent-manager/commit/7eccc48))

### Chores

- Remove @adamkudrna and @crispeen from codeowners ([7f8b9bc](https://github.com/lmc-eu/cookie-consent-manager/commit/7f8b9bc))


<a name="2.3.3"></a>
## [2.3.3](https://github.com/lmc-eu/cookie-consent-manager/compare/2.3.2...2.3.3) (2023-05-22)

### Bug Fixes

- Cannot use 'in' operator to search for 'uid' in undefined ([1deb32e](https://github.com/lmc-eu/cookie-consent-manager/commit/1deb32e))

### Chores

- **deps:** Bump json5 from 1.0.1 to 1.0.2 ([2548df7](https://github.com/lmc-eu/cookie-consent-manager/commit/2548df7))
- Disable update of stylelint-config ([eeaa415](https://github.com/lmc-eu/cookie-consent-manager/commit/eeaa415))


<a name="2.3.2"></a>
## [2.3.2](https://github.com/lmc-eu/cookie-consent-manager/compare/2.3.1...2.3.2) (2022-12-22)

### Bug Fixes

- Update button design tokens according to the latest design ([e23431a](https://github.com/lmc-eu/cookie-consent-manager/commit/e23431a))

### Chores

- Improve file name of the CSS theme map ([ed30742](https://github.com/lmc-eu/cookie-consent-manager/commit/ed30742))


<a name="2.3.1"></a>
## [2.3.1](https://github.com/lmc-eu/cookie-consent-manager/compare/2.3.0...2.3.1) (2022-12-15)

### Bug Fixes

- Change design token linked to button typography ([ca8a2ab](https://github.com/lmc-eu/cookie-consent-manager/commit/ca8a2ab))

### Dependencies

- Update Can-I-Use DB used by Browserslist ([ad07300](https://github.com/lmc-eu/cookie-consent-manager/commit/ad07300))


<a name="2.3.0"></a>
# [2.3.0](https://github.com/lmc-eu/cookie-consent-manager/compare/2.2.1...2.3.0) (2022-12-08)

### Bug Fixes

- Fix typo in Slovak translation ([6d52c18](https://github.com/lmc-eu/cookie-consent-manager/commit/6d52c18))

### Dependencies

- Pin dependencies ([055cd4b](https://github.com/lmc-eu/cookie-consent-manager/commit/055cd4b))
- Update all dev dependencies ([68327b9](https://github.com/lmc-eu/cookie-consent-manager/commit/68327b9))
- Update safe dependencies ([04a98da](https://github.com/lmc-eu/cookie-consent-manager/commit/04a98da))

### Documentation

- Fix typo in changelog message ([eca903b](https://github.com/lmc-eu/cookie-consent-manager/commit/eca903b))
- Remove integrity attributes because of integrity fails ([19fce10](https://github.com/lmc-eu/cookie-consent-manager/commit/19fce10))

### Features

- Replace LMC company name with new and translated legal name [#CCM-65](https://jira.int.lmc.cz/browse/CCM-65) ([ca8f15c](https://github.com/lmc-eu/cookie-consent-manager/commit/ca8f15c))

### Chores

- Add missing peer dependencies ([b4ddc72](https://github.com/lmc-eu/cookie-consent-manager/commit/b4ddc72))
- Fix typo in semver range (refs [#260](https://jira.int.lmc.cz/browse/260)) ([4aacfd9](https://github.com/lmc-eu/cookie-consent-manager/commit/4aacfd9))
- Freeze `vanilla-cookieconsent` to 2.8.0 or allow major release ([2388b8a](https://github.com/lmc-eu/cookie-consent-manager/commit/2388b8a))
- Set target branch for additional updates ([258723f](https://github.com/lmc-eu/cookie-consent-manager/commit/258723f))
- Test build on multiple node versions ([80782a2](https://github.com/lmc-eu/cookie-consent-manager/commit/80782a2))
- Update `nanoid` package to v3 branch only ([d13a836](https://github.com/lmc-eu/cookie-consent-manager/commit/d13a836))

### Styles

- Simplify constants imports ([0c8f45e](https://github.com/lmc-eu/cookie-consent-manager/commit/0c8f45e))

### Tests

- Fix haste module collision on local machine by ignoring ([70d42c8](https://github.com/lmc-eu/cookie-consent-manager/commit/70d42c8))


<a name="2.2.1"></a>
## [2.2.1](https://github.com/lmc-eu/cookie-consent-manager/compare/2.2.0...2.2.1) (2022-06-29)

### Bug Fixes

- Add missing SecondaryButtonMode export ([e2d5f6b](https://github.com/lmc-eu/cookie-consent-manager/commit/e2d5f6b))

### Dependencies

- Update all dev dependencies ([b96f653](https://github.com/lmc-eu/cookie-consent-manager/commit/b96f653), [9176c98](https://github.com/lmc-eu/cookie-consent-manager/commit/9176c98), [a79c078](https://github.com/lmc-eu/cookie-consent-manager/commit/a79c078), [0c9337b](https://github.com/lmc-eu/cookie-consent-manager/commit/0c9337b), [88f6706](https://github.com/lmc-eu/cookie-consent-manager/commit/88f6706), [2e93c24](https://github.com/lmc-eu/cookie-consent-manager/commit/2e93c24), [d55c0b8](https://github.com/lmc-eu/cookie-consent-manager/commit/d55c0b8), [addb38e](https://github.com/lmc-eu/cookie-consent-manager/commit/addb38e))
- Update dependency @lmc-eu/spirit-design-tokens to ^0.17.0 ([f78a255](https://github.com/lmc-eu/cookie-consent-manager/commit/f78a255), [2d7d6e9](https://github.com/lmc-eu/cookie-consent-manager/commit/2d7d6e9), [23b1bfa](https://github.com/lmc-eu/cookie-consent-manager/commit/23b1bfa))

### Tests

- Add SecondaryButtonMode to typescript example ([5c517f2](https://github.com/lmc-eu/cookie-consent-manager/commit/5c517f2))


<a name="2.2.0"></a>
# [2.2.0](https://github.com/lmc-eu/cookie-consent-manager/compare/2.1.2...2.2.0) (2022-04-28)

### Bug Fixes

- Prevent content from being unreachable on short viewports ([3a843e7](https://github.com/lmc-eu/cookie-consent-manager/commit/3a843e7))

### Dependencies

- Force dependency update of vulnerable minimist ([9d75378](https://github.com/lmc-eu/cookie-consent-manager/commit/9d75378))
- Update all dev dependencies ([55afece](https://github.com/lmc-eu/cookie-consent-manager/commit/55afece), [79893f5](https://github.com/lmc-eu/cookie-consent-manager/commit/79893f5),   [8b06890](https://github.com/lmc-eu/cookie-consent-manager/commit/8b06890), [c879760](https://github.com/lmc-eu/cookie-consent-manager/commit/c879760), [e616579](https://github.com/lmc-eu/cookie-consent-manager/commit/e616579))
- Update dependency @lmc-eu/spirit-design-tokens to ^0.9.0 ([8d45d29](https://github.com/lmc-eu/cookie-consent-manager/commit/8d45d29))

### Documentation

- Improve text flow in table ([3728df7](https://github.com/lmc-eu/cookie-consent-manager/commit/3728df7))

### Features

- Add secondaryButtonMode to choose secondary button behavior [#CCM-64](https://jira.int.lmc.cz/browse/CCM-64) ([e480b2d](https://github.com/lmc-eu/cookie-consent-manager/commit/e480b2d))

### Styles

- Conform to updated stylelint rules ([15e3fef](https://github.com/lmc-eu/cookie-consent-manager/commit/15e3fef))
- Decapitalize '{object}' as per eslint recommendation ([bf49a10](https://github.com/lmc-eu/cookie-consent-manager/commit/bf49a10))
- Remap tokens ([f350cf6](https://github.com/lmc-eu/cookie-consent-manager/commit/f350cf6))


<a name="2.1.2"></a>
## [2.1.2](https://github.com/lmc-eu/cookie-consent-manager/compare/2.1.1...2.1.2) (2022-03-23)

### Bug Fixes

- Do not export const enums when using `isolatedModules` ([6992c94](https://github.com/lmc-eu/cookie-consent-manager/commit/6992c94))

### Chores

- Introduce action for test builds ([b5bd866](https://github.com/lmc-eu/cookie-consent-manager/commit/b5bd866))

### Dependencies

- Update all dev dependencies ([c85c75f](https://github.com/lmc-eu/cookie-consent-manager/commit/c85c75f))
- Update all dev dependencies ([fea704e](https://github.com/lmc-eu/cookie-consent-manager/commit/fea704e))

### Documentation

- Using this library as typescript module ([02cdd2c](https://github.com/lmc-eu/cookie-consent-manager/commit/02cdd2c))

### Styles

- Switch from `currentcolor` to `currentColor` ([72dd624](https://github.com/lmc-eu/cookie-consent-manager/commit/72dd624))


<a name="2.1.1"></a>
## [2.1.1](https://github.com/lmc-eu/cookie-consent-manager/compare/2.1.0...2.1.1) (2022-03-08)

### Bug Fixes

- Make all properties of TranslationOverride type optional ([2bb8bdd](https://github.com/lmc-eu/cookie-consent-manager/commit/2bb8bdd))

### Dependencies

- Update all dev dependencies ([14c942f](https://github.com/lmc-eu/cookie-consent-manager/commit/14c942f))


<a name="2.1.0"></a>
# [2.1.0](https://github.com/lmc-eu/cookie-consent-manager/compare/2.0.0...2.1.0) (2022-03-07)

### Bug Fixes

- Disconnect settings modal close button from button styles ([71d2463](https://github.com/lmc-eu/cookie-consent-manager/commit/71d2463))
- Export enums as const for correct transpile into usable object ([24d394a](https://github.com/lmc-eu/cookie-consent-manager/commit/24d394a))
- Export missing types in main module ([7c27935](https://github.com/lmc-eu/cookie-consent-manager/commit/7c27935))
- Incompatible type definition of languages ([8fabfb3](https://github.com/lmc-eu/cookie-consent-manager/commit/8fabfb3))
- Provide type for vanilla cookie consent options ([67d78ba](https://github.com/lmc-eu/cookie-consent-manager/commit/67d78ba))

### Code Refactoring

- Unify access to language variables ([4f28840](https://github.com/lmc-eu/cookie-consent-manager/commit/4f28840))

### Dependencies

- Update all dev dependencies ([17ba9ba](https://github.com/lmc-eu/cookie-consent-manager/commit/17ba9ba), [c5a0ba0](https://github.com/lmc-eu/cookie-consent-manager/commit/c5a0ba0), [c2f7ebc](https://github.com/lmc-eu/cookie-consent-manager/commit/c2f7ebc))
- Update dependency @lmc-eu/spirit-design-tokens to ^0.7.0 ([ae8410b](https://github.com/lmc-eu/cookie-consent-manager/commit/ae8410b))

### Documentation

- **upgrade:** Fix typo ([7b645c2](https://github.com/lmc-eu/cookie-consent-manager/commit/7b645c2))
- Use consent configuration in examples ([52ae52b](https://github.com/lmc-eu/cookie-consent-manager/commit/52ae52b))

### Features

- Allow overriding consent description intro [#CCM-63](https://jira.int.lmc.cz/browse/CCM-63) ([1f6c31a](https://github.com/lmc-eu/cookie-consent-manager/commit/1f6c31a))
- Allow overriding default translation for consent modal title [#CCM-62](https://jira.int.lmc.cz/browse/CCM-62) ([32cd2ec](https://github.com/lmc-eu/cookie-consent-manager/commit/32cd2ec))
- Force content to spread over the whole row ([90161f0](https://github.com/lmc-eu/cookie-consent-manager/commit/90161f0))
- Link background color of disabled `Toggle` to corresponding design token ([841b320](https://github.com/lmc-eu/cookie-consent-manager/commit/841b320))
- Split consent description in two paragraphs [#CCM-63](https://jira.int.lmc.cz/browse/CCM-63) ([ae2575f](https://github.com/lmc-eu/cookie-consent-manager/commit/ae2575f))


<a name="2.0.0"></a>
# [2.0.0](https://github.com/lmc-eu/cookie-consent-manager/compare/1.3.0...2.0.0) (2022-02-11)

See [upgrade guide](UPGRADE-2.0.md) for upgrade guidance to version 2.0.

### BREAKING CHANGES

- Callbacks for handling settings modal [#CCM-48](https://jira.int.lmc.cz/browse/CCM-48) ([04a4da5](https://github.com/lmc-eu/cookie-consent-manager/commit/04a4da5))
- Style settings modal according to graphic design [#CCM-56](https://jira.int.lmc.cz/browse/CCM-56) ([75d1194](https://github.com/lmc-eu/cookie-consent-manager/commit/75d1194))
- Remove default dark theme [#CCM-56](https://jira.int.lmc.cz/browse/CCM-56) ([8f33481](https://github.com/lmc-eu/cookie-consent-manager/commit/8f33481))

### Dependencies

- Pin dependencies ([9d1e67b](https://github.com/lmc-eu/cookie-consent-manager/commit/9d1e67b))
- Update all dev dependencies ([e52565a](https://github.com/lmc-eu/cookie-consent-manager/commit/e52565a), [a4c7d40](https://github.com/lmc-eu/cookie-consent-manager/commit/a4c7d40), [8d9bee7](https://github.com/lmc-eu/cookie-consent-manager/commit/8d9bee7), [78f88b6](https://github.com/lmc-eu/cookie-consent-manager/commit/78f88b6), [7a08f42](https://github.com/lmc-eu/cookie-consent-manager/commit/7a08f42))
- Update dependency nanoid to v3.1.31 [SECURITY] ([32b2fb9](https://github.com/lmc-eu/cookie-consent-manager/commit/32b2fb9))
- Update dependency stylelint to v14 ([b1699d0](https://github.com/lmc-eu/cookie-consent-manager/commit/b1699d0))
- Update dependency vanilla-cookieconsent to 2.8.0 [#CCM-58](https://jira.int.lmc.cz/browse/CCM-58) ([b214dc0](https://github.com/lmc-eu/cookie-consent-manager/commit/b214dc0))
- Update Spirit Design Tokens ([af696cb](https://github.com/lmc-eu/cookie-consent-manager/commit/af696cb))

### Documentation

- Add button to open cookie settings modal [#CCM-57](https://jira.int.lmc.cz/browse/CCM-57) ([8acb0cd](https://github.com/lmc-eu/cookie-consent-manager/commit/8acb0cd))
- Add new onFirstAction and onChange callbacks [#CCM-48](https://jira.int.lmc.cz/browse/CCM-48) ([fb6590e](https://github.com/lmc-eu/cookie-consent-manager/commit/fb6590e))
- Update examples with new callbacks [#CCM-48](https://jira.int.lmc.cz/browse/CCM-48) ([b38c59e](https://github.com/lmc-eu/cookie-consent-manager/commit/b38c59e))
- Adjust changelog lists formatting to new LMC preset ([5c69666](https://github.com/lmc-eu/cookie-consent-manager/commit/5c69666))
- Avoid inconsistent states in language selection example ([532fcd8](https://github.com/lmc-eu/cookie-consent-manager/commit/532fcd8))
- Clearly state the plugin is mainly for LMC products ([885c04e](https://github.com/lmc-eu/cookie-consent-manager/commit/885c04e))
- Extend configuration example page to showcase onChange event ([e2ba3c1](https://github.com/lmc-eu/cookie-consent-manager/commit/e2ba3c1))
- Extend readme to reflect changes in version 2.0 ([ec6329b](https://github.com/lmc-eu/cookie-consent-manager/commit/ec6329b))
- List allowed categories on callbacks example page ([a417b8d](https://github.com/lmc-eu/cookie-consent-manager/commit/a417b8d))
- Organise CSS custom properties table ([98eed8e](https://github.com/lmc-eu/cookie-consent-manager/commit/98eed8e))
- Prefer `DOMContentLoaded` over `load` event to render cookie consent modal earlier ([edbd9bc](https://github.com/lmc-eu/cookie-consent-manager/commit/edbd9bc))
- Remove yarn.lock from examples ([f5cf132](https://github.com/lmc-eu/cookie-consent-manager/commit/f5cf132))
- Rework callback examples [#CCM-57](https://jira.int.lmc.cz/browse/CCM-57) ([e2a1347](https://github.com/lmc-eu/cookie-consent-manager/commit/e2a1347))
- Simplify changing of component language by using `updateLanguage()` method ([0acb434](https://github.com/lmc-eu/cookie-consent-manager/commit/0acb434))
- **upgrade:**
  - Add `DOMContentLoaded` recommendation [#CCM-57](https://jira.int.lmc.cz/browse/CCM-57) ([d98b306](https://github.com/lmc-eu/cookie-consent-manager/commit/d98b306))
  - Add guide for adding link to open cookie settings [#CCM-57](https://jira.int.lmc.cz/browse/CCM-57) ([98e77b5](https://github.com/lmc-eu/cookie-consent-manager/commit/98e77b5))
  - Add guide for displayMode ([a67f0a4](https://github.com/lmc-eu/cookie-consent-manager/commit/a67f0a4))
  - Add upgrade guide for rearranged callbacks [#CCM-57](https://jira.int.lmc.cz/browse/CCM-57) ([20779f4](https://github.com/lmc-eu/cookie-consent-manager/commit/20779f4))
  - Add upgrade guide for version 2.0 with CSS related changes [#CCM-57](https://jira.int.lmc.cz/browse/CCM-57) ([d949bc0](https://github.com/lmc-eu/cookie-consent-manager/commit/d949bc0))
- Use version aliases for external resources to keep them up-to-date ([75d1194](https://github.com/lmc-eu/cookie-consent-manager/commit/75d1194))

### Features

- Add Czech translations for settings modal [#CCM-54](https://jira.int.lmc.cz/browse/CCM-54) ([3560405](https://github.com/lmc-eu/cookie-consent-manager/commit/3560405))
- Add displayMode (default `force`) to choose between blocking pop-up and banner [#CCM-61](https://jira.int.lmc.cz/browse/CCM-61) ([6fdca25](https://github.com/lmc-eu/cookie-consent-manager/commit/6fdca25))
- Add settings modal translations for all remaining languages [#CCM-55](https://jira.int.lmc.cz/browse/CCM-55) ([3e67294](https://github.com/lmc-eu/cookie-consent-manager/commit/3e67294))
- Add temporary placeholder for other translations of settings modal ([bf99467](https://github.com/lmc-eu/cookie-consent-manager/commit/bf99467))
- Make contents of `<strong>` actually appear strong ([e9a6759](https://github.com/lmc-eu/cookie-consent-manager/commit/e9a6759))
- Simplify translations and make settings link strong [#CCM-60](https://jira.int.lmc.cz/browse/CCM-60) ([78cd4c7](https://github.com/lmc-eu/cookie-consent-manager/commit/78cd4c7))
- Submit consent to API also on settings change [#CCM-59](https://jira.int.lmc.cz/browse/CCM-59) ([ffe4963](https://github.com/lmc-eu/cookie-consent-manager/commit/ffe4963))
- Submit consent to API and dataLayer also on settings change [#CCM-59](https://jira.int.lmc.cz/browse/CCM-59) ([1daca26](https://github.com/lmc-eu/cookie-consent-manager/commit/1daca26))
- Tweak box mode of consent modal according to graphic design [#CCM-47](https://jira.int.lmc.cz/browse/CCM-47) ([18adcf3](https://github.com/lmc-eu/cookie-consent-manager/commit/18adcf3))
- Update czech translation [#CCM-54](https://jira.int.lmc.cz/browse/CCM-54) ([8e7e2b3](https://github.com/lmc-eu/cookie-consent-manager/commit/8e7e2b3))

### Chores

- Configure package url for bug tracker ([5c03f7d](https://github.com/lmc-eu/cookie-consent-manager/commit/5c03f7d))
- Do not exclude stylelint from automated updates anymore ([dd53241](https://github.com/lmc-eu/cookie-consent-manager/commit/dd53241))
- **stylelint:**
  - Conform to updated stylelint rules ([df8be8d](https://github.com/lmc-eu/cookie-consent-manager/commit/df8be8d))
  - Use the latest shared Stylelint config to resolve compatibility with Stylelint 14 ([ab0080a](https://github.com/lmc-eu/cookie-consent-manager/commit/ab0080a))
- Watch and build SCSS during development ([340fd91](https://github.com/lmc-eu/cookie-consent-manager/commit/340fd91))


<a name="1.3.0"></a>
# [1.3.0](https://github.com/lmc-eu/cookie-consent-manager/compare/1.2.1...1.3.0) (2022-01-05)

### Bug Fixes

- Fix spacing too big after core library upgrade ([7f7fd5d](https://github.com/lmc-eu/cookie-consent-manager/commit/7f7fd5d))

### Dependencies

- Update all dev dependencies ([612ddd9](https://github.com/lmc-eu/cookie-consent-manager/commit/612ddd9))
- Update dependency vanilla-cookieconsent to 2.7.2 ([10920c4](https://github.com/lmc-eu/cookie-consent-manager/commit/10920c4))

### Documentation

- Add `cookie_necessary_only_expiration` to configuration example ([68230d6](https://github.com/lmc-eu/cookie-consent-manager/commit/68230d6))

### Features

- Set shorter cookie expiration when only necessary category accepted [#CCM-53](https://jira.int.lmc.cz/browse/CCM-53) ([929d8f3](https://github.com/lmc-eu/cookie-consent-manager/commit/929d8f3))

### Chores

- **commitlint:** Remove ignore sections cause it is not used ([b421b19](https://github.com/lmc-eu/cookie-consent-manager/commit/b421b19))
- Define codeowners using company e-mail rather than nickname ([9f5c973](https://github.com/lmc-eu/cookie-consent-manager/commit/9f5c973))
- **changelog:** Add missing dependency on @lmc-eu/conventional-changelog-lmc-github ([90cadbb](https://github.com/lmc-eu/cookie-consent-manager/commit/90cadbb))
- **changelog:** Switch from bitbucket preset to Github preset ([6bf904a](https://github.com/lmc-eu/cookie-consent-manager/commit/6bf904a))
- Rename commitlint config to be dot notated ([c9aadcb](https://github.com/lmc-eu/cookie-consent-manager/commit/c9aadcb))


<a name="1.2.1"></a>
## [1.2.1](https://github.com/lmc-eu/cookie-consent-manager/compare/1.2.0...1.2.1) (2021-12-21)

### Bug Fixes

- Add missing cookie_name type in vanilla-cookieconsent declaration ([81396b3](https://github.com/lmc-eu/cookie-consent-manager/commit/81396b3))

### Documentation

- Fix links to previous version in changelog ([783a997](https://github.com/lmc-eu/cookie-consent-manager/commit/783a997))

<a name="1.2.0"></a>
# [1.2.0](https://github.com/lmc-eu/cookie-consent-manager/compare/1.1.2...1.2.0) (2021-12-21)

### Code Refactoring
- Enable new swap_buttons feature to proper button order by default [#CCM-51](https://jira.int.lmc.cz/browse/CCM-51) ([cf2d3c4](https://github.com/lmc-eu/cookie-consent-manager/commit/cf2d3c4))
- Use new getUserPreferences to retrieve actual user preferences [#CCM-51](https://jira.int.lmc.cz/browse/CCM-51) ([d873a22](https://github.com/lmc-eu/cookie-consent-manager/commit/d873a22))
- Use new onFirstAction and simplify conditions [#CCM-51](https://jira.int.lmc.cz/browse/CCM-51) ([96958d5](https://github.com/lmc-eu/cookie-consent-manager/commit/96958d5))

### Dependencies

- Update all dev dependencies ([38b46ca](https://github.com/lmc-eu/cookie-consent-manager/commit/38b46ca))
- Update and pin to `vanilla-cookieconsent` 2.7 [#CCM-51](https://jira.int.lmc.cz/browse/CCM-51) ([0469d9b](https://github.com/lmc-eu/cookie-consent-manager/commit/0469d9b))

### Documentation

- Add example to show all supported languages ([d142f3b](https://github.com/lmc-eu/cookie-consent-manager/commit/d142f3b))
- Fix stylelint violation in examples ([b547900](https://github.com/lmc-eu/cookie-consent-manager/commit/b547900))

### Features

- Make texts for cs, en, sk and pl less formal [#CCM-50](https://jira.int.lmc.cz/browse/CCM-50) ([7941d64](https://github.com/lmc-eu/cookie-consent-manager/commit/7941d64))

<a name="1.1.2"></a>
## [1.1.2](https://github.com/lmc-eu/cookie-consent-manager/compare/1.1.1...1.1.2) (2021-12-19)

### Bug Fixes

- **types:** Make options to be optional ([73af5a3](https://github.com/lmc-eu/cookie-consent-manager/commit/73af5a3))
### Chores

- Improve jest tests performance ([a994b3c](https://github.com/lmc-eu/cookie-consent-manager/commit/a994b3c))

<a name="1.1.1"></a>
## [1.1.1](https://github.com/lmc-eu/cookie-consent-manager/compare/1.1.0...1.1.1) (2021-12-16)

### Bug Fixes

- Apply link text decoration also for secondary button ([de5d7f8](https://github.com/lmc-eu/cookie-consent-manager/commit/de5d7f8))

<a name="1.1.0"></a>
# [1.1.0](https://github.com/lmc-eu/cookie-consent-manager/compare/1.0.2...1.1.0) (2021-12-16)

### Chores

- Add script for code coverage by tests ([86220c8](https://github.com/lmc-eu/cookie-consent-manager/commit/86220c8))
- **typescript:** Remove unused babel because we use tyescript [#CCM-40](https://jira.int.lmc.cz/browse/CCM-40) ([45b9e6c](https://github.com/lmc-eu/cookie-consent-manager/commit/45b9e6c))
- **typescript:** Run type check on ci pipeline [#CCM-40](https://jira.int.lmc.cz/browse/CCM-40) ([652d367](https://github.com/lmc-eu/cookie-consent-manager/commit/652d367))

### Code Refactoring

- **languages:** Introduce types for language configuration ([4b20feb](https://github.com/lmc-eu/cookie-consent-manager/commit/4b20feb))
- **typescript:** Introduce support for Typescript language [#CCM-40](https://jira.int.lmc.cz/browse/CCM-40) ([3b34deb](https://github.com/lmc-eu/cookie-consent-manager/commit/3b34deb))
- **typescript:** Migrate all source files to Typescript ([c74e5a8](https://github.com/lmc-eu/cookie-consent-manager/commit/c74e5a8))
- **typescript:** Separate types for cookie consent manager ([cf0e933](https://github.com/lmc-eu/cookie-consent-manager/commit/cf0e933))
- Use category instead of level in type names ([d348f59](https://github.com/lmc-eu/cookie-consent-manager/commit/d348f59))

### Dependencies

- Pin dependencies ([5bd9f67](https://github.com/lmc-eu/cookie-consent-manager/commit/5bd9f67))
- Update dependency @lmc-eu/spirit-design-tokens to ^0.5.0 ([1778c57](https://github.com/lmc-eu/cookie-consent-manager/commit/1778c57))
- Upgrade @lmc-eu/esling-config-base to 1.1.0 ([9e3a217](https://github.com/lmc-eu/cookie-consent-manager/commit/9e3a217))

### Features

- Add more theming options for links and buttons (`--lmcccm-link-text-decoration`, `--lmcccm-link-hover-text-decoration`, `--lmcccm-btn-text-transform`) ([8ee958b](https://github.com/lmc-eu/cookie-consent-manager/commit/8ee958b))
- Attempt to overlap UI of other third-party plugins ([693fe02](https://github.com/lmc-eu/cookie-consent-manager/commit/693fe02))

### Styles

- Use additional insights of eslint's base config as recommended ([2bd3398](https://github.com/lmc-eu/cookie-consent-manager/commit/2bd3398))

### Tests

- Fix module naming collision by ignoring `./dist` directory ([a933611](https://github.com/lmc-eu/cookie-consent-manager/commit/a933611))


<a name="1.0.2"></a>
## [1.0.2](https://github.com/lmc-eu/cookie-consent-manager/compare/1.0.1...1.0.2) (2021-12-14)

### Chores

- Annotate the CommonJS export names for ESM import in Node ([09aa8e6](https://github.com/lmc-eu/cookie-consent-manager/commit/09aa8e6))
- Do not lint build.js in examples ([e5e171b](https://github.com/lmc-eu/cookie-consent-manager/commit/e5e171b))
- Label bugfix pull requests with "bug" label ([6f10f31](https://github.com/lmc-eu/cookie-consent-manager/commit/6f10f31))
- **renovate:** Schedule dependency updates on weekly basis ([b08c018](https://github.com/lmc-eu/cookie-consent-manager/commit/b08c018))

### Dependencies

- Update all dev dependencies ([ba55e29](https://github.com/lmc-eu/cookie-consent-manager/commit/ba55e29))
- Update all dev dependencies ([4a23611](https://github.com/lmc-eu/cookie-consent-manager/commit/4a23611))
- Update dependency stylelint-order to v5 ([65db9eb](https://github.com/lmc-eu/cookie-consent-manager/commit/65db9eb))

### Documentation

- Change text color of success state to improve its contrast with background ([b444af2](https://github.com/lmc-eu/cookie-consent-manager/commit/b444af2))
- Fix links and formatting in readme ([41209fa](https://github.com/lmc-eu/cookie-consent-manager/commit/41209fa))
- **lighthouse:** Fix errors reported by Google Lighthouse in examples ([90905fb](https://github.com/lmc-eu/cookie-consent-manager/commit/90905fb))
- Make it clear one need to take care of already existing cookies ([82f2f9a](https://github.com/lmc-eu/cookie-consent-manager/commit/82f2f9a))


<a name="1.0.1"></a>
## [1.0.1](https://github.com/lmc-eu/cookie-consent-manager/compare/1.0.0...1.0.1) (2021-12-06)

### Chores

- **Note:** Version bump for npm publish. No code change. ([422614d](https://github.com/lmc-eu/cookie-consent-manager/commit/422614d))


<a name="1.0.0"></a>
# [1.0.0](https://github.com/lmc-eu/cookie-consent-manager/compare/0.8.2...1.0.0) (2021-12-06)

### Bug Fixes

- Tell bundlers not to bundle `crypto` dependency ([22ee445](https://github.com/lmc-eu/cookie-consent-manager/commit/22ee445))

### Chores

- Add label for Renovate bot ([f59f11f](https://github.com/lmc-eu/cookie-consent-manager/commit/f59f11f))
- Add renovate.json to configure automated deps updates ([adf893f](https://github.com/lmc-eu/cookie-consent-manager/commit/adf893f))
- Disable dependabot because of doing lot of noise ([71ddd3d](https://github.com/lmc-eu/cookie-consent-manager/commit/71ddd3d))
- Prepare for stable release ([a215c45](https://github.com/lmc-eu/cookie-consent-manager/commit/a215c45))
- **renovate:** Set `separateMajorMinor` to false for devDependencies ([6020fe2](https://github.com/lmc-eu/cookie-consent-manager/commit/6020fe2))

### Code Refactoring

- Move browser example into browser directory ([f6893ee](https://github.com/lmc-eu/cookie-consent-manager/commit/f6893ee))

### Dependencies

- Ignore stylelint updates ([2a25de1](https://github.com/lmc-eu/cookie-consent-manager/commit/2a25de1))
- Pin dependencies ([5c9feb7](https://github.com/lmc-eu/cookie-consent-manager/commit/5c9feb7))
- Update all dev dependencies ([b7bb2de](https://github.com/lmc-eu/cookie-consent-manager/commit/b7bb2de))
- Update Spirit Design Tokens ([fc2a281](https://github.com/lmc-eu/cookie-consent-manager/commit/fc2a281))

### Documentation

- Add readmes with basic instructions for examples ([03a8e3c](https://github.com/lmc-eu/cookie-consent-manager/commit/03a8e3c))
- Extend examples for inline `<script>` usage ([287c69d](https://github.com/lmc-eu/cookie-consent-manager/commit/287c69d))
- Introduce example for CommonJS require ([8a30904](https://github.com/lmc-eu/cookie-consent-manager/commit/8a30904))
- Introduce module example using webpack ([9e3876d](https://github.com/lmc-eu/cookie-consent-manager/commit/9e3876d))
- Link CJS and ESM examples to readme ([0c2f377](https://github.com/lmc-eu/cookie-consent-manager/commit/0c2f377))
- Rename example directories for better orientation ([51913bc](https://github.com/lmc-eu/cookie-consent-manager/commit/51913bc))
- Spiritify Bootstrap in examples ([e6aeae2](https://github.com/lmc-eu/cookie-consent-manager/commit/e6aeae2))


<a name="0.8.2"></a>
## [0.8.2](https://github.com/lmc-eu/cookie-consent-manager/compare/0.8.1...0.8.2) (2021-12-02)

### Bug Fixes

- Actually push to dataLayer only of first accept [#CCM-46](https://jira.int.lmc.cz/browse/CCM-46) ([507ae60](https://github.com/lmc-eu/cookie-consent-manager/commit/507ae60))
- Use proper level name stored to dataLayer ([b133746](https://github.com/lmc-eu/cookie-consent-manager/commit/b133746))


<a name="0.8.1"></a>
## [0.8.1](https://github.com/lmc-eu/cookie-consent-manager/compare/0.8.0...0.8.1) (2021-12-02)

### Bug Fixes

- Add missing 'ads' level to dataLayer ([ec6ed5b](https://github.com/lmc-eu/cookie-consent-manager/commit/ec6ed5b))

### Dependencies

- Bump babel-jest from 27.4.1 to 27.4.2 ([e3c499d](https://github.com/lmc-eu/cookie-consent-manager/commit/e3c499d))
- Bump jest from 27.4.1 to 27.4.2 ([832f4ce](https://github.com/lmc-eu/cookie-consent-manager/commit/832f4ce))
- Bump jest from 27.4.2 to 27.4.3 ([5320995](https://github.com/lmc-eu/cookie-consent-manager/commit/5320995))
- Bump postcss from 8.4.1 to 8.4.4 ([3211c80](https://github.com/lmc-eu/cookie-consent-manager/commit/3211c80))
- Bump sass from 1.43.5 to 1.44.0 ([078daa9](https://github.com/lmc-eu/cookie-consent-manager/commit/078daa9))


<a name="0.8.0"></a>
# [0.8.0](https://github.com/lmc-eu/cookie-consent-manager/compare/0.7.0...0.8.0) (2021-12-01)

### BREAKING CHANGES
- Remove unwanted theming options for secondary buttons ([f36d299](https://github.com/lmc-eu/cookie-consent-manager/commit/f36d299))
  - Remove: `--lmcccm-base-font-size`, `--lmcccm-btn-secondary-bg`, `--lmcccm-btn-secondary-hover-bg`, `--lmcccm-btn-secondary-active-bg`
- Update buttons theming API according to the latest design ([ba39ed9](https://github.com/lmc-eu/cookie-consent-manager/commit/ba39ed9))
  - Remove: `--lmcccm-btn-secondary-text`, `--lmcccm-btn-secondary-hover-text`, `--lmcccm-btn-secondary-active-text`
  - Add: `--lmcccm-btn-font-weight`
  - Change Inter font URL to include width `600`

### Bug Fixes

- Revert font family inheritance as it blocked font customization ([efe992e](https://github.com/lmc-eu/cookie-consent-manager/commit/efe992e))

### Chores

- Add ignored internal URL to link check config ([32c3755](https://github.com/lmc-eu/cookie-consent-manager/commit/32c3755))
- Merge linting into test workflow ([c99e621](https://github.com/lmc-eu/cookie-consent-manager/commit/c99e621))

### Dependencies

- Bump babel-jest from 27.3.1 to 27.4.1 ([ce100ad](https://github.com/lmc-eu/cookie-consent-manager/commit/ce100ad))
- Bump esbuild from 0.13.15 to 0.14.1 ([3d9fa63](https://github.com/lmc-eu/cookie-consent-manager/commit/3d9fa63))
- Bump eslint from 8.2.0 to 8.3.0 ([b2d83ae](https://github.com/lmc-eu/cookie-consent-manager/commit/b2d83ae))
- Bump jest from 27.3.1 to 27.4.1 ([c4791d8](https://github.com/lmc-eu/cookie-consent-manager/commit/c4791d8))
- Update Spirit Design Tokens ([7687df7](https://github.com/lmc-eu/cookie-consent-manager/commit/7687df7))

### Documentation

- Add custom theme demo to examples [#CCM-21](https://jira.int.lmc.cz/browse/CCM-21) ([f0855ed](https://github.com/lmc-eu/cookie-consent-manager/commit/f0855ed))
- Add description of extended configuration example ([fd7e8ba](https://github.com/lmc-eu/cookie-consent-manager/commit/fd7e8ba))
- Add table of contents to readme ([e6cdca6](https://github.com/lmc-eu/cookie-consent-manager/commit/e6cdca6))
- Fix link to vanilla cookieconsent readme ([2df83d3](https://github.com/lmc-eu/cookie-consent-manager/commit/2df83d3))
- Grammar fixes ([b6ecb31](https://github.com/lmc-eu/cookie-consent-manager/commit/b6ecb31))
- Improve docs design ([92abca3](https://github.com/lmc-eu/cookie-consent-manager/commit/92abca3))
- Improve formatting ([4d8962d](https://github.com/lmc-eu/cookie-consent-manager/commit/4d8962d))
- Make clear that Inter font link is mandatory unless font family is customized ([ea7837b](https://github.com/lmc-eu/cookie-consent-manager/commit/ea7837b))
- Use switches instead of buttons to demonstrate theming ([a008edc](https://github.com/lmc-eu/cookie-consent-manager/commit/a008edc))

### Features

- Add theming options to adjust button borders ([d1f38cc](https://github.com/lmc-eu/cookie-consent-manager/commit/d1f38cc))
  - Add `--lmcccm-btn-border-width`, `--lmcccm-btn-border-style`, `--lmcccm-btn-border-radius`, `--lmcccm-btn-primary-border`, `--lmcccm-btn-primary-hover-border`, `--lmcccm-btn-primary-active-border`
- Let base font size be inherited from surrounding text ([c12341d](https://github.com/lmc-eu/cookie-consent-manager/commit/c12341d))
- Push to dataLayer only of first accept [#CCM-46](https://jira.int.lmc.cz/browse/CCM-46) ([0b198a0](https://github.com/lmc-eu/cookie-consent-manager/commit/0b198a0))


<a name="0.7.0"></a>
# [0.7.0](https://github.com/lmc-eu/cookie-consent-manager/compare/0.6.0...0.7.0) (2021-11-26)

### Bug Fixes

- Make `font-family` fallback actually work as documented ([52e2656](https://github.com/lmc-eu/cookie-consent-manager/commit/52e2656))

### Chores

- Cache yarn dependencies to increase GH Actions jobs speed ([57becf7](https://github.com/lmc-eu/cookie-consent-manager/commit/57becf7))
- Fix condition to generate `minor` on both cases ([4e2e180](https://github.com/lmc-eu/cookie-consent-manager/commit/4e2e180))
- Test if package is still buildable ([e7ce285](https://github.com/lmc-eu/cookie-consent-manager/commit/e7ce285))

### Code Refactoring

- Extract assemble config into variable ([66f5e93](https://github.com/lmc-eu/cookie-consent-manager/commit/66f5e93))

### Dependencies

- Bump @babel/preset-env from 7.16.0 to 7.16.4 ([6912d80](https://github.com/lmc-eu/cookie-consent-manager/commit/6912d80))
- Bump @lmc-eu/commitlint-config from 1.0.4 to 1.0.5 ([d8c69f0](https://github.com/lmc-eu/cookie-consent-manager/commit/d8c69f0))
- Bump @lmc-eu/prettier-config from 1.1.1 to 1.2.0 ([d51f2da](https://github.com/lmc-eu/cookie-consent-manager/commit/d51f2da))
- Bump @lmc-eu/stylelint-config from 2.0.0 to 2.0.1 ([a0bdba8](https://github.com/lmc-eu/cookie-consent-manager/commit/a0bdba8))
- Bump esbuild from 0.13.14 to 0.13.15 ([b9c3993](https://github.com/lmc-eu/cookie-consent-manager/commit/b9c3993))
- Bump postcss from 8.3.11 to 8.4.1 ([7ccc52c](https://github.com/lmc-eu/cookie-consent-manager/commit/7ccc52c))
- Bump prettier from 2.4.1 to 2.5.0 ([9de88e9](https://github.com/lmc-eu/cookie-consent-manager/commit/9de88e9))
- Bump sass from 1.43.4 to 1.43.5 ([5679690](https://github.com/lmc-eu/cookie-consent-manager/commit/5679690))

### Documentation

- Add example of localStorage clear ([c19a414](https://github.com/lmc-eu/cookie-consent-manager/commit/c19a414))

### Features

- Autodetect language based on the value of `<html lang=...>` [#CCM-43](https://jira.int.lmc.cz/browse/CCM-43) ([e389636](https://github.com/lmc-eu/cookie-consent-manager/commit/e389636))
- Submit consent to API [#CCM-39](https://jira.int.lmc.cz/browse/CCM-39) ([85c9c02](https://github.com/lmc-eu/cookie-consent-manager/commit/85c9c02))
- Submit to API also current language and cookie expiration [#CCM-41](https://jira.int.lmc.cz/browse/CCM-41) ([be946f3](https://github.com/lmc-eu/cookie-consent-manager/commit/be946f3))

### Styles

- Introduce codestyle linting usingESLint refs [#CCM-6](https://jira.int.lmc.cz/browse/CCM-6) ([5b4756d](https://github.com/lmc-eu/cookie-consent-manager/commit/5b4756d))
- Lint entire codebase not few directories ([158eaa7](https://github.com/lmc-eu/cookie-consent-manager/commit/158eaa7))
- Reformat code by prettier ([b13af7b](https://github.com/lmc-eu/cookie-consent-manager/commit/b13af7b))
- Reformat code using ESLint ruleset refs [#CCM-6](https://jira.int.lmc.cz/browse/CCM-6) ([d9d96b9](https://github.com/lmc-eu/cookie-consent-manager/commit/d9d96b9))


<a name="0.6.0"></a>
# [0.6.0](https://github.com/lmc-eu/cookie-consent-manager/compare/0.5.0...0.6.0) (2021-11-19)

### BREAKING CHANGES

- Require service name to be passed as the first parameter #CCM-35 ([680165](https://github.com/lmc-eu/cookie-consent-manager/commit/680165670deafb93e913cc2a86ed615ba72130c8))

### Chores

- Add jest testing framework and unit testing workflow ([39468d1](https://github.com/lmc-eu/cookie-consent-manager/commit/39468d1))
- Check for broken links in markdown ([58a5a79](https://github.com/lmc-eu/cookie-consent-manager/commit/58a5a79))
- Fix building when using crypto in nanoid ([82f5943](https://github.com/lmc-eu/cookie-consent-manager/commit/82f5943))

### Dependencies

- Bump @commitlint/cli from 14.1.0 to 15.0.0 ([85474f8](https://github.com/lmc-eu/cookie-consent-manager/commit/85474f8))
- Bump @lmc-eu/commitlint-config from 1.0.3 to 1.0.4 ([10cf00e](https://github.com/lmc-eu/cookie-consent-manager/commit/10cf00e))
- Bump @lmc-eu/conventional-changelog-lmc-bitbucket ([d894fb2](https://github.com/lmc-eu/cookie-consent-manager/commit/d894fb2))
- Bump @lmc-eu/prettier-config from 1.1.0 to 1.1.1 ([a3cd839](https://github.com/lmc-eu/cookie-consent-manager/commit/a3cd839))
- Bump @lmc-eu/stylelint-config from 1.0.4 to 2.0.0 ([a7fa50d](https://github.com/lmc-eu/cookie-consent-manager/commit/a7fa50d))
- Bump esbuild from 0.13.13 to 0.13.14 ([a82527b](https://github.com/lmc-eu/cookie-consent-manager/commit/a82527b))
- Bump vanilla-cookieconsent from 2.6.1 to 2.6.2 ([1729ddd](https://github.com/lmc-eu/cookie-consent-manager/commit/1729ddd))

### Documentation

- Add example of specifying custom company names [#CCM-25](https://jira.int.lmc.cz/browse/CCM-25) ([131eb34](https://github.com/lmc-eu/cookie-consent-manager/commit/131eb34))
- Do not use patch part in URL to allow using bugfix versions automatically [#CCM-29](https://jira.int.lmc.cz/browse/CCM-29) ([b484c4e](https://github.com/lmc-eu/cookie-consent-manager/commit/b484c4e))
- Fix broken links in readme ([cadeb72](https://github.com/lmc-eu/cookie-consent-manager/commit/cadeb72))
- Fix wrong `autodetectLang` type in readme ([278a3b1](https://github.com/lmc-eu/cookie-consent-manager/commit/278a3b1))
- Introduce `companyNames` option in readme [#CCM-25](https://jira.int.lmc.cz/browse/CCM-25) ([06637bc](https://github.com/lmc-eu/cookie-consent-manager/commit/06637bc))
- Update list of supported languages ([84e99fd](https://github.com/lmc-eu/cookie-consent-manager/commit/84e99fd))

### Features

- Add translations for de, hu, ru and uk languages [#CCM-18](https://jira.int.lmc.cz/browse/CCM-18) ([6e31d97](https://github.com/lmc-eu/cookie-consent-manager/commit/6e31d97))
- Generate and store consent UUID on accept [#CCM-35](https://jira.int.lmc.cz/browse/CCM-35) ([519182d](https://github.com/lmc-eu/cookie-consent-manager/commit/519182d))
- Introduce `companyNames` option as i18n parameter [#CCM-25](https://jira.int.lmc.cz/browse/CCM-25) ([e271230](https://github.com/lmc-eu/cookie-consent-manager/commit/e271230))
- Unify company name amongst all translations [#CCM-18](https://jira.int.lmc.cz/browse/CCM-18) ([928118d](https://github.com/lmc-eu/cookie-consent-manager/commit/928118d))
- Update polish translation [#CCM-31](https://jira.int.lmc.cz/browse/CCM-31) ([3b6609b](https://github.com/lmc-eu/cookie-consent-manager/commit/3b6609b))

### Styles

- Fix pseudo-element notation according to stylelint-config ([f4a607f](https://github.com/lmc-eu/cookie-consent-manager/commit/f4a607f))

### Tests

- Unit tests for i18n [#CCM-25](https://jira.int.lmc.cz/browse/CCM-25) ([d5bf67b](https://github.com/lmc-eu/cookie-consent-manager/commit/d5bf67b))


<a name="0.5.0"></a>
# [0.5.0](https://github.com/lmc-eu/cookie-consent-manager/compare/0.4.1...0.5.0) (2021-11-11)

### Chores

- Skip breaking changes until package is stable ([7d8174d](https://github.com/lmc-eu/cookie-consent-manager/commit/7d8174d))

### Documentation

- Legacy import using CommonJS and problem with webpack ([e1fa6a7](https://github.com/lmc-eu/cookie-consent-manager/commit/e1fa6a7))
- Minor readme improvements ([3743330](https://github.com/lmc-eu/cookie-consent-manager/commit/3743330))
- Unify codestyle in examples ([c6ebfa0](https://github.com/lmc-eu/cookie-consent-manager/commit/c6ebfa0))

### Features

- Introduce build for CommonJS and use more common extensions ([8c2c553](https://github.com/lmc-eu/cookie-consent-manager/commit/8c2c553))
- Introduce ES module entry point ([fad5730](https://github.com/lmc-eu/cookie-consent-manager/commit/fad5730))


<a name="0.4.1"></a>
## [0.4.1](https://github.com/lmc-eu/cookie-consent-manager/compare/0.4.0...0.4.1) (2021-11-09)

### Chores

- Fix path change in spirit-design-token@0.4.1 ([46f3b47](https://github.com/lmc-eu/cookie-consent-manager/commit/46f3b47))
- Upgrade node.js version to v16 in pipelines ([e51afc9](https://github.com/lmc-eu/cookie-consent-manager/commit/e51afc9))
- Use `npm set script` instead of node script ([7f788f1](https://github.com/lmc-eu/cookie-consent-manager/commit/7f788f1))

### Dependencies

- Bump @commitlint/cli from 13.2.1 to 14.1.0 ([2e91e31](https://github.com/lmc-eu/cookie-consent-manager/commit/2e91e31))
- Bump @lmc-eu/browserslist-config from 1.0.0 to 1.0.1 ([f9cd8b4](https://github.com/lmc-eu/cookie-consent-manager/commit/f9cd8b4))
- Bump @lmc-eu/commitlint-config from 1.0.2 to 1.0.3 ([67febaa](https://github.com/lmc-eu/cookie-consent-manager/commit/67febaa))
- Bump @lmc-eu/prettier-config from 1.0.3 to 1.1.0 ([eb174bc](https://github.com/lmc-eu/cookie-consent-manager/commit/eb174bc))
- Bump @lmc-eu/spirit-design-tokens from 0.2.0 to 0.4.2 ([18a78ec](https://github.com/lmc-eu/cookie-consent-manager/commit/18a78ec))
- Bump @lmc-eu/stylelint-config from 1.0.3 to 1.0.4 ([bb04c6e](https://github.com/lmc-eu/cookie-consent-manager/commit/bb04c6e))
- Bump esbuild from 0.13.12 to 0.13.13 ([0c23f7c](https://github.com/lmc-eu/cookie-consent-manager/commit/0c23f7c))
- Bump postcss-cli from 8.3.1 to 9.0.2 ([4120c18](https://github.com/lmc-eu/cookie-consent-manager/commit/4120c18))

### Documentation

- Extend examples to showcase more features [#CCM-20](https://jira.int.lmc.cz/browse/CCM-20) ([de1a0f2](https://github.com/lmc-eu/cookie-consent-manager/commit/de1a0f2))

### Styles

- Adjust html indenting in .editorconfig ([4dad63c](https://github.com/lmc-eu/cookie-consent-manager/commit/4dad63c))
- Fix formatting according to updated prettier-config ([a70979a](https://github.com/lmc-eu/cookie-consent-manager/commit/a70979a))


<a name="0.4.0"></a>
# [0.4.0](https://github.com/lmc-eu/cookie-consent-manager/compare/0.3.1...0.4.0) (2021-11-05)

### Chores

- Introduce dependabot configuration for automated deps updates ([0cf893d](https://github.com/lmc-eu/cookie-consent-manager/commit/0cf893d))
- Remove prepare script before publishing package ([ac4b6a9](https://github.com/lmc-eu/cookie-consent-manager/commit/ac4b6a9))
- Rename pr-labeler config file to use yaml extension everywhere ([796bf2c](https://github.com/lmc-eu/cookie-consent-manager/commit/796bf2c))
- Use .yarnrc instead of .npmrc because we are using yarn ([66b2d5e](https://github.com/lmc-eu/cookie-consent-manager/commit/66b2d5e))

### Dependencies

- Bump @lmc-eu/conventional-changelog-lmc-bitbucket ([2e17ebd](https://github.com/lmc-eu/cookie-consent-manager/commit/2e17ebd))

### Features

- Introduce new design connected to Spirit design tokens [#CCM-7](https://jira.int.lmc.cz/browse/CCM-7) ([658c99f](https://github.com/lmc-eu/cookie-consent-manager/commit/658c99f))


<a name="0.3.1"></a>
## [0.3.1](https://github.com/lmc-eu/cookie-consent-manager/compare/0.3.0...0.3.1) (2021-11-04)

### Chores

- Automatically replace package version in readme file to current ([97454e1](https://github.com/lmc-eu/cookie-consent-manager/commit/97454e1))
- Disable commit message hook with CI env ([3b0e0b9](https://github.com/lmc-eu/cookie-consent-manager/commit/3b0e0b9))
- Disable prepare script with commitlint on CI publish ([4886281](https://github.com/lmc-eu/cookie-consent-manager/commit/4886281))
- Introduce contributors array to display package authors ([e2c3c4f](https://github.com/lmc-eu/cookie-consent-manager/commit/e2c3c4f))
- Introduce keywords to display on package page ([d8a3568](https://github.com/lmc-eu/cookie-consent-manager/commit/d8a3568))
- Introduce PR labelling ([4f8e67d](https://github.com/lmc-eu/cookie-consent-manager/commit/4f8e67d))
- Introduce release action which is triggered manually ([97c00f0](https://github.com/lmc-eu/cookie-consent-manager/commit/97c00f0))
- Omit version prefix from replacing jsdelivr urls in readme ([704332b](https://github.com/lmc-eu/cookie-consent-manager/commit/704332b))
- Run publish only on tagged refs without any prefix ([534caf3](https://github.com/lmc-eu/cookie-consent-manager/commit/534caf3))
- Set git tag version to plain semver string without prefix ([6f7c069](https://github.com/lmc-eu/cookie-consent-manager/commit/6f7c069))


<a name="0.3.0"></a>
# [0.3.0](https://github.com/lmc-eu/cookie-consent-manager/compare/0.2.0...0.3.0) (2021-11-02)

### Chores

- Create release on local machine and publish by ci pipeline [#CCM-8](https://jira.int.lmc.cz/browse/CCM-8) ([4ed90f9](https://github.com/lmc-eu/cookie-consent-manager/commit/4ed90f9))
- Introduce publish package pipeline [#CCM-8](https://jira.int.lmc.cz/browse/CCM-8) ([ac0a5aa](https://github.com/lmc-eu/cookie-consent-manager/commit/ac0a5aa))

### Code Refactoring

- Rearrange and document internal defaults ([5b6c8e6](https://github.com/lmc-eu/cookie-consent-manager/commit/5b6c8e6))

### Dependencies

- Bump all dependencies ([9b1b90c](https://github.com/lmc-eu/cookie-consent-manager/commit/9b1b90c))

### Documentation

- Extend description of necessary consent ([a0ec0de](https://github.com/lmc-eu/cookie-consent-manager/commit/a0ec0de))
- How to publish this package [#CCM-8](https://jira.int.lmc.cz/browse/CCM-8) ([7672f5e](https://github.com/lmc-eu/cookie-consent-manager/commit/7672f5e))

### Features

- Add 'ad' consent category [#CCM-12](https://jira.int.lmc.cz/browse/CCM-12) ([5777638](https://github.com/lmc-eu/cookie-consent-manager/commit/5777638))
- Enable management of third-party scripts ([0020661](https://github.com/lmc-eu/cookie-consent-manager/commit/0020661))


<a name="0.2.0"></a>
# [0.2.0](https://github.com/lmc-eu/cookie-consent-manager/compare/0.1.0...0.2.0) (2021-11-01)

### Bug Fixes

- Incomplete options passed by user overrides all defaults ([68f8dcb](https://github.com/lmc-eu/cookie-consent-manager/commit/68f8dcb))

### Chores

- Add repository URL to make it shown also on npmjs.com ([66947d6](https://github.com/lmc-eu/cookie-consent-manager/commit/66947d6))
- Block fixup commit message using github action ([1a43014](https://github.com/lmc-eu/cookie-consent-manager/commit/1a43014))
- Generate changelog using conventional changelog ([dddacfc](https://github.com/lmc-eu/cookie-consent-manager/commit/dddacfc))
- Introduce commit linting ([d8238c3](https://github.com/lmc-eu/cookie-consent-manager/commit/d8238c3))
- Introduce simple dev server for local development [#CCM-5](https://jira.int.lmc.cz/browse/CCM-5) ([84c3245](https://github.com/lmc-eu/cookie-consent-manager/commit/84c3245))
- Make package publishlable ([effcd7a](https://github.com/lmc-eu/cookie-consent-manager/commit/effcd7a))
- Rename `dev` script to more common `start` ([bb6bd54](https://github.com/lmc-eu/cookie-consent-manager/commit/bb6bd54))
- Run all check with single npm script ([fee171a](https://github.com/lmc-eu/cookie-consent-manager/commit/fee171a))
- Use usernames instead of names for codeowners ([5cd5eba](https://github.com/lmc-eu/cookie-consent-manager/commit/5cd5eba))

### Code Refactoring

- Unify variable casing to camelCase ([3f1367e](https://github.com/lmc-eu/cookie-consent-manager/commit/3f1367e))

### Documentation

- Add development and contributing section [#CCM-20](https://jira.int.lmc.cz/browse/CCM-20) ([4bc165d](https://github.com/lmc-eu/cookie-consent-manager/commit/4bc165d))
- Extend and rearrange README [#CCM-20](https://jira.int.lmc.cz/browse/CCM-20) ([2260342](https://github.com/lmc-eu/cookie-consent-manager/commit/2260342))
- Fix another typo in cdn path ([185d9f8](https://github.com/lmc-eu/cookie-consent-manager/commit/185d9f8))
- Fix typo in cdn path ([33ea2ec](https://github.com/lmc-eu/cookie-consent-manager/commit/33ea2ec))
- Introduce badges to make readme look more cool ([8e08301](https://github.com/lmc-eu/cookie-consent-manager/commit/8e08301))
- Mark config arguments optional in jsdoc ([10e48b2](https://github.com/lmc-eu/cookie-consent-manager/commit/10e48b2))
- Remove autoload script, extend default example [#CCM-20](https://jira.int.lmc.cz/browse/CCM-20) ([a85c7b3](https://github.com/lmc-eu/cookie-consent-manager/commit/a85c7b3))
- Rename docs to examples [#CCM-20](https://jira.int.lmc.cz/browse/CCM-20) ([32a0c39](https://github.com/lmc-eu/cookie-consent-manager/commit/32a0c39))

### Features

- Add callbacks for all onAccept scenarios [#CCM-24](https://jira.int.lmc.cz/browse/CCM-24) ([23314b5](https://github.com/lmc-eu/cookie-consent-manager/commit/23314b5))
- Add custom onAccept callback to extend the default one [#CCM-19](https://jira.int.lmc.cz/browse/CCM-19) ([8ed95ba](https://github.com/lmc-eu/cookie-consent-manager/commit/8ed95ba))
- Add translations for cs, en, sk and pl language [#CCM-10](https://jira.int.lmc.cz/browse/CCM-10) ([1743866](https://github.com/lmc-eu/cookie-consent-manager/commit/1743866))
- Configure consent levels [#CCM-12](https://jira.int.lmc.cz/browse/CCM-12) ([703cf98](https://github.com/lmc-eu/cookie-consent-manager/commit/703cf98))
- Configure plugin defaults ([bd6309f](https://github.com/lmc-eu/cookie-consent-manager/commit/bd6309f))
- Make language autodetection easily configurable [#CCM-26](https://jira.int.lmc.cz/browse/CCM-26) ([4404a9a](https://github.com/lmc-eu/cookie-consent-manager/commit/4404a9a))
- Provide cookieConsent instance to callbacks [#CCM-24](https://jira.int.lmc.cz/browse/CCM-24) ([9232b09](https://github.com/lmc-eu/cookie-consent-manager/commit/9232b09))
- Push info to dataLayer on accept ([4203092](https://github.com/lmc-eu/cookie-consent-manager/commit/4203092))
- Rename default language settings to defaultLang to make it more understandable [#CCM-26](https://jira.int.lmc.cz/browse/CCM-26) ([6635813](https://github.com/lmc-eu/cookie-consent-manager/commit/6635813))
- Return CookieConsent instance from the init function ([b217059](https://github.com/lmc-eu/cookie-consent-manager/commit/b217059))
- Save distribution files for instant usage and examples ([d9964f3](https://github.com/lmc-eu/cookie-consent-manager/commit/d9964f3))


<a name="0.1.0"></a>
# [0.1.0](https://github.com/lmc-eu/cookie-consent-manager/compare/19ff586...0.1.0) (2021-10-19)

### Chores

- Build package using ESbuild ([19ff586](https://github.com/lmc-eu/cookie-consent-manager/commit/19ff586))
- Introduce prettier and reformat files using default lmc config ([8c433a2](https://github.com/lmc-eu/cookie-consent-manager/commit/8c433a2))
- Lint css using github action ([2b7f4dd](https://github.com/lmc-eu/cookie-consent-manager/commit/2b7f4dd))

### Code Refactoring

- Build and rename distribution files ([bdb0f89](https://github.com/lmc-eu/cookie-consent-manager/commit/bdb0f89))

### Dependencies

- Bump sass to 1.43.2 ([63e57e3](https://github.com/lmc-eu/cookie-consent-manager/commit/63e57e3))

### Documentation

- Documentation of usage and configuration ([6db08fa](https://github.com/lmc-eu/cookie-consent-manager/commit/6db08fa))

### Features

- Initial configuration for cookie consent ([38a4221](https://github.com/lmc-eu/cookie-consent-manager/commit/38a4221))
- Introduce support for czech language ([ca547eb](https://github.com/lmc-eu/cookie-consent-manager/commit/ca547eb))
