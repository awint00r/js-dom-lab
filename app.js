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

const addItemBtn = document.getElementById('add-item-btn');
addItemBtn.addEventListener('click', function() {
    const newItem = document.createElement('li');
    newItem.textContent = 'Another new item';
    itemList.appendChild(newItem);
});

const highlightBtn = document.getElementById('highlight-title-btn');
highlightBtn.addEventListener('click', function() {
  mainTitle.classList.toggle('highlight');
  console.log('Highlight button clicked');
});

function updateFooter() {
    const footer = document.getElementById('footer-text');
    const today = new Date().toLocaleDateString();
    footer.textContent = `DOM Manipulation Lab © ${today}`;
}
updateFooter();