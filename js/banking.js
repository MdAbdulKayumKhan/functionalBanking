
/* function getInputValue(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText  = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
     // clear input field 
     depositInput.value = '';
    return depositAmount;
   
} */


document.getElementById('deposit-button').addEventListener('click', function(){
    // event listener clicked and get input and parseFloat()
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText  = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // const depositAmount = getInputValue();
   
    // get current deposit-total 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    // change diposit value by innerText  
    depositTotal.innerText =  previousDepositTotal+ depositAmount;

    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;
    console.log(previousBalanceTotal);
    // clear input field 
    depositInput.value = '';
});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    // console.log(withdrawAmount);

    // update withdraw-total 
    const withdrawTotal = document.getElementById('withdraw-total');
    // innitial value of withdraw 
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText = withdrawAmount + previousWithdrawTotal;

    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
    // clear input 
    withdrawInput.value = '';

})