$(document).ready(function(){
  console.log('Ready!!!');

var balanceCurrentAccount1 = 0;
var balanceCurrentAccount2 = 0;
var messageToUser1 = 'Operation not allowed';
var messageToUser2 = 'No enough funds to withdraw from your accounts';

function eventsSetup(){
  // EVENT FOR DEPOSIT AMOUNT - CURRENT
  backgroundColorDefault();
  deposit1 = $('input#deposit1');
  console.log(deposit1);
  // On click getting info from input#amount1
  $(deposit1).on('click', getDepositAmount1);

  // EVENT FOR WITHDRAW AMOUNT - CURRENT
  withdraw1 = $('input#withdraw1');
  console.log(withdraw1);
  // On click getting info from input#withdraw1
  $(withdraw1).on('click', getWithdrawAmount1);

    // EVENT FOR DEPOSIT AMOUNT - SAVING
  backgroundColorDefault();
  deposit2 = $('input#deposit2');
  console.log(deposit2);
  // On click getting info from input#amount1
  $(deposit2).on('click', getDepositAmount2);

  // EVENT FOR WITHDRAW AMOUNT - SAVING
  withdraw2 = $('input#withdraw2');
  console.log(withdraw2);
  // On click getting info from input#withdraw1
  $(withdraw2).on('click', getWithdrawAmount2);
}
eventsSetup();

function showAlertMessage(){
  var alertDiv = $('div.clear');
  if(balanceCurrentAccount1 === 0 && balanceCurrentAccount2 === 0){  
    messageToUser = messageToUser2;
  }else{
    messageToUser = messageToUser1;
  }
  alertDiv = $(alertDiv).html(messageToUser)
  console.log(alertDiv);
  return alertDiv;
}

function changeBackgroundColor(){
  backColor = $('div#balance1.balance')[0];
  console.log(backColor);
  $(backColor).css({'background-color':'red'});
}

function backgroundColorDefault(){
  backColor = $('div#balance1.balance')[0];
  console.log(backColor);
  $(backColor).css({'background-color':'#E3E3E3'});
}

function getFundsFromSavings(){
  //getDepositAmount2();
}

function getDepositAmount1(){
  console.log('Hello deposit 1');
    amount1 = $('input#amount1');
    // getting the value itself
    value1 = amount1[0].value;
    console.log(value1);
    // if no value, show alert
    if(!!value1 && NaN){
      console.log('show alert');
      showAlertMessage();
    }
    // add value to var balanceCurrentAccount
    balanceCurrentAccount1 += parseInt(value1);
    // showing inside current account screen balance
    idBalance = $('div#balance1')[0];
    idBalance = $(idBalance).html('$' + balanceCurrentAccount1);
    console.log(balanceCurrentAccount1);
    cleaningInputs();
}

function getWithdrawAmount1(){
    console.log('Hello withdraw 1');
    amount1 = $('input#amount1');
    // getting the value itself
    value1 = amount1[0].value;
    console.log(value1);
    // if no value, show alert
    if(!!value1 && NaN){
      console.log('show alert 1');
      showAlertMessage();
    }
    // sustracting value to var balanceCurrentAccount
    withdrawValue = parseInt(value1);
    balanceC = balanceCurrentAccount1 - withdrawValue;
    // if balanceC === 0, then background should be 'red'
    if(balanceC === 0){
      balanceCurrentAccount1 = balanceC;
      changeBackgroundColor();
      getFundsFromSavings();
    // if balance whould be less than '0' get into this
    }else if(balanceC < 0){
      console.log('show alert 2');
      getFundsFromSavings();
    // if balance is normal, over 0, and withdraw is less than balance
    // operations are normal, and background default
    }else{
      backgroundColorDefault();
      balanceCurrentAccount1 = balanceC;
    }
    // showing inside current account screen balance
    idBalance = $('div#balance1')[0];
    idBalance = $(idBalance).html('$' + balanceCurrentAccount1);
    console.log(balanceCurrentAccount1);
    cleaningInputs();  
}

function getDepositAmount2(){
  console.log('Hello deposit 2');
    amount2 = $('input#amount2');
    // getting the value itself
    value2 = amount2[0].value;
    console.log(value2);
    // if no value, show alert
    if(!!value2 && NaN){
      console.log('show alert');
      showAlertMessage();
    }
    // add value to var balanceCurrentAccount
    balanceCurrentAccount2 += parseInt(value2);
    // showing inside current account screen balance
    idBalance = $('div#balance2')[0];
    idBalance = $(idBalance).html('$' + balanceCurrentAccount2);
    console.log(balanceCurrentAccount2);
    cleaningInputs();
}

function getWithdrawAmount2(){
    console.log('Hello withdraw 2');
    amount2 = $('input#amount2');
    // getting the value itself
    value2 = amount2[0].value;
    console.log(value2);
    // if no value, show alert
    if(!!value2 && NaN){
      console.log('show alert');
      showAlertMessage();
    }
    // sustracting value to var balanceCurrentAccount
    withdrawValue = parseInt(value2);
    balanceC = balanceCurrentAccount2 - withdrawValue;
    // if balanceC === 0, then background should be 'red'
    if(balanceC === 0){
      balanceCurrentAccount2 = balanceC;
      changeBackgroundColor();
    // if balance whould be less than '0' get into this
    }else if(balanceC < 0){
      console.log('show alert');
      showAlertMessage();
    // if balance is normal, over 0, and withdraw is less than balance
    // operations are normal, and background default
    }else{
      backgroundColorDefault();
      balanceCurrentAccount2 = balanceC;
    }
    // showing inside current account screen balance
    idBalance = $('div#balance2')[0];
    idBalance = $(idBalance).html('$' + balanceCurrentAccount2);
    console.log(balanceCurrentAccount2);
    cleaningInputs();
}

function cleaningInputs(){
  amount1 = $('input#amount1');
  value1 = amount1[0].value;
  //value1 = '';

  amount2 = $('input#amount2');
  value2 = amount2[0].value;
  //value2 = '';

  console.log('amount 1: ' + value1 + ' amount 2: ' + value1);
}














}) // Closing brackets and curly brackets from ready function in first line.