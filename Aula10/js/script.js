const img = "https://image.tmdb.org/t/p/w500";
const estrutura = document.querySelector("#estrutura");


/* Para carregar os dados da API do themoviedb, iremos usar o comando
fetch (buscar) para buscar os dados dos filmes populares. Este comando
tem dois elementos atrelado, sendo eles:

then -> então: Quando a execução do comando fetch funciona
catch ->captura de erro:  Quando a execução do comando fetch falha

O fetch é uma Promise
*/




fetch("https://api.themoviedb.org/3/movie/popular?language=pt-brS&page=1&api_key=70bd7f165f8d58eff649896ae60237b8")
.then((response)=>response.json())
.then((dados)=>{

    dados.results.map((filme)=>{
        let cartaz = document.createElement("div");
        cartaz.setAttribute("class", "cartaz");
        let poster = document.createElement("img");
        poster.src=img+filme.poster_path;
  
        let votos = document.createElement("div");
        votos.setAttribute("class", "votos")
        votos.innerHTML = Math.round(filme.vote_average)+"%"; /* Math round para arrendondar os votos */

        let titutlo = document.createElement("h2");
        titutlo.innerHTML = filme.title;

        let lancamento = document.createElement("p");
        lancamento.setAttribute("class", "lancamento");
        lancamento.innerHTML=filme.release_date;
        /* Vamos utilizar o comando chamado substring, que nos ajuda a quebrar uma string com base na posição do caracter
        e a quantidade de caracteres.
        Por exemplo: 2024-06-13. Para pegar os 4 primeiros digitos usamos: substring(0,4)  */
        let ano = filme.release_date.substring(0,4);
        let mes = filme.release_date.substring(5,7);
        let dia = filme.release_date.substring(8,10);

        switch(mes){
            case "01":
                mes = "jan";
                break;
            case "02":
                mes = "fev";
                break; 
            case "03":
                mes = "mar";
                break;
            case "04":
                mes = "abr";
                break;
            case "05":
                mes = "mai";
                break;
            case "06":
                mes = "jun";
                break;  
            case "07":
                mes = "jul";
                break;
            case "08":
                 mes = "ago";
                break; 
            case "09":
                mes = "set";
                break;
            case "10":
                mes = "out";
                break; 
            case "11":
                mes = "nov";
                break; 
            default:    
            case "12":
                mes = "dez";
                break;                       
               
        }





        lancamento.innerHTML=`dia ${dia} do ${mes} de ${ano}`;

        cartaz.appendChild(poster);
        cartaz.appendChild(votos);
        cartaz.appendChild(titutlo);
        cartaz.appendChild(lancamento);

        estrutura.appendChild(cartaz);
        
    })
    



    // console.log(dados.results);
    // const fotos = document.getElementById("fotos");

    // for(let i = 0; i <=19 ; i++){

    //     fotos.innerHTML+=`<img src=${img}${dados.results[i].poster_path}>`;
    // }

})
.catch((erro)=>console.error(erro));

// const cidades = ["Leme", "Guarulhos", "São Paulo", "Maua", "Suzano"];
// let p=1
// cidades.forEach(exibir);

// function exibir(itens){
// console.log(`${p}ª${itens}`);
// p++;
// }

// cidades.forEach((itens)=>{
//     console.log(`${p}ª${itens}`);
//     p++;
// })

// cidades.map((itens)=>{
//     console.log(itens)
// })
    
