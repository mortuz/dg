'use strict';
(function($){
  var W = $(window);
  
  adjustVideoWidthandHeigt();

  
  
  $(window).on('resize', function() {
    adjustVideoWidthandHeigt();
  });

  function adjustVideoWidthandHeigt() {

    if( W.width() > W.height() ) {
      $('video').height(W.width());
      $('video').width('auto');
    } else {
      $('video').height(W.height());
      $('video').width('auto');
    }

  }
})(jQuery)