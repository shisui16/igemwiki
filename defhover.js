document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with the 'word' class
    const wordElements = document.querySelectorAll('.wordhover');
    const definitionPopup = document.getElementById('wordDefinitionPopup');

    // Add mouseover and mouseout event listeners to each word
    wordElements.forEach((element) => {
        element.addEventListener('mouseover', function() {
            const definition = element.getAttribute('data-definition-hover');
            showPopup(definition, element);
        });

        element.addEventListener('mouseout', function() {
           hidePopup();
        });
    });

    // Show the popup
    function showPopup(definition, element) {
        const elementRect = element.getBoundingClientRect();
        definitionPopup.textContent = definition;
        definitionPopup.style.display = 'block';
        definitionPopup.style.left = elementRect.left + 'px';
        definitionPopup.style.top = (elementRect.bottom + 5) + 'px';
    }

    // Hide the popup
    function hidePopup() {
       definitionPopup.style.display = 'none';
    }
});
