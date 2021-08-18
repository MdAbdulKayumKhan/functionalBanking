
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText  = inputField.value;
    const amountValue = parseFloat(inputAmountText);
     // clear input field 
     inputField.value = '';
    return amountValue;
   
}

function updateTotalField(totalFieldId, amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText); 
    totalElement.innerText =  previousTotal+ amount;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
   /*  const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); */
    const previousBalanceTotal = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + amount;
    } else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
    
}



document.getElementById('deposit-button').addEventListener('click', function(){
    // event listener clicked and get input and parseFloat()
    /* const depositInput = document.getElementById('deposit-input');
    const depositAmountText  = depositInput.value;
    const depositAmount = parseFloat(depositAmountText); */
   
   
    // get current deposit-total 
    /* const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText); 
    depositTotal.innerText =  previousDepositTotal+ depositAmount; */
   

    // update balance 
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount; */
    // console.log(previousBalanceTotal);

    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0 ){
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
    

});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
   /*  const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText); */
    
    // console.log(withdrawAmount);

    // update withdraw-total 
    /* const withdrawTotal = document.getElementById('withdraw-total');
    // innitial value of withdraw 
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText = withdrawAmount + previousWithdrawTotal; */
  

    // update balance 
    /*
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    } 
    if(withdrawAmount > currentBalance){
        const msgText = document.getElementById('error-msg');
        msgText.innerText = 'you don\'t have enough money';
        console.log (' ');
    }
    
    

});