//Smooth Scroll all browser support
$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        let hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });

$(document).ready(function(){
    $(window).scroll(function(){
      if ($(this).scrollTop() > 200) {
        $('nav').css('filter', 'opacity(100%)');
        $('nav').fadeIn(500);
      } else {
        $('nav').fadeOut(500);
        $('nav').css('filter', 'opacity(0%)');
      }
    });
});