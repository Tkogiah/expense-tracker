// USER INPUT VALUES
const description = document.getElementById('description');
const amount = document.getElementById('amount');
const income = document.getElementById('income')
const expense = document.getElementById('expense')
//TABS tabs-income tabs-expenses tabs-all
const incomeTab = document.querySelector('.tabs-income')
const expenseTab = document.querySelector('.tabs-expenses')
const allTab = document.querySelector('.tabs-all')
// DISPLAY DIVS
const incomeDisplay = document.querySelector('.income-display')
const expenseDisplay = document.querySelector('.expense-display')
const allDisplay = document.querySelector('.all-display')
// BUILDER ARRAY
const incomeAndExpenses = [];

//TRIGGGER EVENT LISTENER FUNCTION
function addNewIncomeOrExpense(trigger) {
    trigger.addEventListener('click', function() { 
        if(!description.value || !amount.value || !trigger.value) return;
        let displayId = buildUserInputObject(description.value, amount.value, trigger.value, incomeAndExpenses); 
        let display = displayPicker(trigger.value)
        displayObject(trigger.value, description.value, amount.value, displayId, display);
        //RESET VALUES
        description.value = ''
        amount.value = ''
        income.value = 'income'
        expense.value = 'expense'
    })
}

//FUNCTION TO TOGGLE TABS
function activeInactive(active, inactive1, inactive2, display, hidden1, hidden2) {
    active.addEventListener('click', function() {
        active.classList.remove('inactive')
        inactive1.classList.add('inactive')
        inactive2.classList.add('inactive')
        display.classList.remove('hidden')
        hidden1.classList.add('hidden')
        hidden2.classlist.add('hidden') 
    })
}
//FUNCTION TO SHOW OR HIDE DASHBOARD ELEMENTS


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

//FUNCTION TO SELECT PROPER DISPLAY
function displayPicker(value) {
    if(value == 'income') {
        console.log('hello from the income if')
        return display = incomeDisplay 
    }
    else if(value == 'expense') {
        console.log('hello from the expense else if')
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
    allDisplay.insertAdjacentHTML('beforeend', dashboardItem)
    
}

//function to edit or delete
function modifyListItem(event) {
    const modifyButton = event.target;
    
    if(modifyButton.id == 'delete') {
        incomeAndExpenses.splice(modifyButton.parentNode.id, 1)
    }
    else if(modifyButton.id == 'edit') {
        console.log('hello from the edit node')

    }


}

//FUNCTION RUNS
addNewIncomeOrExpense(income);
addNewIncomeOrExpense(expense);
activeInactive(incomeTab, allTab, expenseTab, incomeDisplay, allDisplay, expenseDisplay)
activeInactive(expenseTab, incomeTab, allTab, expenseDisplay, incomeDisplay, allDisplay)
activeInactive(allTab, expenseTab, incomeTab, allDisplay, expenseDisplay, incomeDisplay)
