"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const collapsibleButtons = document.querySelectorAll('.collapsible-btn');
    collapsibleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
                if (button.textContent) {
                    button.textContent = button.textContent.replace('-', '+');
                }
            }
            else {
                content.style.display = 'block';
                if (button.textContent) {
                    button.textContent = button.textContent.replace('+', '-');
                }
            }
        });
    });
});
