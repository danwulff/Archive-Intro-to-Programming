$(document).ready(function() {

  $("#Javascript-btn").click(function() {
    $(".defList").addClass("hidden");
    $("#Javascript-def").removeClass("hidden");
  });

  $("#Operators-btn").click(function() {
    $(".defList").addClass("hidden");
    $("#Operators-def").toggleClass("hidden");
  });

  $("#Variables-btn").click(function() {
    $(".defList").addClass("hidden");
    $("#Variables-def").toggleClass("hidden");
  });

  $("#Variable_naming-btn").click(function() {
    $(".defList").addClass("hidden");
    $("#Variable_naming-def").toggleClass("hidden");
  });

  $("#Functions-btn").click(function() {
    $(".defList").addClass("hidden");
    $("#Functions-def").toggleClass("hidden");
  });

  $("#Methods-btn").click(function() {
    $(".defList").addClass("hidden");
    $("#Methods-def").toggleClass("hidden");
  });

  $("#Arguments-btn").click(function() {
    $(".defList").addClass("hidden");
    $("#Arguments-def").toggleClass("hidden");
  });

  $("#Parameters-btn").click(function() {
    $(".defList").addClass("hidden");
    $("#Parameters-def").toggleClass("hidden");
  });

  $("#Return-btn").click(function() {
    $(".defList").addClass("hidden");
    $("#Return-def").toggleClass("hidden");
  });

  $("#Chaining_Methods-btn").click(function() {
    $(".defList").addClass("hidden");
    $("#Chaining_Methods-def").toggleClass("hidden");
  });

  $("#Strings-btn").click(function() {
    $(".defList").addClass("hidden");
    $("#Strings-def").toggleClass("hidden");
  });

  $("#Booleans-btn").click(function() {
    $(".defList").addClass("hidden");
    $("#Booleans-def").toggleClass("hidden");
  });

  $("#Undefined-btn").click(function() {
    $(".defList").addClass("hidden");
    $("#Undefined-def").toggleClass("hidden");
  });

  $("#NaN-btn").click(function() {
    $(".defList").addClass("hidden");
    $("#NaN-def").toggleClass("hidden");
  });

  $("#Escape-btn").click(function() {
    $(".defList").addClass("hidden");
    $("#Escape-def").toggleClass("hidden");
  });

  $("#Alert-btn").click(function() {
    $(".defList").addClass("hidden");
    $("#Alert-def").toggleClass("hidden");
  });

  $("#Comments-btn").click(function() {
    $(".defList").addClass("hidden");
    $("#Comments-def").toggleClass("hidden");
  });

  $("#jQuery-btn").click(function() {
    $(".defList").addClass("hidden");
    $("#jQuery-def").toggleClass("hidden");
  });

  $("#Attributes-btn").click(function() {
    $(".defList").addClass("hidden");
    $("#Attributes-def").toggleClass("hidden");
  });

  $("#Finish").click(function() {
    $(".defList").addClass("hidden");
    $("#endMessage").toggleClass("hidden");
  });

  var rep = true;


  $("#congrats").click(function() {
    if (rep === true)
    {
      $("#endMessage").append('<h2>You finished your flashcards!</h2>');
      $("#congrats").children("h2").last().addClass("vivid")
      $("#endMessage").append('<h2>You finished your flashcards!</h2>');
      $("#congrats").children("h2").last().addClass("vivid2")
      $("#endMessage").append('<h2>You finished your flashcards!</h2>');
      $("#congrats").children("h2").last().addClass("vivid3")
      rep = false;
    }

  });


});
