(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.collapsible').collapsible();

  }); // end of document ready
})(jQuery); // end of jQuery name space


var elem = document.querySelector('.tabs');
var instance = M.Tabs.init(elem, {});
var elem = document.querySelector('#tab2');
var instance = M.Tabs.init(elem, {});


//Get the button
var mybutton = document.getElementById("back");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}