// This mocks external script which provides personalized content (and uses cookies to identify the user).
// As such, it should only by run when user has given consent for "personalization" category.
const personalizationContentElement = document.getElementById('personalization-content');

personalizationContentElement.classList.remove('is-empty');
personalizationContentElement.classList.add('is-informative');
personalizationContentElement.innerText = 'personalization.js loaded and executed';
