let itemList=[];

let dashboardItems = document.querySelector('.dashboard-items')
let newIncomeItem = document.querySelector('.new-income-item')
let newIncomeAmount = document.querySelector('.new-income-amount')
let newIncomeButton = document.querySelector('.new-income-button')

newIncomeButton.addEventListener('click', function() {
    console.log('hello from the button')
    let newDashboardItem = document.createElement('li')
    let NDIEdit = document.createElement('img')
    NDIEdit.src = 'https://img.icons8.com/wired/50/000000/edit.png'
    let NDIDelete = document.createElement('img')
    NDIDelete.src = 'https://img.icons8.com/external-wanicon-lineal-wanicon/64/000000/external-delete-user-interface-wanicon-lineal-wanicon.png'
    newDashboardItem.innertext = `${newIncomeItem.value}  :  $${newIncomeAmount.value}`
    newDashboardItem.appendChild(NDIEdit)
    newDashboardItem.appendChild(NDIDelete)

    dashboardItems.appendChild(newDashboardItem)

})
