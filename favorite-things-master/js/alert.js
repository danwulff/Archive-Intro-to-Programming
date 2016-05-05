jQuery(document).ready(function() {

  var tags = ["h1", "p", "h3"]
  var tagsName = ["header", "paragraph", "small header"]

  tags.forEach(function(tag) {
    jQuery(tag).click(function() {
      alert("This is a " + tagsName[tags.indexOf(tag)]);
    });
  });

  // works but doesn't have nice name
  // tags.forEach(function(tag) {
  //   jQuery(tag).click(function() {
  //     alert("This is a " + tag);
  //   });
  // });

});
