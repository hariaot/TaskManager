let barraT = 0, barraP = 0, barraR = 0, barraC = 0, barra = 0;
let buttom = document.getElementById("New").addEventListener("click", function(){
	document.getElementById("Nova").style.display = "block";
})


function calculaBarra(){
    let tamanho = (qtToDo * 100)/qtTotal;
    document.getElementById("BToDO").style.width = `${tamanho}%`;
    
    tamanho = (qtInProgress * 100)/qtTotal;
    document.getElementById("BInPro").style.width = `${tamanho}%`;
    
    tamanho = (qtReview * 100)/qtTotal;
    document.getElementById("BRevi").style.width = `${tamanho}%`;
    
    tamanho = (qtComplete * 100)/qtTotal;
    document.getElementById("BComp").style.width = `${tamanho}%`;
}
