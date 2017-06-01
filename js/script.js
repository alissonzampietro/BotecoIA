//variaveis 
var refrigerante = 0;
var preco = 0; 

function atualizarCampo()
{
    let valorRefri = document.getElementById('qtdrefri').value;
    document.getElementById('refri').value = valorRefri+' ml';
}

//Escolha de refrigerante
function escolhacoca() {
    let ele = document.getElementById('qtdrefri');
    ele.min = 50;
    ele.max = 60;
    refrigerante = 0;
    atualizarCampo();

}

function escolhapepsi() {
    let ele = document.getElementById('qtdrefri');
    ele.min = 60;
    ele.max = 70;
    refrigerante = 1;
    atualizarCampo();
}

//Teste de Sabor (Fuzzificação)
//Coca 
function cocaforte(qtdrefri) {
    let refrisaborforte = 0;
    if ( qtdrefri < 50 || qtdrefri > 54 ) {
        refrisaborforte = 0;
    }else if ( 50 <= qtdrefri && qtdrefri < 52 ) {
        refrisaborforte = 1;
    }else if ( 52 <= qtdrefri && qtdrefri <= 54 ) {
        refrisaborforte = ( 54 - qtdrefri ) / ( 54 - 52 );
    };
    return refrisaborforte;
}

function cocasuave(qtdrefri) {
    let refrisaborsuave = 0;
    if ( qtdrefri < 52 || qtdrefri > 58 ) {
        refrisaborsuave = 0;
    }else if ( 52 <= qtdrefri && qtdrefri <= 54 ) {
        refrisaborsuave = ( qtdrefri - 52 ) / ( 54 - 52);
    }else if ( 54 <= qtdrefri && qtdrefri < 56 ) {
        refrisaborsuave = 1;
    }else if ( 56 <= qtdrefri && qtdrefri <= 58) {
        refrisaborsuave = ( 58 - qtdrefri ) / ( 58 - 56 );
    };
    return refrisaborsuave;
}

function cocafraco(qtdrefri) {
    let  refrisaborfraco = 0;
    if ( qtdrefri < 56 || qtdrefri > 60 ) {
        refrisaborfraco = 0;
    }else if ( 56 <= qtdrefri && qtdrefri < 58 ) {
        refrisaborfraco = ( qtdrefri - 56 ) / ( 58 - 56 );
    }else if ( 58 <= qtdrefri && qtdrefri <= 60 ) {
        refrisaborfraco = 1;
    };
    return refrisaborfraco;
}

//Pepsi 
function pepsiforte(qtdrefri) {
    let refrisaborforte = 0;
    if ( qtdrefri < 60 || qtdrefri > 64 ) {
        refrisaborforte = 0;
    }else if ( 60 <= qtdrefri && qtdrefri < 62 ) {
        refrisaborforte = 1;
    }else if ( 62 <= qtdrefri && qtdrefri <= 64 ) {
        refrisaborforte = ( 64 - qtdrefri ) / ( 64 - 62 );
    };
    return refrisaborforte;
}

function pepsisuave(qtdrefri) {
    let refrisaborsuave = 0;
    if ( qtdrefri < 62 || qtdrefri > 68 ) {
        refrisaborsuave = 0;
    }else if ( 62 <= qtdrefri && qtdrefri <= 64 ) {
        refrisaborsuave = ( qtdrefri - 62 ) / ( 64 - 62);
    }else if ( 64 <= qtdrefri && qtdrefri < 66 ) {
        refrisaborsuave = 1;
    }else if ( 66 <= qtdrefri && qtdrefri <= 68) {
        refrisaborsuave = ( 68 - qtdrefri ) / ( 68 - 66 );
    };
    return refrisaborsuave;
}

function pepsifraco(qtdrefri) {
    let refrisaborfraco = 0;
    if ( qtdrefri < 66 || qtdrefri > 70 ) {
        refrisaborfraco = 0;
    }else if ( 66 <= qtdrefri && qtdrefri < 68 ) {
        refrisaborfraco = ( qtdrefri - 66 ) / ( 68 - 66 );
    }else if ( 68 <= qtdrefri && qtdrefri <= 70 ) {
        refrisaborfraco = 1;
    };
    return refrisaborfraco;
}

//Run
function runforte(qtdrun) {
    let runsaborforte = 0;
    if ( qtdrun < 23 || qtdrun > 30 ) {
        runsaborforte = 0;
    }else if ( 23 <= qtdrun && qtdrun < 28 ) {
        runsaborforte = ( qtdrun - 23 ) / ( 28 - 23 );
    }else if ( 28 <= qtdrun && qtdrun <= 30 ) {
        runsaborforte = 1;
    };
    return runsaborforte;
}

function runsuave(qtdrun) {
    let runsaborsuave = 0;
    if ( qtdrun < 15 || qtdrun > 27 ) {
        runsaborsuave = 0;
    }else if ( 15 <= qtdrun && qtdrun <= 20 ) {
        runsaborsuave = ( qtdrun - 15 ) / ( 20 - 15 );
    }else if ( 20 <= qtdrun && qtdrun < 25 ) {
        runsaborsuave = 1;
    }else if ( 25 <= qtdrun && qtdrun <= 27 ) {
        runsaborsuave = ( 27 - qtdrun ) / ( 27 - 25 );
    };
    return runsaborsuave;
}

function runfraco(qtdrun) {
    let runsaborfraco = 0;
    if ( qtdrun < 10 || qtdrun > 20 ) {
        runsaborfraco = 0;
    }else if ( 10 <= qtdrun && qtdrun < 15 ) {
        runsaborfraco = 1;
    }else if ( 15 <= qtdrun && qtdrun < 20 ) {
        runsaborfraco = ( 20 - qtdrun ) / ( 20 - 15 );
    };
    return runsaborfraco;
}

//Gelo
function gelo(qtdgelo) {
    if ( qtdgelo == 20 ) {
        gelosabor = 1;
    }else {
        gelosabor = 0;
    }
    return gelosabor;
}

//Teste de Sabor (Defuzzificação)
//Testa é Suave
function suave (refrisaborforte,runsaborfraco,gelosabor,refrisaborsuave ,runsaborsuave, refrisaborfraco,runsaborforte) {
    let valorsuave = Math.max( Math.min ( refrisaborforte, runsaborfraco , gelosabor ) , Math.min ( refrisaborsuave , runsaborsuave , gelosabor ) , Math.min ( refrisaborfraco , runsaborforte , gelosabor ) );
    return valorsuave;
}

//Testa é Forte
function forte (refrisaborforte, runsaborsuave, gelosabor, runsaborforte,refrisaborsuave) {
    let valorforte = Math.max( Math.min ( refrisaborforte, runsaborsuave , gelosabor ) , Math.min ( refrisaborforte , runsaborforte , gelosabor ) , Math.min ( refrisaborsuave , runsaborforte , gelosabor ) );
    return valorforte;
}

//Testa é fraco
function fraco (refrisaborfraco ,runsaborfraco, gelosabor , runsaborsuave,refrisaborsuave,) {
    let valorfraco = Math.max( Math.min ( refrisaborfraco, runsaborfraco , gelosabor ) , Math.min ( refrisaborfraco , runsaborsuave , gelosabor ) , Math.min ( refrisaborsuave , runsaborfraco , gelosabor ) );
    return valorfraco
}

//Define Paladar e Preço
function definepaladar (dpsuave ,dpfraco, dpforte) {
    let paladar = "";
    //Paladar
    if (dpfraco == 0 && dpsuave == 0 && dpforte == 0) {
        paladar = "Não é Cuba Livre";
        preco = 0; 
    }else if ( dpfraco > dpsuave && dpfraco > dpforte ) {
        paladar = "Fraco";
        preco = 15;
    }else if( dpsuave >= dpfraco && dpsuave > dpforte ){
        paladar = "Suave";
        preco = 20;
    }else if( dpforte >= dpfraco && dpforte >= dpsuave){
        paladar = "Forte";
        preco = 25;
    };
    return paladar;
}




//Mostra a Saídas
function  mostrarsaidas() {
    //refrigerante == 0  é coca
    preco = 0; 
    //Variaveis
    const  qtdrefri= $('#qtdrefri').val();
    const qtdrun= $('#qtdrun').val();
    const qtdgelo= $('#qtdgelo').val();

    //Reinicia variaveis 
    const refrisaborsuave= refrigerante == 0 ? cocasuave(qtdrefri) : pepsisuave(qtdrefri);
    const refrisaborfraco= refrigerante == 0 ? cocafraco(qtdrefri) : pepsifraco(qtdrefri);
    const refrisaborforte= refrigerante == 0 ? cocaforte(qtdrefri) : pepsiforte(qtdrefri);
    const runsaborsuave= runsuave(qtdrun) ;
    const runsaborforte= runforte(qtdrun) ;
    const runsaborfraco= runfraco(qtdrun) ;
    const gelosabor= gelo(qtdgelo);

        //adicionar variaveis
    const dpsuave = suave(refrisaborforte,runsaborfraco,gelosabor,refrisaborsuave,runsaborsuave,refrisaborfraco,runsaborforte);
    const dpfraco = fraco(refrisaborfraco,runsaborfraco,gelosabor,runsaborsuave,refrisaborsuave);
    const dpforte = forte(refrisaborforte,runsaborsuave,gelosabor,runsaborforte,refrisaborsuave);


    let conteudos='';
    if (refrigerante == 0) {
            conteudos+='<br><b>Expressões da Questões 2</b><br>';
            conteudos+=('Sabor da Coca => Forte: '+refrisaborforte+' Suave: '+refrisaborsuave+' Fraco: '+refrisaborfraco+'<br>Sabor do Run => Forte: '+runsaborforte+' Suave: '+runsaborsuave+' Fraco: '+runsaborfraco+'<br>Sabor do Gelo => '+gelosabor);
        } else {
            conteudos+='<br><b>Expressões da Questões 2</b><br>';
            conteudos+=('Sabor da Pepsi => Forte: '+refrisaborforte+' Suave: '+refrisaborsuave+' Fraco: '+refrisaborfraco+'<br>Sabor do Run => Forte: '+ runsaborforte+' Suave: '+runsaborsuave+' Fraco: '+runsaborfraco+'<br>Sabor do Gelo => '+gelosabor);
        };
    conteudos+='<p><b>Expressões da Questões 3</b><br>';
    conteudos+=( 'Forte: '+dpforte+' Suave: '+dpsuave+' Fraco: '+dpsuave)
    conteudos+=('<p><b>'+definepaladar(dpsuave, dpfraco,dpforte)+'</b>');
    conteudos+=('<p><b>R$'+ preco+",00</b>");
    $('#content-saida').html(conteudos);
    $('#saidas').removeClass('oculto')
}


//Função principal
function  mix() {
    //Mostra as Saídas
    mostrarsaidas();
}


function updateValueRange(item,valor)
{   var medida = 'ml';
    if(item == 'gelo'){
        medida = 'cubos';
    }
    document.getElementById(item).value = valor+' '+medida;
}

$(document).ready(function(){
    $('.fechar').click(function() {
        $('#saidas').addClass('oculto');
    })
})
