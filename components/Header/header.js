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
hamburgerMenuImage.setAttribute('style', 'width: 30px')
hamburgerMenu.setAttribute('style', 'display: none;')
hamburgerMenu.append(hamburgerMenuImage);
// Create h2 element for logo text
const logoText = document.createElement('h2');
logoText.textContent = 'SleepTracker';
// Create div for navItems, navItemsLeft and navItemsRight
const navItems = document.createElement('div');
navItems.classList.add('navItems');
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
about.href = '#';
const signUp = document.createElement('a');
signUp.textContent = 'Sign Up';
signUp.href = '#';
const signIn = document.createElement('a');
signIn.textContent = 'Sign In';
signIn.href = '#';

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
