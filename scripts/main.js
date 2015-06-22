import router from 'router';

(function(){
  'use strict';

  $(document).ready(function(){
    Backbone.history.start();

    $(document).on('click', '.main-menu-categories-type', function() {
    	$(this).siblings('.main-menu-categories-items').slideToggle();
    	$(this).children('.fa-chevron-down').toggle();
    	$(this).children('.fa-chevron-up').toggle();
    });

    $('.contact').on('click', function(e) {
    	$('.modal-contact-form').show();
    	$('.blanket-div').show();
    });

    $('.fa-times').on('click', function() {
      $('.order-complete').hide();
    })

    $('.fa-close').on('click', function() {
      $('.user-added').hide();
    })

  });

})();
