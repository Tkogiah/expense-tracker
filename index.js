// FOREWARD AND CONTENT
function log(a) {
    console.log(a)
} 



//-------------------- FIRST - BUILD THE OBJECT ---------------------- 

//OBJECT AND ARRAY TO INDEX OBJECT(S)
function primaryobject(des, amnt, val, id) {
    return {
        'str' : des,
        'int' : Number(amnt),
        'value' : val,
        'id' : Number(id)
    }
}
const objArray = [];

//NODES AND NODE VALUES
const descriptionNode = document.getElementById('description')
const description = descriptionNode.value
const amountNode = document.getElementById('amount')
const amount = amountNode.value
const positiveNode = document.getElementById('income')
const positive = positiveNode.value
const negativeNode = document.getElementById('expense')
const negative = negativeNode.value

//INITIAL EVENT LISTENERS TO CREATE OBJECTS, PUSH TO ARRAY, ASSIGN ID, DISPLAY CONTENT
positiveNode.addEventListener('click', function() {
    if(!description || !amount) return;
    let incomeObject = primaryobject(description, amount, positive);    
    objArray.push(incomeObject)
    assignId(objArray)
    sumFunctions(objArray)
    mainDisplay(objArray)

})
negativeNode.addEventListener('click', function() {
    if(!description || !amount) return;
    let incomeObject = primaryobject(description, amount, negative);
    incomeObject.int = -Math.abs(amount)    
    objArray.push(incomeObject)
    assignId(objArray)
    sumFunctions(objArray)
    mainDisplay(objArray)

})

//ASSIGN ID TO ARRAY, SHOULD BE CALLED ON EVERY BUTTON
function assignId(array) {
    array.forEach((item, i) => {
        item.id = i;
      });
    
}




//-------------------- SECOND - BUILD FUNCTIONS TO DISPLAY OBJECT(S) CONTENT ---------------------- 
//OVERVIEW NODES
const balanceOverview = document.getElementById('overview-balance')
const incomeOverview = document.getElementById('overview-income')
const expenseOverview = document.getElementById('overview-expenses')
//TAB NODES
const allTab = document.getElementById('tabs-all')
const incomeTab = document.getElementById('tabs-income')
const expensesTab = document.getElementById('tabs-expenses')
//DISPLAY NODE
const display = document.getElementById('display')

//DISPLAY FUNCTION
function mainDisplay(obj) {

    
    
    let end = obj.length-1
    let dashboardItem = `
        <div class='dashboard'>
            <li class='${obj[end].value}' id='${obj[end].id}'>
                <div class='dashboard-item'>
                    ${obj[end].str} : $ ${obj[end].int}
                </div>
                <div class='dashboard-edit-delete'>
                    <input name='edit' id='edit' type='image' src='https://img.icons8.com/wired/50/000000/edit.png'>    
                    <input name='delete' id='delete' type='image' src='https://img.icons8.com/external-wanicon-lineal-wanicon/64/000000/external-delete-user-interface-wanicon-lineal-wanicon.png'>
                </div>
            </li>
        </div>    
    `
    display.insertAdjacentHTML('afterbegin', dashboardItem)


}

//expenseOverview incomeOverview balanceOverview
function sumFunctions(obj) {
    let total = 0;
    let pos = 0;
    let neg = 0;
    if(obj.length < 2) return
        
    for(let i = 0; i < obj.length; i++) {
        if(obj[i]['int'] < 0) {
            neg = neg + obj[i]['int']
        }
        else if(obj[i]['int'] > 0) {
            pos = pos + obj[i]['int']
        }
        total = total + obj[i]['int']
    }

    balanceOverview.innerHTML = `$ ${total}`
    incomeOverview.innerHTML = `$ ${pos}`
    expenseOverview.innerHTML = `$ ${neg}`

}

function toggleTab()


// - write function to delete said object from an array

// - write function to edit said object from an array

// - write function to pull object data and sum it

