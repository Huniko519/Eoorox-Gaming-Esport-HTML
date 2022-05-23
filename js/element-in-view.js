(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {

      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

})(jQuery);

$(window).on('scroll', function() {

  $(".testimonial-author .author-one, .testimonial-author .author-two, .testimonial-author .author-three,  .testimonial-author .author-four,  .testimonial-author .author-five, .testimonial-avatar .avatar-one, .testimonial-avatar .avatar-two, .testimonial-avatar .avatar-three, .testimonial-avatar .avatar-four, .testimonial-avatar .avatar-five, .testimonial-avatar .avatar-six").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("now-in-view");
    } else {
      el.removeClass("now-in-view");
    }
  });

});