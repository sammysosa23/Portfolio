"use strict";

// $(window).scroll(() => {
//   if (scrollY > 50) {
//     $('#navBar').addClass('blue darken-4');
//   }
//   else {
//     $('#navBar').removeClass('blue darken-4');
//   }
// });

$('.parallax').parallax();

$(document).ready(function () {
  $('.button-collapse').sideNav({
    menuWidth: 300,
    edge: 'left',
    closeOnClick: false,
    draggable: true,
    onOpen: function () { console.log('Menu Open') },
    onClose: function () { console.log('Menu Close') }
  });

  // Init Modal
  $('.modal').modal();
})

