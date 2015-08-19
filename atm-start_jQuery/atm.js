$(document).ready(function(){
  console.log('Ready!!!');

var balanceCurrentAccount = 0;






function changeBackgroundColor(){
  backColor = $('div#balance1.balance')[0];
  console.log(backColor);
  $(backColor).css({'background-color':'red'});
}

function getDepositAmount(){
  deposit1 = $('input#deposit1');
  console.log(deposit1);
  // On click getting info from input#amount1
  $(deposit1).on('click', function(e) {
    console.log('Hello deposit 1');
    amount1 = $('input#amount1');
    // getting the value itself
    value1 = amount1[0].value;
    console.log(value1);
    // add value to var balanceCurrentAccount
    balanceCurrentAccount += parseInt(value1);
    // showing inside current account screen balance
    idBalance = $('div#balance1')[0];
    idBalance = $(idBalance).html('$' + balanceCurrentAccount);
    console.log(balanceCurrentAccount);
    });
}
getDepositAmount();


function getWithdrawAmount(){
  withdraw1 = $('input#withdraw1');
  console.log(withdraw1);
  // On click getting info from input#withdraw1
  $(withdraw1).on('click', function(e) {
    console.log('Hello withdraw 1');
    amount1 = $('input#amount1');
    // getting the value itself
    value1 = amount1[0].value;
    console.log(value1);
    // sustracting value to var balanceCurrentAccount
    balanceCurrentAccount -= parseInt(value1);
    // showing inside current account screen balance
    idBalance = $('div#balance1')[0];
    idBalance = $(idBalance).html('$' + balanceCurrentAccount);
    console.log(balanceCurrentAccount);
    }); 
}
getWithdrawAmount();

function cleaningInputs(){
  
}













}) // Closing brackets and curly brackets from ready function in first line.