(function ($) {
  'use strict';
  $(document).ready(function () {
    var bgTop = $('.__org_bg_top');
    var bgBottom = $('.__org_bg_bottom');
    var backgroundPosition = function () {
      /**
       * Positionner le fond en haut
       */
      bgTop.each(function (index, el) {
        var elementHeight = $(el).height();
        $(el).css({
          top: -elementHeight + "px",
          "margin-bottom": -elementHeight + "px"
        });
      });
      /**
       * Positionner le fond en bas
       */
      bgBottom.each(function (index, el) {
        var elementHeight = $(el).height();
        $(el).css({
          top: elementHeight + "px",
          "margin-top": -elementHeight + "px"
        });
      });
    };
    /**
     * Constructeur
     * @private
     */
    var __init__ = function () {
      backgroundPosition();
    };

    __init__();
    $(window).resize(function () {
      backgroundPosition();
    });
  });
})(jQuery);