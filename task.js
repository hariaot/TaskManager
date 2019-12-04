let barraT = 0, barraP = 0, barraR = 0, barraC = 0, barra = 0, aux = 0;

$("#New").on('click', function(){
	$('#Nova').toggle();

});
$("#exit").on('click', function(){
	$('#Nova').toggle();
})
$("#Sub").on('click', function(){
	
	$('#Nova').toggle();
	new_div();
})

function new_div(){
$(document).ready(function(){
	
	var titleValues = $("#Title").val();
	var descriValues = $("#Description").val();
	var descric={
		id: "descrc",
		classe: "descrc",
	};
	var tituloc ={
		classe: "xablau",
		id:"titulo1",
		

	};

	var $descricao = $("<div>", descric);
	$descricao.html(descriValues)

	var $titulo = $("<div>", tituloc);
	$titulo.html(titleValues);

	$("#ConteudoTD").append($titulo); 
	barra++;barraT++;
	calcularBARRA();	
	$("#titulo1").on('click', function(){
	$("#ConteudoIP").append($titulo);
	barraT--;barraP++;
	calcularBARRA();	
	$("#titulo1").on('click', function(){
	$("#ConteudoRV").append($titulo);
	barraP--;barraR++;
	calcularBARRA();	
	$("#titulo1").on('click', function(){
	barraR--;barraC++;
	calcularBARRA();	
	$("#ConteudoCP").append($titulo);
	
})	
})
})
})
}

function calcularBARRA(){
	let tamanho = (barraT * 100)/barra;
	$('#BToDo').css("width",`${tamanho}%`);
	let tamanho1 = (barraP * 100)/barra;
	$('#BToDo').css("width",`${tamanho1}%`);
	let tamanho2 = (barraR * 100)/barra;
	$('#BToDo').css("width",`${tamanho2}%`);
	let tamanho3 = (barraC * 100)/barra;
	$('#BToDo').css("width",`${tamanho3}%`);
};