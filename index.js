let selecionar_musica = "Selecione uma música"
let aguarde = "Aguarde a votação terminar"
let fim_da_votacao = "Votação Encerrada<br/>A música mais votada é..."
let tempo_de_cada_votacao = 30 // banco de dados
let quantidade_de_turnos = 3 // banco de dados
let nome_evento = "nome do evento" // banco de dados

const title = document.querySelector(".title-txt").innerText = nome_evento
const status = document.querySelector(".info-status-txt").innerHTML = selecionar_musica
const timer = document.querySelector(".timer-txt").innerText = tempo_de_cada_votacao + "s"
const turnos = document.querySelector(".turnos-txt").innerText = "1/"+quantidade_de_turnos
let buttons = document.getElementsByClassName("btn")

let id = "";


//função incial ao abrir a pagina
window.onload = function onLoad(){
    checkCookie();
    console.log("ID Cookie: " + id);
}

//salvando o ID em um cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
  
function checkCookie() {
    id = getCookie("id");
    if (id != "") {
      //id encontrado
      console.log("ID encontrado: " + id);
    }else{ //gera id
        console.log("ID não encontrado, gerando um novo.");
        id = geraID();
        if (id != "" && id != null) {
            setCookie("id", id, 365);
        }
    }
}


function geraID(){
    var id=String.fromCharCode(Math.floor((Math.random()*25)+65));
    do {                
        var ascicode=Math.floor((Math.random()*42)+48); //(48 é 0 e 90 é Z (42-48 = 90)
        if (ascicode<58 || ascicode>64){ //excluindo caracteres especiais
            id+=String.fromCharCode(ascicode);    
        }                
    } while (id.length<32);
    //console.log(id);
    return (id);
}



//botoes
function btn_musicas_info () {
    //let musica_selecionada = document.getElementsByClassName
    /*
        Ao clicar no icone de info deve ser aberto um popup com as informações da música
    */
   function fechar_info () {
       /*
            Ao clicar no no X o popup deve ser fechado
       */
   }
}

function btn_musica () {
    /*
        Apenas uma música poderá ser selecionada
        A essa música deve ser adicionado a classe css "selecionado"
    */
}

function btn_confirmar () {
    /*
        Ao selecionar uma música o botão confirmar poderá ser clicado
        Ao confirmar os btn devem ficar com o efeito grayout
        Se houver tempo e a música tiver sido confirmada deve atualizar o a div info-status com a variável "aguarde"
    */
}

function rodada () {
    /*
        Deve controlar o tempo da rodada de votação
        Deve controlar os turnos para ver se ainda têm votação
        Se o tempo da rodada acabou deve ser chamado a função musica_ganhadora
    */
}

function musica_ganhadora () {
    /*
        Deve adicionar a classe none na div musics e na div do botão confirmar
        Deve atualizar a tag img com a imagem da música [img-winner]
        Deve Atualizar o nome da música [header-winner > span]
        Deve Atualizar o artista [name-winner > span]
    */
}

function start() {

}