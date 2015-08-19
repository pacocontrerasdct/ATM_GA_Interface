$(document).ready(function(){
  console.log('Ready!!!');







function changeBackgroundColor(){
  backColor = $('div#balance1.balance')[0];
  console.log(backColor);
  $(backColor).css({'background-color':'red'});
}

function getDepositAmount(){
 deposit1 = $('input#deposit1');
 console.log(deposit1);
   $(deposit1).on('click', function(e) {
    console.log('Hello deposit 1');
    amount1 = $('input#amount1');
    value1 = amount1[0].value;
    console.log(value1);
    
    idBalance = $('div#balance1')[0];
    idBalance = $(idBalance).html('$' + value1);
    

    //balance1 = $('input#balance1');
    //balance = balance1[0].outerText;
    console.log(idBalance);
    });
}
getDepositAmount();


function getWithdrawAmount(){
  
}














}) // Closing brackets and curly brackets from ready function in first line.