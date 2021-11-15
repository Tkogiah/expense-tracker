// USER INPUT VALUES
const description = document.getElementById('description');
const amount = document.getElementById('amount');
const income = document.getElementById('income')
const expense = document.getElementById('expense')
// OVERVIEW 
const incomeOverview = document.querySelector('.running-income')
const expensesOverview = document.querySelector('.running-expense')
const balanceOverview = document.querySelector('.running-balance')
// TABS
const incomeTab = document.getElementById('tabs-income')
const expenseTab = document.getElementById('tabs-expenses')
const allTab = document.getElementById('tabs-all')
// DISPLAY ELEMENTS
const incomeDisplay = document.getElementById('income-display')
const expenseDisplay = document.getElementById('expense-display')
// BUILDER ARRAY
const incomeAndExpenses = [];
// TOTAL ARRAYS
const totalIncome = [];
const totalExpense = [];
const totalBalance = [];

//TRIGGGER EVENT LISTENER FUNCTION
function addNewIncomeOrExpense(trigger) {
    trigger.addEventListener('click', function() { 
        if(!description.value || !amount.value || !trigger.value) return;
        let displayId = buildUserInputObject(description.value, amount.value, trigger.value, incomeAndExpenses); 
        let display = displayPicker(trigger.value, amount.value)
        displayObject(trigger.value, description.value, amount.value, displayId, display);
        //RESET USER INPUT FIELDS
        description.value = ''
        amount.value = ''
        income.value = 'income'
        expense.value = 'expense'
    })
}

//FUNCTION TO TOGGLE TABS
function activeInactive(active, inactive1, inactive2, display, hidden1) {
    active.addEventListener('click', function() {
        active.classList.remove('inactive')
        inactive1.classList.add('inactive')
        inactive2.classList.add('inactive')
        display.classList.remove('hidden')
        hidden1.classList.add('hidden') 
    })
}
//FUNCTION TO SHOW ALL
function displayAll() {
    allTab.addEventListener('click', function() {
        allTab.classList.remove('inactive')
        expenseTab.classList.add('inactive')
        incomeTab.classList.add('inactive')
        incomeDisplay.classList.remove('hidden')
        expenseDisplay.classList.remove('hidden')
        
    })
}
//OBJECT BUILDER AND RETURNS ID FOR <li>
function buildUserInputObject(desc,amnt,display, masterArray) {   
    let listItem = {
        'type': display,
        'item':desc,
        'amount':parseFloat(amnt)
    }
    masterArray.push(listItem);
    let indexId = masterArray.length-1
    return indexId
}

//FUNCTION TO PREPARE ALL DISPLAY ELEMENTS
function displayPicker(value, amnt) {
    if(value == 'income') {
        totalBalance.push(Math.abs(amnt))
        totalIncome.push(Math.abs(amnt))
        return display = incomeDisplay 
    }
    else if(value == 'expense') {
        totalBalance.push(-Math.abs(amnt))
        totalExpense.push(-Math.abs(amnt))
        return display = expenseDisplay
    }
}

//FUNCTION TO DISPLAY ON SELECTED DASHBOARD 
function displayObject(value, desc, amnt, id, display) {
        
    let dashboardItem = `<li class='${value}' id='${id}'>${desc} : $${amnt}
                        <img id='delete' src='https://img.icons8.com/external-wanicon-lineal-wanicon/64/000000/external-delete-user-interface-wanicon-lineal-wanicon.png'>
                        <img id='edit' src='https://img.icons8.com/wired/50/000000/edit.png'> 
                        </li>`

    display.insertAdjacentHTML('beforeend', dashboardItem)

}

//FUNCTION RUNS
addNewIncomeOrExpense(income);
addNewIncomeOrExpense(expense);
activeInactive(incomeTab, allTab, expenseTab, incomeDisplay, expenseDisplay)
activeInactive(expenseTab, incomeTab, allTab, expenseDisplay, incomeDisplay)
displayAll()
