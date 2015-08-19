$(document).ready(function(){
  console.log('Ready!!!');

var balanceCurrentAccount = 0;
var messageToUser = 'Operation not allowed';


function showAlertMessage(){
  var alertDiv = $('div.clear');
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

function getDepositAmount(){
  backgroundColorDefault();
  deposit1 = $('input#deposit1');
  console.log(deposit1);
  // On click getting info from input#amount1
  $(deposit1).on('click', function(e) {
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
    // if no value, show alert
    if(!!value1 && NaN){
      console.log('show alert');
      showAlertMessage();
    }
    // sustracting value to var balanceCurrentAccount
    withdrawValue = parseInt(value1);
    balanceC = balanceCurrentAccount - withdrawValue;
    // if balanceC === 0, then background should be 'red'
    if(balanceC === 0){
      balanceCurrentAccount = balanceC;
      changeBackgroundColor();
    // if balance whould be less than '0' get into this
    }else if(balanceC < 0){
      console.log('show alert');
    // if balance is normal, over 0, and withdraw is less than balance
    // operations are normal, and background default
    }else{
      backgroundColorDefault();
      balanceCurrentAccount = balanceC;
    }
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