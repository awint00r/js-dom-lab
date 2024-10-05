const mainTitle = document.getElementById('main-title');
const paragraph = document.querySelector('#content p');

console.log(mainTitle);
console.log(paragraph);

mainTitle.textContent = 'DOM Manipulation with JavaScript';
paragraph.textContent = 'Hello, I am Austin and I am learning DOM Manipulation!';

const newItem = document.createElement('li');
newItem.textContent = 'Newly added item';
const itemList = document.getElementById('item-list');
itemList.appendChild(newItem);