// business logic
var BankAccount = function(name, initDeposit) {
  this.name = name;
  this.balance = initDeposit;
}

BankAccount.prototype.deposit = function(depositAmount) {
  this.balance += depositAmount;
}

BankAccount.prototype.withdraw = function(withdrawAmount) {
  this.balance -= withdrawAmount;
}

// user interface logic
$(document).ready(function() {
  var printBalance = function() {
    $("#balance").text(customerAccount.balance);
  }

  var customerAccount = undefined;

  $("#sign-up").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var initDeposit = parseInt($("#initDeposit").val());
    customerAccount = new BankAccount(name, initDeposit);

    printBalance();

    $("#name").val("");
    $("#initDeposit").val("");
  });

  $("#transaction").submit(function(event) {
    event.preventDefault();
    var depositAmount = parseInt($("#deposit").val());
    customerAccount.deposit(depositAmount);
    var withdrawAmount = parseInt($("#withdraw").val());
    customerAccount.withdraw(withdrawAmount);

    printBalance();

    $("#deposit").val("");
    $("#withdraw").val("");
  });


});
