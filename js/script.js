$(document).ready(function() {
 $("#boton").click(function() {
     alert("Hola Mundo con jQuery!");
   });

  $("#logo").mouseover(function() {
     $(this).animate({height:'150px'});
  });

  $("#logo").mouseout(function() {
     $(this).animate({height:'50px'});
  });

  $("#ocultar").click(function() {
    $("#msgid1").hide("slow")
  });

  $("#mostrar").click(function() {
    $("#msgid1").show("slow")
  });

  $("#ocultar1").click(function(e){
    $("#logo1").fadeOut(2000);
  });

  $("#mostrar1").click(function(e){
    $("#logo1").fadeIn(2000);
  });
});
