$(document).ready(function() {
  $('body').css('display', 'none');

  if (sessionStorage.animationDone) {
    $('.animation').addClass('end');
  }
  else {
    sessionStorage.setItem('animationDone', true);
  }

  $('body').fadeIn(330);

  $('a:not([target="_blank"])').click(function(event) {
    event.preventDefault();
    if ($(event.currentTarget)[0] == $('.project_next_link')[0] || $(event.currentTarget)[0] == $('.project_prev_link')[0] || $(event.currentTarget)[0] == $('.project_home_link')[0]) {
      $('.project_description').addClass('reverse');
      setTimeout(function() {
        $('body').fadeOut(330, function() {
          window.location = event.currentTarget.href;
        });
      }, 500);
    }
    else {
      $('body').fadeOut(330, function() {
        window.location = event.currentTarget.href;
      });
    }
  });

  if (!Modernizr.cssanimations) {
    if (!sessionStorage.animationDone) {
      $( ".home_header" ).delay( 1500 ).animate({
        left: '50%',
        top: '20%'
      }, 1000);

      $('.home_paragraph').delay(2500).animate({
        opacity: 1
      }, 500);

      autoHeight = $('.content_container').css('height', 'auto').height();

      if ($(window).width() > 767) {
        $('.content_container').css({
          bottom: -530
        });

        $('.content_container').delay(2500).animate({
          height: autoHeight,
          bottom: -480,
          opacity: 1
        }, 1000);
      }
      else {
        $('.content_container').css({
          bottom: -1130
        });

        $('.content_container').delay(2500).animate({
          height: autoHeight,
          bottom: -1080,
          opacity: 1
        }, 1000);
      }
    }
    else {
      $('.animation').addClass('end');
    }

    $('.project_description').delay(500).animate({
      right: 0
    }, 1000);
  }
});