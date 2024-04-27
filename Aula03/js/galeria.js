var miniatura =document.getElementsByClassName("miniatura")[0];
var fullsize =document.getElementsByClassName("fullsize")[0];

/* 
O comando abaixo faz uma contagem de 1 a 5  e incrementa
de um a um. Dentro do corpo do for é chamada de divi 
miniatura e inserimos nela um comando html para exibição
de imagens e este comando é repetido várias vezes que é pedido
no comando for. Quando ha a contagem o nome da foto é incrementado com o 
número da variável i. Fazendo uma contagem de  até 5 e exibir as imagens
de foto1 até foto5 dentro da div miniatura.
 */


for(var i = 1 ; i<=5 ; i++){
    miniatura.innerHTML+="<img src=img/foto"+i+".jpg onclick=abrir("+i+")>";
    
}
// document.getElementsByTagName("img")[0].onclick = function(){
//     fullsize.innerHTML="<img src=img/foto1.jpg>";
// }

// document.getElementsByTagName("img")[0].onclick = function(){
//     fullsize.innerHTML="<img src=img/foto1.jpg>";

/* A  funcão miniatura é chamda todas as vezes que uma foto da miniatura é clicada.
Quando a miniatura é clicada, ela dispara um evento chamado onclick e chama a função abrir
passando por parametro(argumento) um número, que é a posição da foto. Assim, a funão abrir
recebe o número passado e armazena a variavel p. Esta variável é usada para formar
o nome da foto que será carregada n div fullsize como vemos abaixo.
*/

function abrir(p){
    
        fullsize.innerHTML="<img src=img/foto"+(p)+".jpg>"; 

}