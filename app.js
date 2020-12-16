const btnList =document.querySelector('#toggleList');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionBtn = document.querySelector('button.description');

let ul = document.querySelector('ul');

const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');


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
    if(divList.style.display == 'none'){
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
    ul.appendChild(li);
    addItemInput.value = '';
});

removeItemButton.addEventListener('click', () => {
    let lastLi = document.querySelector('li:last-child');
    ul.removeChild(lastLi);
});


