$(document).ready(function() {

  $("li#buttonColor").click(function() {
    $("li#buttonColor").toggleClass("active");
    $("body").toggleClass("invertColor");
    $("body").toggleClass("background");
  });

  $("li#button1").click(function() {
    $("li#button1").addClass("active");
    $("li#button2").removeClass("active");
    $("li#button3").removeClass("active");
    $("div#1").removeClass("hidden");
    $("div#2").addClass("hidden");
    $("div#3").addClass("hidden");
    // $("div#1").show();
    // $("div#2").hide();
    // $("div#3").hide();

  });

  $("li#button2").click(function() {
    $("li#button2").addClass("active");
    $("li#button1").removeClass("active");
    $("li#button3").removeClass("active");
    $("div#2").removeClass("hidden");
    $("div#1").addClass("hidden");
    $("div#3").addClass("hidden");
    // $("div#2").show();
    // $("div#1").hide();
    // $("div#3").hide();

  });

  $("li#button3").click(function() {
    $("li#button3").addClass("active");
    $("li#button1").removeClass("active");
    $("li#button2").removeClass("active");
    $("div#3").removeClass("hidden");
    $("div#1").addClass("hidden");
    $("div#2").addClass("hidden");
    // $("div#3").show();
    // $("div#1").hide();
    // $("div#2").hide();
  });

});
