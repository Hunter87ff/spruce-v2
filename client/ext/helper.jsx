export async function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Smoothly scrolls the document to the DOM element with the provided id.
 *
 * @param {string} id - The id of the element to scroll to.
 * @returns {Promise<void>} A promise that resolves when the scrolling action is triggered.
 */
export async function scrollToElement(id = '') {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
