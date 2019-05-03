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
    $('body').on('click', '.seattleButton', function(event) {
        $('.flex-container').html(`
        <h1>SEATTLE</h1>
        <h2>color display will indicate tide strength (red, yellow, green)</h2>
        <h3>display time to dive</h3>
        `);
        $('.flex-container').removeClass('flex-container');
        
    });
}

function tacomaButton() {
  $('body').on('click', '.tacomaButton', function(event) {
    $('.flex-container').html(`
      <h1>TACOMA</h1>
      <h2>color display will indicate tide strength (red, yellow, green)</h2>
      <h3>display time to dive</h3>
      `);
    $('.flex-container').removeClass('flex-container');
  });
}
  
  function fireItUp() {
    watchSeattleClick();
    watchTacomaClick();
    seattleButton();
    tacomaButton();
  };
  
  $(fireItUp);
