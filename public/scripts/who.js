$('.person').click(function(e) {
  $('body').append('<div class="curtain"><div class="modal"><div class="close">&#x2715;</div><img src="'+$(e.currentTarget).attr('image')+'">'+$(e.currentTarget).attr('bio')+'</div></div>');
});

$('body').on('click', '.curtain, .close', function(e) {
  $('.curtain').remove();
});

$('body').on('click', '.modal', function(e) {
  //let people click on the modal without causing problems for them.
  e.stopPropagation();
  return false; 
});
