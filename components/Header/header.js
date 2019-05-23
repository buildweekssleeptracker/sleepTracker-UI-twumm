// Get header tag from the html
const header = document.querySelector('header');
// Create div to contain the logo
const logoElement = document.createElement('div');
logoElement.classList.add('logo');
// Create div for hamburger menu
const hamburgerMenu = document.createElement('div');
hamburgerMenu.classList.add('hamburger-menu');
const hamburgerMenuImage = document.createElement('img');
hamburgerMenuImage.src = './img/menu-button.png';
hamburgerMenuImage.alt = 'Menu';
hamburgerMenuImage.setAttribute('style', 'width: 30px; cursor: pointer;')
hamburgerMenu.setAttribute('style', 'display: none;')
hamburgerMenu.append(hamburgerMenuImage);
// Create h2 element for logo text
const logoText = document.createElement('h2');
logoText.textContent = 'SleepTracker';
logoText.style.cursor = 'pointer';
logoText.addEventListener('click', () => document.location = 'index.html');
// Create div for navItems, navItemsLeft and navItemsRight
const navItems = document.createElement('div');
navItems.classList.add('navItems');
// Add event listener to add or remove hamburger menu
window.addEventListener('load', () => {
  window.innerWidth <= 800 ? navItems.classList.add('navItems-hidden') : null;
})
window.addEventListener('resize', () => {
  window.innerWidth <= 800 ? navItems.classList.add('navItems-hidden') : navItems.classList.remove('navItems-hidden');
})
const navItemsLeft = document.createElement('div');
navItemsLeft.classList.add('navItemsLeft');
const navItemsRight = document.createElement('div');
navItemsRight.classList.add('navItemsRight');
// Create a tags for nav links
const whySleepTracker = document.createElement('a');
whySleepTracker.textContent = 'Why SleepTracker';
whySleepTracker.href = '#';
const dashboard = document.createElement('a');
dashboard.textContent = 'Dashboard';
dashboard.href = '#';
const about = document.createElement('a');
about.textContent = 'About';
about.href = 'about.html';
const signUp = document.createElement('a');
signUp.textContent = 'Sign Up';
signUp.href = 'https://festive-nobel-517193.netlify.com/';
const signIn = document.createElement('a');
signIn.textContent = 'Sign In';
signIn.href = 'https://festive-nobel-517193.netlify.com/';

// Append elements to html
header.append(logoElement);
header.append(navItems);
logoElement.append(logoText);
logoElement.append(hamburgerMenu);
navItems.append(navItemsLeft);
navItems.append(navItemsRight);
// Append nav items
navItemsLeft.append(whySleepTracker);
navItemsLeft.append(dashboard);
navItemsLeft.append(about);
navItemsRight.append(signUp);
navItemsRight.append(signIn);

// Event handlers
hamburgerMenuImage.addEventListener('click', () => {
  
  const navItemsClassList = Array.from(navItems.classList).filter(classItem => classItem === 'navItems-hidden');
  navItemsClassList.indexOf('navItems-hidden') >= 0 ? 
    (
      TweenMax.to(".navItems", 0.75, {y: "-40px", ease:Power2.easeInOut}),
      navItems.classList.toggle('navItems-hidden'), 
      
      TweenMax.to(".navItems", 0.75, {y: "5px", ease:Power2.easeInOut})
    )
  : 
  (
      navItems.classList.add('navItems-hidden'),
      TweenMax.to(".navItems", 0.75, {y: "-40px", ease:Power2.easeInOut})
    );

});