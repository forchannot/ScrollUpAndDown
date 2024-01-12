// ==UserScript==
// @name         Scroll Buttons
// @version      0.1
// @description  Add scroll buttons to the right side of the page
// @author       forchannot
// @match        *://*/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    const topButton = document.createElement('button');
    topButton.textContent = '▲';
    topButton.id = 'scroll-top-button';
    topButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.body.appendChild(topButton);

    const bottomButton = document.createElement('button');
    bottomButton.textContent = '▼';
    bottomButton.id = 'scroll-bottom-button';
    bottomButton.addEventListener('click', function() {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
    document.body.appendChild(bottomButton);

    GM_addStyle(`
        #scroll-top-button {
            position: fixed;
            bottom: 35px;
            right: 6px;
            opacity: 0.5;
            border: none;
            padding: 0;
            font-size: 18px;
            background-color: transparent;
            z-index: 10000;
        }
        #scroll-bottom-button {
            position: fixed;
            bottom: 10px; /* Adjusted position for the bottom button */
            right: 6px;
            opacity: 0.5;
            border: none;
            padding: 0;
            font-size: 18px;
            background-color: transparent;
            z-index: 10000;
        }
    `);
})();
