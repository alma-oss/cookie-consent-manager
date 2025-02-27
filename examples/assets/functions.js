/* eslint-disable no-unused-vars */
/**
 * Global function to reset cookie for the examples only
 *
 * @returns {void}
 */
function removeCookieAndReload() {
  document.cookie = `almacareer_ccm=; Max-Age=0; path=/; domain=${window.location.hostname}`;
  window.location.reload();
}

/**
 * @returns {void}
 */
function toggleLanguage() {
  const selectedLanguage = Array.from(document.getElementsByName('lang-select')).find(r => r.checked).value;

  window.ccm.setLanguage(selectedLanguage);
}

/**
 * @param {object} cookieConsent
 * @returns {void}
 */
function updateAcceptedCategories(cookieConsent) {
  for (const element of document.querySelectorAll('#categories > .is-success')) {
    element.classList.remove('is-success');
  }

  for (const category of ['necessary', 'ad', 'analytics', 'functionality', 'personalization']) {
    const element = document.getElementById(`consent-${category}`);
    if (cookieConsent.acceptedCategory(category)) {
      element.classList.add('is-success');
    } else {
      element.classList.remove('is-success');
    }
  }
}
