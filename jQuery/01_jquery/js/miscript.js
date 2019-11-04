"use strict"
$(document).ready(
	function(){
	
	//Ejercizio n. 1
	
	$("#eje01 button").click(function(){
		var bombilla=$("#eje01 img");
		//var boton=$("#eje01 button");
		
		var imgbombilla = bombilla.attr("src");
		
		if(imgbombilla=="img/bombilla_off.gif"){
			bombilla.attr("src","img/bombilla_on.gif");
			bombilla.attr("title","Bombilla encendida");
			//boton.text("OFF");
			$(this).text("OFF");
		}
		
		else{
			bombilla.attr("src","img/bombilla_off.gif");
			bombilla.attr("title","Bombilla apagada");
			//boton.text("ON");
			$(this).text("ON");
		}
		
	});
	
	
	//Ejercizio n. 2
	
	
	$("#btnocultar").click(
		function(){
		$("#eje02 .rectangulo").hide(1000);
	});
	
	$("#btnmostrar").click(
		function(){
		$("#eje02 .rectangulo").show(1000);
	});
	
	$("#btnocmo").click(
		function(){
		$("#eje02 .rectangulo").toggle(1000);
	});
	
	$("#btnaparecer").click(
		function(){
		$("#eje02 .rectangulo").fadeIn(1000);
	});
	
	$("#btndesaparecer").click(
		function(){
		$("#eje02 .rectangulo").fadeOut(1000);
	});
	
	$("#btnapadesap").click(
		function(){
		$("#eje02 .rectangulo").fadeToggle(1000);
	});
	
	$("#btncinquanta").click(
		function(){
		$("#eje02 .rectangulo").fadeTo(1000, 0.5);
	});
	
	$("#btndarriba").click(
		function(){
		$("#eje02 .rectangulo").slideDown(1000);
	});
	
	$("#btnharriba").click(
		function(){
		$("#eje02 .rectangulo").slideUp(1000);
	});
	
	$("#btnpledesple").click(
		function(){
		$("#eje02 .rectangulo").slideToggle(1000);
	});
	
	$("#btnanimpers").click(
		function(){
		$("#eje02 .rectangulo").animate({
			left: '300px',
			width: '100px'
			});
		
	});
	
	
	//Esercizio 3
	
	$("#eje03 button").eq(0).click(
		function(){
			$("#parientes div").eq(1).find("p").css("border", "2px solid red").parent().css("border", "2px solid green");
			/*var elemact=$("#parientes p").eq(1);
			elemact.css("border", "2px solid red");
			elemact.parent().css("border", "2px solid green");*/
	});
	
	$("#eje03 button").eq(1).click(
		function(){
			//$("#parientes div").eq(1).find("p").css("border", "2px solid red").parents("article").css("border", "2px solid green");
			var elemact=$("#parientes p").eq(1);
			elemact.css("border", "2px solid red");
			elemact.parents("article").css("border", "2px solid green");
	});
	
	
	$("#eje03 button").eq(2).click(
		function(){
			
			var elemact=$("#parientes p").eq(1);
			elemact.css("border", "2px solid red");
			elemact.parents("div").eq(1).find("p").eq(2).css("border", "2px solid green");
	});
	
	$("#eje03 button").eq(3).click(
		function(){

			var elemact=$("#parientes p").eq(1);
			elemact.css("border", "2px solid red");
			elemact.parents("div").eq(1).find("p").eq(0).css("border", "2px solid green");
	});
	
	$("#eje03 button").eq(4).click(
		function(){
			
			var elemact=$("#parientes i").eq(2);
			elemact.css("border", "2px solid red");
			elemact.parents().css("border", "2px solid green");
	});
	
	$("#eje03 button").eq(5).click(
		function(){
			
			var elemact=$("#parientes i").eq(2);
			elemact.css("border", "2px solid red");
			elemact.parents("article").siblings().css("border", "2px solid green");
	});
	
	$("#eje03 button").eq(6).click(
		function(){
			
			var elemact=$("#parientes i").eq(2);
			elemact.css("border", "2px solid red");
			elemact.siblings().css("border", "2px solid green");
	});
	
	$("#eje03 button").eq(7).click(
		function(){
			
			var elemact=$("#parientes article").eq(0);
			elemact.css("border", "2px solid red");
			elemact.children().css("border", "2px solid green");
	});
	
	$("#eje03 button").eq(8).click(
		function(){
			
			var elemact=$("#parientes article").eq(0);
			elemact.css("border", "2px solid red");
			elemact.next().children().css("border", "2px solid green");
	});
	
	$("#eje03 button").eq(9).click(
		function(){
			
			var elemact=$("#parientes article").eq(0);
			elemact.css("border", "2px solid red");
			//elemact.siblings().eq(1).css("border", "2px solid green");
			elemact.siblings().last().css("border", "2px solid green");
	});
}
);