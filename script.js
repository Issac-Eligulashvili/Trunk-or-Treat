$(document).ready(function () {
     $('.custom-nav').hide();
     $('#subtext').hide();
     $('#burgerMenu').on('click', () => {
          $('.custom-nav').slideDown()
     })

     $('#closeBtn').on('click', () => {
          $('.custom-nav').slideUp(); //close the navbar!
     })

     $('.moreInfoBtn').on('click', () => {
          $('#subtext').toggle(50);
     })
});