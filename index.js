let item = document.getElementById('item')
let amount = document.getElementById('amount')
let button = document.getElementById('button')
let edit = document.getElementById('edit')
let deletebtn = document.getElementById('deletebtn')
let itemList = document.getElementById('first')
let imageIcons = document.getElementById('second') 

button.addEventListener('click', function() {
    let newItem = document.createElement('div');
    newItem.id = 'item-amount'
    newItem.innerText = `${item.value} : $${amount.value}`;
    itemList.appendChild(newItem);
    
    let editIcon = document.createElement('div')
    editIcon.id = edit
    editIcon.classList.add('edit')
    let editIconImg = document.createElement('img')
    editIconImg.src = 'https://img.icons8.com/wired/50/000000/edit.png'
    let deleteIconImg = document.createElement('img')
    deleteIconImg.src = 'https://img.icons8.com/external-wanicon-lineal-wanicon/64/000000/external-delete-user-interface-wanicon-lineal-wanicon.png'
    editIcon.appendChild(editIconImg)
    editIcon.appendChild(deleteIconImg)
    imageIcons.appendChild(editIcon)
    imageIcons.appendChild(deleteIcon)



})

