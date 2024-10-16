$(document).ready(function () {
     $('.custom-nav').hide();
     $('.subtext').hide();
     $('.showcaseDescription').hide();

     $('#burgerMenu').on('click', () => {
          $('.custom-nav').slideDown()
          $('body').addClass('overflow-hidden');
     })

     $('#closeBtn, .navLink').on('click', () => {
          $('.custom-nav').slideUp(); //close the navbar!
          $('body').removeClass('overflow-hidden');
     })

     $('.moreInfoBtn').on('click', (event) => {
          $(event.target).prev().toggle(50);
     })

     $('.showcaseImage').on('mouseenter', (event) => {
          $(event.target).next().fadeIn();
     }).on('mouseleave', (event) => {
          $(event.target).next().fadeOut();
     });
});