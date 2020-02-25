$(function(){
$('#login-show').click(function(){
  $('#login-modal').fadeIn();

});

$('.signup-show').click(function(){
  $('#signup-modal').fadeIn();
});

$('.close-modal').click(function(){
  $('#login-modal').fadeOut();
  $('#signup-modal').fadeOut();

});

$('.item-hover').hover(
  function(){
$(this).find('.txt-contents').addClass('txt-active');
  },
  function(){
    $(this).find('.txt-contents').removeClass('txt-active');

  }

);

});
