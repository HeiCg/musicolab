let selecionar_musica = "Selecione uma música"
let aguarde = "Aguarde a votação terminar"
let fim_da_votacao = "Votação Encerrada<br/>A música mais votada é..."
let tempo_de_cada_votacao = 30
let quantidade_de_turnos = 3 // isso é definido no banco de dados


function btn_musicas_info () {
    let musica_selecionada = document.getElementsByClassName
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