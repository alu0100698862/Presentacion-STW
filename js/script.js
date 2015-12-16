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

  $("#down01").click(function(event) {
			$("#logo4").slideDown();
		});

	$("#down02").click(function(event) {
		$("#logo4").slideDown(4000);
	});

  $("#up01").click(function(event) {
		$("#logo4").slideUp();
	});

  $("#up02").click(function(event) {
		$("#logo4").slideUp(4000);
	});

  $("#toggle01").click(function(event) {
		$("#logo5").slideToggle();
	});

	$("#toggle02").click(function(event) {
		$("#logo5").slideToggle(4000);
	});
});
