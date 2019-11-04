"use strict"

$(document).ready(
	function(){

	$("#filtra button").click(function(){
		var miboton=$(this).attr("name");
		
		//mostrare prima tutti gli articoli
		$("#galeria article").css("display", "inline-block");
		
		// se clicchiamo sui bottono differenti a todos ...
		if (miboton != "todos"){
		
		//andare agli articoli e dire di ocultare tutti quelli che NON hanno la classe come il bottone
		$("#galeria article").not("."+miboton).hide();
		}
	});
		
	$("#visualiza button").click(function(){
		var miboton=$(this).attr("name");
		
		// prima riumuovo le tre classi e poi pongo solo quella del bottone
		$("#galeria article").removeClass("grid lista columna");
		$("#galeria article").addClass(miboton);

		
	});
	});
