// Function to detect RTL languages
function isRTLLanguage(language) {
    const rtlLanguages = ['ar', 'he', 'fa', 'ur'];
    return rtlLanguages.includes(language.split('-')[0].toLowerCase());
}

// Function to set document direction based on browser language
function setDirectionBasedOnLanguage() {
    const language = navigator.language || navigator.userLanguage;
    const htmlElement = document.documentElement;
    
    if (isRTLLanguage(language)) {
        htmlElement.setAttribute('dir', 'rtl');
        // Also set the lang attribute
        htmlElement.setAttribute('lang', language);
    } else {
        htmlElement.setAttribute('dir', 'ltr');
    }
}

// Run when page loads
document.addEventListener('DOMContentLoaded', setDirectionBasedOnLanguage);