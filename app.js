$(document).ready(function(){
  var screen = "";
  var reset = false;
  var colors = ["#e68a00", "#990000", "#e6e600", "#008000", "#0000b3", "#800080", "#0d0d0d", "#663300", "#ff6666"];
  var last = 1;
  
  function updateScreen(){
    var symbol = $(this).children().html();
    if ($(this).hasClass("num")){
      if (!reset){
        screen += symbol;
      }
      else{
        screen = " ";
        $('#screen').html(screen);
        reset = false;
        screen += symbol;
      }
    }
    else if ($(this).hasClass("op")){
      screen += symbol;
    }
    else if ($(this).hasClass("eq")){
      screen = eval(screen);
      reset = true;
    }
    else if ($(this).hasClass("ac")){
      screen = " ";
    }
    else if ($(this).hasClass("ce")){
      screen = screen.slice(0, screen.length - 1);
    }
    
    $('#screen').html(screen);
  }
  function updateButtons(){
    var rand = Math.floor(Math.random() * 8);
    while (rand === last){
      rand = Math.floor(Math.random() * 8);
    }
    last = rand;
    $(this).animate({backgroundColor: colors[rand]}, "fast");
  }
  
  $('.col-lg-2').click(updateScreen);
  $('.col-lg-2').click(updateButtons);
});
