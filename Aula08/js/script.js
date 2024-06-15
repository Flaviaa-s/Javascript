let px = 0;
let canto =0;
function movimentaBlack(){

    if(px >=600){
        px =600
    }
    else{
        px +=5;
    }

    document.getElementById("um").style.marginLeft=px+"px";
    document.getElementById("um").style.borderRadius=canto+"px";
    canto+=5;

    let r = parseInt(Math.random()*255);
    let g = parseInt(Math.random()*255);
    let b = parseInt(Math.random()*255);

document.getElementById("um").style.backgroundColor=`rgb(${r},${g},${b})`;
}

function relogio(){
    //referência da biblioteca Date
    let tempo = new Date();
    let hora = tempo.getHours();
    let minuto = tempo.getMinutes();
    let segundo = tempo.getSeconds();
    document.getElementById("dois").innerHTML=`${hora} : ${minuto} : ${segundo}`;

   
}

//window.setInterval(relogio,1000)

// let tm = 1;
// let estado ="aumentar";
// const el = setInterval(()=>{

//     if(tm >= 3){
//         estado="diminuir";
//     }
//     else if(tm <=1){
//         estado="aumentar";
//     }

//     if(estado=="aumentar"){
//         tm+=0.1;
//     }
//     else{
//         tm -=0.1;
//     }


// document.getElementById("tres").style.transform=`scale(${tm})`;
// },300)


let posicao = 0;
let direcao = "direita";
setInterval(()=>{

    if(posicao >= 1900 ){
        direcao = "esquerda";
    }
    if(posicao <= 1){
        direcao = "direita";
    }
    if(direcao=="direita"){
        posicao+=10;
    }
    else{
        posicao -= 5;
    }
    document.getElementById("quatro").style.left=`${posicao}px`;
},50)
