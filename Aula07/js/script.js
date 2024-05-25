function quadradoAzul(){
    //Vamos criar um elemento HTML do tipo DIV e acicioná-lo a tela.
    const divAzul = document.createElement("div");
    //Vamos adicionar um atributo de classe a nova div.
    divAzul.setAttribute("class", "divAzul");
    divAzul.setAttribute("id", "divAzul");
    //Adicionar a divAzul ao nosso documento
    document.body.appendChild(divAzul);

}
// Realizar a chamada da função quadradoAzul com o evento onload
document.body.onload=quadradoAzul();

//Quando passar o ponteiro do mouse sobre a div, mudar de cor
document.getElementById("divAzul").onmouseover=function(){
    document.getElementById("divAzul").style.backgroundColor="#600";
}
document.getElementById("divAzul").onmouseout=function(){
    document.getElementById("divAzul").style.backgroundColor="#8525";
}

const msg = function(){
    soma();
}

const soma = function(){
    let n1 =prompt("Digite um valor");
    let n2 = prompt("Digite outro valor");
    let rs = parseInt(n1)+parseInt(n2);
    const label =document.createElement("label");
    label.innerHTML=rs;
    document.body.appendChild(label);
}

const msg2 = ()=>{
    const es = prompt("Digite quantos botões você quer");
    for(let i = 0; i < es ; i++){
        const bt = document.createElement("button");
        bt.innerHTML=`botão ${i}`;
        document.body.appendChild(bt);
    }

}


document.getElementById("divAzul").onclick=msg2;