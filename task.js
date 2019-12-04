let barraD = 0, barraP = 0, barraR = 0, barraC = 0, barra = 0, aux = 0;

$("#New").on('click', function(){
	$('#Nova').toggle();
	$("#Title").val("");
	$("#Description").val("");
	barra++;
	calcularBARRA();

});
$("#exit").on('click', function(){
	$('#Nova').toggle();
	barra--;
	calcularBARRA();

})
$("#Sub").on('click', function(){
	
	$('#Nova').toggle();
	new_div();
})

$(document).on("click", "#ConteudoTD .tarefa" ,function(){
 
		barraP++;
		barraD--;
		console.log(barraD);
		calcularBARRA();
		$(this).remove();
		$("#ConteudoIP").append($(this));
})

$(document).on("click", "#ConteudoIP .tarefa" ,function(){
		barraP--;
		barraR++;
		calcularBARRA();
		$(this).remove();
		$("#ConteudoRV").append($(this));
})

$(document).on("click", "#ConteudoRV .tarefa" ,function(){
		barraR--;
		barraC++;
		calcularBARRA();
		$(this).remove();
		$("#ConteudoCP").append($(this));
})

function new_div(){
$(document).ready(function(){
	calcularBARRA();
	var titleValues = $("#Title").val();
	var descriValues = $("#Description").val();

	var descric={
		id: "descrc",
		classe: "descrc",
	};
	var tituloc ={
		
		id:"titulo1",
	};
	var $descricao = $("<div>", descric);
	$descricao.html(descriValues)
	var $titulo = $("<div>", tituloc);
	$titulo.html(titleValues);
	$titulo.append($descricao);
	$titulo.attr("id", titleValues);
	$titulo.attr("class", "tarefa");
	$("#ConteudoTD").append($titulo); 
	barraD++;console.log(barraD);
	calcularBARRA();	
})	
}

function calcularBARRA(){
	let tamanho0 = (barraD * 100)/barra;
	$('#BToDo').css("width",`${tamanho0}%`);
	let tamanho1 = (barraP * 100)/barra;
	$('#BInPro').css("width",`${tamanho1}%`);
	let tamanho2 = (barraR * 100)/barra;
	$('#BRevi').css("width",`${tamanho2}%`);
	let tamanho3 = (barraC * 100)/barra;
	$('#BComp').css("width",`${tamanho3}%`);
};

