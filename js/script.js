// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

const mainEl = document.querySelector('main');
console.log(mainEl)
mainEl.style.backgroundColor = 'var(--main-bg)'
mainEl.innerHTML = '<h1>SEI rocks!</h1>'


// Add a class of flex-ctrto mainEl.

mainEl.classList.add('flex-ctr');


// Task 2.0
// Select and cache the <nav id="top-menu">element in a variable named topMenuEl.

const topMenuEl = document.getElementById("top-menu");


// Task 2.1
// Set the height topMenuEl element to be 100%.

topMenuEl.style.height = '100%';


// Task 2.2
// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Task 2.3
// Add a class of flex-around to topMenuEl.

topMenuEl.classList.add('flex-around');

// Task 3.0
// Copy the following data structure to the top of script.js:

// Task 3.1
// Iterate over the entire menuLinksarray and for each "link" object:

// Create an <a>element.

// On the new element, add an href attribute with its value set to the href property of the "link" object.

// Set the new element's content to the value of the text property of the "link" object.

// Append the new element to the topMenuElelement.

for (let i = 0; i < menuLinks.length; i++) {
   const aEl =  document.createElement('a');
   aEl.setAttribute('href', menuLinks[i].href); 
   const newText = document.createTextNode(menuLinks[i].text);
   aEl.appendChild(newText);
   topMenuEl.appendChild(aEl);
}