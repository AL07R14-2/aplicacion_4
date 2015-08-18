// JavaScript Document
$(document).ready(function(e) {
// document.addEventListener("deviceready",function(){
$('#btn_sonido').click(function(){
if ( $('#btn_sonido').hasClass ('ui-icon-audio'))
{  
 //apagar audio
 $('#btn_sonido').removeClass('ui-icon-audio');
 $('#btn_sonido').addClass ('ui-icon-bars');
 alert ('se apago el sonido');
}
else 
{  
 $('#btn_sonido').removeClass('ui-icon-bars');
 $('#btn_sonido').addClass ('ui-icon-audio');
 alert ('se prendio el sonido');
}
});//click a btn_sonido 
// }); 
});

