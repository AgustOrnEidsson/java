var imag={"img/p1.jpg":"Animators,Illustrators","img/p2.jpg":"Photographers,Filmmakers","img/p3.jpg":"Photographers,Filmmakers","img/p4.jpg":"Designers","img/p5.jpg":"Photographers,Filmmakers","img/p6.jpg":"Designers,Illustrators","img/p7.jpg":"Photographers","img/p8.jpg":"Designers","img/p9.jpg":"Animators,Illustrators"};

function uppl(listi){
  for (x in listi) {
    var value=listi[x]
    document.getElementById("gallery").innerHTML +='<img src='+x+' data-tags='+value+' />';
  }
};
uppl(imag)

(function() {                                     // Lives in an IIFE
  var $imgs = $('#gallery img');                  // Store all images
  var $buttons = $('#buttons');                   // Store buttons element
  var tagged = {};                                // Create tagged object


  $imgs.each(function() {                         // Loop through images and
    var img = this;                               // Store img in variable
    var tags = $(this).data('tags');              // Get this element's tags

    if (tags) {                                   // If the element had tags
      tags.split(',').forEach(function(tagName) { // Split at comma and
        if (tagged[tagName] == null) {            // If object doesn't have tag
          tagged[tagName] = [];                   // Add empty array to object
        }
        tagged[tagName].push(img);                // Add the image to the array
      });
    }
  });

  $('<button/>', {                                 // Create empty button
    text: 'Show All',                              // Add text 'show all'
    class: 'active',                               // Make it active
    click: function() {                            // Add onclick handler to
      $(this)                                      // Get the clicked on button
        .addClass('active')                        // Add the class of active
        .siblings()                                // Get its siblings
        .removeClass('active');                    // Remove active from siblings
      $imgs.show();                                // Show all images
    }
  }).appendTo($buttons);                           // Add to buttons

  $.each(tagged, function(tagName) {               // For each tag name
    $('<button/>', {                               // Create empty button
      text: tagName + ' (' + tagged[tagName].length + ')', // Add tag name
      click: function() {                          // Add click handler
        $(this)                                    // The button clicked on
          .addClass('active')                      // Make clicked item active
          .siblings()                              // Get its siblings
          .removeClass('active');                  // Remove active from siblings
        $imgs                                      // With all of the images
          .hide()                                  // Hide them
          .filter(tagged[tagName])                 // Find ones with this tag
          .show();                                 // Show just those images
      }
    }).appendTo($buttons);                         // Add to the buttons
  });

}());