(function ($) {
  'use strict';
  $(document).ready(function () {
    var org_bg_top = $('.__org_bg_top'),
      org_bg_bottom = $('.__org_bg_bottom'),
      backgroundPosition = function () {
        /**
         * Positionner le fond en haut
         */
        org_bg_top.each(function (index, el) {
          var elementHeight = $(el).height();
          $(el).css({
            top: -elementHeight + "px",
            "margin-bottom": -elementHeight + "px"
          });
        });
        /**
         * Positionner le fond en bas
         */
        org_bg_bottom.each(function (index, el) {
          var elementHeight = $(el).height();
          $(el).css({
            top: elementHeight + "px",
            "margin-top": -elementHeight + "px"
          });
        });
      },

      /**
       * Constructeur
       * @private
       */
      __init__ = function () {
        backgroundPosition();
      };

    __init__();
    $(window).resize(function () {
      backgroundPosition();
    });
  });
})(jQuery);