function watchSeattleClick() {
    $('.seattle').on('click', function() {
        $('.seattleButton').removeClass('seattleHidden').hide().fadeIn(1000);
        $('.tacomaButton').addClass('tacomaHidden');
    });
};

function watchTacomaClick() {
    $('.tacoma').on('click', function() {
        $('.tacomaButton').removeClass('tacomaHidden').hide().fadeIn(1000);
        $('.seattleButton').addClass('seattleHidden');
    });
};

function seattleButton() {
    $('.seattle').on('click', '.seattleButton', function(event) {
        console.log('working');
    });
}
  
  function fireItUp() {
    watchSeattleClick();
    watchTacomaClick();
    //seattleHover();
    //tacomaHover();
    //mouseOff();
  };
  
  $(fireItUp);

/*function seattleHover() {
    $('.seattle, .test').hover(function (event) {
      $('.flex-tacoma').addClass('rotate').hide().fadeIn(500);
      $('.flex-seattle').removeClass('rotate');
    });
  };

    /*function tacomaHover() {
    $('.tacoma').hover(function (event) {
      $('.flex-seattle').addClass('rotate').hide().fadeIn(500);
      $('.flex-tacoma').removeClass('rotate');
      $('.test').removeClass('testing')
      $('.test').slideToggle();
    });
  };
  
  function mouseOff() {
    $('body').mouseout(function (event) {
      $('div').removeClass('rotate');
    });
  };*/