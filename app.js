const btnList = document.querySelector('#toggleList');
const listDiv = document.querySelector('.list');
const listUl = document.querySelector('.list ul');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionBtn = document.querySelector('button.description');

let ul = document.querySelector('ul');

const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');

const listItems = document.getElementsByTagName('li');

listUl.addEventListener('click', (event) => {
    if(event.target.tagName == 'BUTTON'){
        let li = event.target.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
    }
});

// listDiv.addEventListener('mouseover', (event) => {
//     if(event.target.tagName == 'LI'){
//         event.target.textContent = event.target.textContent.toUpperCase();

//     }
// });

// listDiv.addEventListener('mouseout', (event) => {
//     if(event.target.tagName == 'LI'){
//     event.target.textContent = event.target.textContent.toLowerCase();
//     }
// });

// for (let i = 0; i < listItems.length; i++) {
//     const thisItem = listItems[i];

//     thisItem.addEventListener('mouseover', () => {
//         thisItem.textContent = thisItem.textContent.toUpperCase();
//     });

//     thisItem.addEventListener('mouseout', () => {
//         thisItem.textContent = thisItem.textContent.toLowerCase();
//     });

// }

// button.addEventListener('click', () => {
//     p.textContent = input.value + ':';
// });

descriptionBtn.addEventListener('click', () => {
    descriptionP.innerHTML = descriptionInput.value + ':';
    // ul.innerHTML = '<li>Change the li tag</li>'
    descriptionP.title = "List description";
    descriptionP.style.color = 'darkred';
    descriptionInput.value = '';
});

btnList.addEventListener('click', () => {
    const divList = document.querySelector('div.list');
    if (divList.style.display == 'none') {
        divList.style.display = 'block';
        btnList.textContent = 'Hide List';
    }
    else {
        divList.style.display = 'none';
        btnList.textContent = 'Show List';
    }
});

addItemButton.addEventListener('click', () => {
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    if(li.textContent.length > 0){
        ul.appendChild(li);
    }
    addItemInput.value = '';
});

removeItemButton.addEventListener('click', () => {
    let lastLi = document.querySelector('li:last-child');
    ul.removeChild(lastLi);
});


