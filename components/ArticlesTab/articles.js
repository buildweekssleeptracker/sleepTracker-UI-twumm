// Get articles section from document
const articlesSection = document.querySelector('.articles');
const leftButton = document.createElement('div');
leftButton.classList.add('left-button');
leftButton.innerText = '<';
const rightButton = document.createElement('div');
rightButton.classList.add('right-button');
rightButton.textContent = '>';
// Insert buttons first(leftButton) and last(rightButton)
articlesSection.append(leftButton);
articlesSection.insertAdjacentElement('beforeend', rightButton);
