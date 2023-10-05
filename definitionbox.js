const modal = document.createElement('div');
modal.className = 'modal';

const modalContent = document.createElement('div');
modalContent.className = 'modal-content';

const modalClose = document.createElement('span');
modalClose.textContent = '×';
modalClose.style.float = 'right';
modalClose.style.cursor = 'pointer';

const wordDefinition = document.createElement('p');
wordDefinition.id = 'wordDefinition';
wordDefinition.textContent = 'This is the definition of the word.';

modalContent.appendChild(modalClose);
modalContent.appendChild(wordDefinition);
modal.appendChild(modalContent);
document.body.appendChild(modal);


const wordElements = document.querySelectorAll('.word1');
wordElements.forEach((element) => {
    element.addEventListener('click', () => {
        const definition = element.getAttribute('data-definition');
        wordDefinition.textContent = definition;
        modal.style.display = 'block';
    });
});


modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
