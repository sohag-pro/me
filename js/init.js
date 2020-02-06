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
var intro = 1;
var projects = 1;
var employment = 1;
var skill = 1;
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

  
  // if(document.documentElement.scrollTop > 100 && intro === 1){
  //   intro++;
  //   animateCSS('#intro', 'fadeInLeft');
  // }
  // if(document.documentElement.scrollTop > 500 && projects === 1){
  //   projects++;
  //   animateCSS('#projects', 'fadeInRight');
  // }
  // if(document.documentElement.scrollTop > 800 && employment === 1){
  //   employment++;
  //   animateCSS('#employment', 'fadeInLeft');
  // }
  // if(document.documentElement.scrollTop > 1200 && skill === 1){
  //   skill++;
  //   animateCSS('#skill', 'fadeInRight');
  // }
  // console.log(document.documentElement.scrollTop);
}

function animateCSS(element, animationName, callback) {
  const node = document.querySelector(element)
  $(element).show();
  node.classList.add('animated', animationName)

  function handleAnimationEnd() {
      node.classList.remove('animated', animationName)
      node.removeEventListener('animationend', handleAnimationEnd)

      if (typeof callback === 'function') callback()
  }

  node.addEventListener('animationend', handleAnimationEnd)
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.ml10',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
