 $('.modal-content').fadeOut();

    setTimeout(function() {
      $('.cbm').animate({
        bottom: '80px'
      }, 200);
      $('.mbu').animate({
        top: '80px'
      }, 200);
      $('.cbm').animate({
        bottom: '20px'
      }, 880);
      $('.mbu').animate({
        top: '20px'
      }, 880);
    }, 1000);

    setTimeout(function() {
      $(".texts").removeClass("hidden");
    }, 1000);

    setTimeout(function() {
      $('.bgc').css('background-color', 'rgba(255, 255, 255, ' + 0 + ')');
    }, 2000);

    $("li").click(function() {
      $(".bg").toggleClass("bgb");
      setTimeout(function() {
        $('.center').css('opacity', '0');
      }, 1000);
      setTimeout(function() {
        $('.center').css('display', 'none');
      }, 2000);
      setTimeout(function() {
        $('.modal').css('display', 'block');
        $('.modal-content').css('opacity', '1');
      }, 2100);
      setTimeout(function() {
        $('.modal').css('display', 'block');
        $('.modal-content').fadeIn(1000);
      }, 2100);
    });

    $("span").click(function() {
      $(".bg").toggleClass("bgb");
      setTimeout(function() {
        $('.modal').css('display', 'block');
        $('.modal-content').fadeOut(1500);
      }, 100);
      setTimeout(function() {
        $('.center').css('display', 'block');
      }, 1800);
      setTimeout(function() {
        $('.center').css('opacity', '1');
      }, 1900);
    });