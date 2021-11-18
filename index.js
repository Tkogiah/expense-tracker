// FOREWARD AND CONTENT
function log(a) {
    console.log(a)
} 

//-------------------- DECLARE MAIN CONSTANTS ---------------------- 
let objArray = []
let overSum = [0]
let overPos = [0]
let overNeg = [0]
let total = 0
let positive = 0
let negative = 0

//UI NODES
const descriptionNode = document.getElementById('description')
let description = descriptionNode.value
const amountNode = document.getElementById('amount')
let amount = amountNode.value
const incomeNode = document.getElementById('income-btn')
const incomeClass = incomeNode.value
const expenseNode = document.getElementById('expense-btn')
const expenseClass = expenseNode.value
//OVERVIEW NODES
const balanceOverview = document.getElementById('overview-balance')
const incomeOverview = document.getElementById('overview-income')
const expenseOverview = document.getElementById('overview-expenses')
//TAB NODES
const allTab = document.querySelector('.tabs-all')
const incomeTab = document.querySelector('.tabs-income')
const expensesTab = document.querySelector('.tabs-expenses')
//DISPLAY NODES
const display = document.querySelector('.show')


//-------------------------- BUILD FUNCTIONS -------------------------

//OBJECT AND ARRAY TO INDEX OBJECT(S)
function primaryObject(des, amnt, val, id) {
    return {
        'str' : des,
        'int' : Number(amnt),
        'class' : val,
        'id' : id
    }
}

//ADD NEW ITEM EVENT LISTENER
function incomeOrExpense(node) {
    node.addEventListener('click', function() {
        let overSum = [0]
        let overPos = [0]
        let overNeg = [0]
        let total = 0
        let positive = 0
        let negative = 0
        if(!descriptionNode.value || !amountNode.value) return;
        let object = primaryObject(descriptionNode.value, amountNode.value, node.value)
        document.getElementById('description').value = ''
        document.getElementById('amount').value = ''
        objArray.push(object)
        overviewArray(objArray, overSum, overPos, overNeg)
        total = overSum.reduce((a,b) => { return a + b })  
        positive = overPos.reduce((a,b) => { return a + b })
        negative = overNeg.reduce((a,b) => { return a + b })  
        updateUI(objArray, total, positive, negative)
        description = ''
        amount = ''
    })
}

//BUILD OVERVIEW ARRAYS
function overviewArray(arr, arr1, arr2, arr3) {
    arr.forEach(element => {
        if (element.class == 'income') {
            arr1.push(Number(element.int.toFixed(2)))
            arr2.push(Number(element.int.toFixed(2)))

        }
        else if (element.class == 'expense') {
            arr1.push(-Number(element.int.toFixed(2)))
            arr3.push(-Number(element.int.toFixed(2)))
        }
    })
        
}

//BUILD LI FROM ARRAY
function arrayToLi(array) {
    array.forEach((element, index) => {
        element.id = index;
        let dashboardItem = `
            <div class='${element.class} li-items'id='${element.id}'>
                <li id='${element.id}'>
                    <div class='dashboard-item'>
                        ${element.str} : $ ${element.int}
                    </div>
                    <div class='delete'>
                        <input class='delete' name='delete' id='delete' type='image' src='https://img.icons8.com/external-wanicon-lineal-wanicon/64/000000/external-delete-user-interface-wanicon-lineal-wanicon.png'>
                    </div>
                </li>
            </div>    
        `
        display.insertAdjacentHTML('afterbegin', dashboardItem)
        const liDelete = document.getElementById('delete')
        liDelete.addEventListener('dblclick', deleteItem)
    });
}



//-------------------------- DISPLAY FUNCTIONS -------------------------

//UPDATE UI
function updateUI(array, num1, num2, num3) {
    assignOverviewNode(balanceOverview, num1)
    assignOverviewNode(incomeOverview, num2)
    assignOverviewNode(expenseOverview, num3)
    //remove all li from display
    document.querySelectorAll('.li-items').forEach((element) => element.remove());    
    //add all li to display
    arrayToLi(array)
    // description = ''
    // amount = ''
    //localStorage.setItem("storedObjArray", JSON.stringify(array));
}

//ASSIGN OVERVIEW NODES
function assignOverviewNode(node, num) {
    
    node.innerHTML = num
}


//-------------------------- TOGGLE FUNCTIONS -------------------------

allTab.addEventListener('click', function() {
    allTab.classList.remove('inactive')
    incomeTab.classList.add('inactive')
    expensesTab.classList.add('inactive')
    let displayNodes = document.querySelectorAll('.li-items')
    toggleLi(displayNodes)
})
incomeTab.addEventListener('click', function() {
    incomeTab.classList.remove('inactive')
    allTab.classList.add('inactive')
    expensesTab.classList.add('inactive')
    let displayNodes = document.querySelectorAll('.li-items')
    let expenseNodes = document.querySelectorAll('.expense')
    toggleLi(displayNodes)
    addHide(expenseNodes)
})
expensesTab.addEventListener('click', function() {
    expensesTab.classList.remove('inactive')
    allTab.classList.add('inactive')
    incomeTab.classList.add('inactive')
    let displayNodes = document.querySelectorAll('.li-items')
    let incomeNodes = document.querySelectorAll('.income')
    toggleLi(displayNodes)
    addHide(incomeNodes)
})

function toggleLi(nodes) {
    for (let node of nodes) {   
        node.classList.remove('hide');
    }
}
function addHide(nodes) {
    for (let node of nodes) {   
        node.classList.add('hide');
    }
}


//-------------------------- DELETE FUNCTION -------------------------

function deleteItem(event){
    const targetBtn = event.target;
    const entry = targetBtn.parentNode.parentNode.parentNode;
    objArray.splice( entry.id, 1);
    let overSum = [0]
    let overPos = [0]
    let overNeg = [0]
    let total = 0
    let positive = 0
    let negative = 0
    overviewArray(objArray, overSum, overPos, overNeg)
    total = overSum.reduce((a,b) => { return a + b })  
    positive = overPos.reduce((a,b) => { return a + b })
    negative = overNeg.reduce((a,b) => { return a + b })  
    updateUI(objArray, total, positive, negative)
}


//-------------------------- RESTORE LOCAL DATA ONLOAD -------------------------
// function restoreData(){
//     let storedObjArray = JSON.parse(localStorage.getItem('storedObjArray'))
//     if(storedObjArray.length >= 1) {
//         let objArray = storedObjArray
//         let overSum = [0]
//         let overPos = [0]
//         let overNeg = [0]
//         let total = 0
//         let positive = 0
//         let negative = 0
//         overviewArray(objArray, overSum, overPos, overNeg)
//         total = overSum.reduce((a,b) => { return a + b })  
//         positive = overPos.reduce((a,b) => { return a + b })
//         negative = overNeg.reduce((a,b) => { return a + b })  
//         updateUI(objArray, total, positive, negative)
//         return objArray
//     }
//     else {
//         return objArray = []
//     }
// }

//-------------------------- FUNCTION CALLS -------------------------
//restoreData()
incomeOrExpense(incomeNode)
incomeOrExpense(expenseNode)