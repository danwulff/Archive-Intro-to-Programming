function alphabetical(a, b) {
  var A = a.toLowerCase();
  var B = b.toLowerCase();
  if (A < B) {
   return -1;
  } else if (A > B){
  return  1;
  } else {
  return 0;
  }
}

jQuery(document).ready(function() {

  var groceryList = [];
  var sortedGroceryList = [];

  $("#listInput form").submit(function(event) {
    event.preventDefault();
    if ($("#input").val()) {
      //add item to list
      groceryList.push($("#input").val());
      //sort list alphabetically
      groceryList.sort(alphabetical);
      //clear input form
      $("#input").val("");
    }
  });

  $("#displayList").click(function(event) {
    //hide input field
    $("#listInput").hide();

    //create new list, and change to upper case
    sortedGroceryList = [];
    sortedGroceryList = groceryList.map(function(item) {
      return item.toUpperCase();
    });

    //create list item (html) for each item in list
    sortedGroceryList.forEach(function(item) {
      $("#list").append("<li>" + item + "</li>");
    });
  });
});
