//Section 0--Setting up a FORM for the user's 3 inputs and 1 trigger to submit onclick

//Grab the user's desired description (str user <input>)
//Grab the user's desired amount (int user <input>)
//Grab the user's radio input (str user <input>)
//Grab trigger to initiate the function
/* HTML/CSS -- your radio button should give a string value***all inputs need their own div */
/* HTML/CSS -- All inputs should be wrapped in a form with the form action pulling a function */
const description = document.getElementById('description');
const amount = document.getElementById('amount');
const incomeOrExpense = document.querySelector('input[name="income-or-expense"]:checked');
const trigger = document.getElementById('trigger');
const incomeRadio = document.getElementById('income')
const expenseRadio = document.getElementById('expense')

//Grab the parent node of the income display
//Grab the parent node of the expenses display

const incomeDisplay = document.querySelector('.income-display')
const expenseDisplay = document.querySelector('.expense-display')
const allDisplay = document.querySelector('.all-display')


//Section 1 -- Capture the user data and build the primary object

//1. Initialize global scope array to store each object inside    
//2. initialize primary function -- the event listener
    //a. Set the input.values of all three inputs to their own variables
    //b. Guard clause to ensure all inputs have a value
    //c. call buildUserInputObject to take 3 data points and 1 array returns the id value of the stored object
    //d. call displayPicker to pick which display we are going to use and return the appropriate node  
    //e.  
//4. take the three piceses of information as one object
/* JS--BE SURE TO GUARD CLAUSE THESE PREVIOUS THREE NECESSARY INPUTS -- THEY ARE ALL NEEDED */  
const incomeAndExpenses = [];

trigger.addEventListener('click', function() { 
    let desval = description.value;   
    let amtval = amount.value;
    let IEval = incomeOrExpense.value;
   
    if(!desval || !amtval || !IEval) return;

    let displayId = buildUserInputObject(desval, amtval, IEval, incomeAndExpenses); 
    let display = displayPicker(IEval)

    displayObject(IEval, desval, amtval, displayId, display);
    description.value = ''
    amount.value = ''

    
})

//Section 2 -- HELPER FUNCTIONS FOUND IN heroFunction()

//Take 3 strings, 1 array and build an object to push into the array
//call assignID to reassign 
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

//assigns an id to each object that matches the passed array's index: array[5].id == 5, array[2].id == 2, etc 
function assignID(array) {   
    array.forEach((item, i) => {
        item.id = i
    })
}

//function to choose display
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
//function displays full object value on proper screen 
function displayObject(value, desc, amnt, id, display) {
    
    let dashboardItem = `<li class='${value}' id='${id}'>${desc} : $${amnt}
                        <img id='delete' src='https://img.icons8.com/external-wanicon-lineal-wanicon/64/000000/external-delete-user-interface-wanicon-lineal-wanicon.png'>
                        <img id='edit' src='https://img.icons8.com/wired/50/000000/edit.png'> 
                        </li>`

                        display.insertAdjacentHTML('beforeend', dashboardItem)
                        allDisplay.insertAdjacentHTML('beforeend', dashboardItem)
    
}


const entryDescription = document.getElementById('entry')
const entryAmount = document.querySelector('.new-income-amount')


const newExpenseItem = document.querySelector('.new-expense-item')
const newExpenseAmount = document.querySelector('.new-expense-amount')



//function to edit or delete
function modifyListItem(event) {
    const modifyButton = event.target;
    
    if(modifyButton.id == 'delete') {
        itemList.splice(modifyButton.parentNode.id, 1)
    }
    else if(modifyButton.id == 'edit') {
        console.log(modifyButton.parentNode.type)

    }


}