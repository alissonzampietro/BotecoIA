//variaveis 
refrigerante = 0;

//Escolha de refrigerante
function escolhacoca() {
    refrigerante = 0;
}

function escolhapepsi() {
    refrigerante = 1;
}

//Teste de Sabor (Fuzzificação)
//Coca 
function cocaforte() {
    if ( qtdrefri < 50 || qtdrefri > 54 ) {
        refrisaborforte = 0;
    }else if ( 50 <= qtdrefri && qtdrefri < 52 ) {
        refrisaborforte = 1;
    }else if ( 52 <= qtdrefri && qtdrefri <= 54 ) {
        refrisaborforte = ( 54 - qtdrefri ) / ( 54 - 52 );
    };
    return refrisaborforte;
}

function cocasuave() {
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

function cocafraco() {
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
function pepsiforte() {
    if ( qtdrefri < 60 || qtdrefri > 64 ) {
        refrisaborforte = 0;
    }else if ( 60 <= qtdrefri && qtdrefri < 62 ) {
        refrisaborforte = 1;
    }else if ( 62 <= qtdrefri && qtdrefri <= 64 ) {
        refrisaborforte = ( 64 - qtdrefri ) / ( 64 - 62 );
    };
    return refrisaborforte;
}

function pepsisuave() {
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

function pepsifraco() {
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
function runforte() {
    if ( qtdrun < 23 || qtdrun > 30 ) {
        runsaborforte = 0;
    }else if ( 23 <= qtdrun && qtdrun < 28 ) {
        runsaborforte = ( qtdrun - 23 ) / ( 28 - 23 );
    }else if ( 28 <= qtdrun && qtdrun <= 30 ) {
        runsaborforte = 1;
    };
    return runsaborforte;
}

function runsuave() {
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

function runfraco() {
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
function gelo() {
    if ( qtdgelo == 20 ) {
        gelosabor = 1;
    }else {
        gelosabor = 0;
    }
    return gelosabor;
}

//Teste de Sabor (Defuzzificação)
//Testa é Suave
function suave () {
    valorsuave = Math.max( Math.min ( refrisaborforte, runsaborfraco , gelosabor ) , Math.min ( refrisaborsuave , runsaborsuave , gelosabor ) , Math.min ( refrisaborfraco , runsaborforte , gelosabor ) );
    return valorsuave;
}

//Testa é Forte
function forte () {
    valorforte = Math.max( Math.min ( refrisaborforte, runsaborsuave , gelosabor ) , Math.min ( refrisaborforte , runsaborforte , gelosabor ) , Math.min ( refrisaborsuave , runsaborforte , gelosabor ) );
    return valorforte;
}

//Testa é fraco
function fraco () {
    valorfraco = Math.max( Math.min ( refrisaborfraco, runsaborfraco , gelosabor ) , Math.min ( refrisaborfraco , runsaborsuave , gelosabor ) , Math.min ( refrisaborsuave , runsaborfraco , gelosabor ) );
    return valorfraco
}

//
function definepaladar () {
//adicionar variaveis
dpsuave = suave();
dpfraco = fraco();
dpforte = forte();

//Paladar
if (dpfraco == 0 && dpsuave == 0 && dpforte == 0) {
    paladar = "Não é Cuba Livre"; 
}else if ( dpfraco > dpsuave && dpfraco > dpforte ) {
    paladar = "Fraco";
}else if( dpsuave > dpfraco && dpsuave > dpforte ){
    paladar = "Suave";
}else if( dpforte > dpfraco && dpforte > dpsuave){
    paladar = "Forte";
};
return paladar;
}

//Define Preço
function definepreco () {
//adicionar variaveis
dvpsuave = suave();
dvpfraco = fraco();
dvpforte = forte();
preco = 0;
//Preço
if ( dvpfraco > dvpsuave && dvpfraco > dvpforte ) {
    preco = 15;
}else if( dvpsuave > dvpfraco && dvpsuave > dvpforte ){
    preco = 20;
}else if( dvpforte > dvpfraco && dvpforte > dvpsuave){
    preco = 25;
};
return preco;
}


//Mostra a Saídas
function  mostrarsaidas() {
conteudos='';
    if (refrigerante == 0) {
            conteudos+='<br><b>Expressões da Questões 2</b><br>';
            conteudos+=('Sabor da Coca => Forte: '+cocaforte()+' Suave: '+cocasuave()+' Fraco: '+cocafraco()+'<br>Sabor do Run => Forte: '+runforte()+' Suave: '+runsuave()+' Fraco: '+runfraco()+'<br>Sabor do Gelo => '+gelo());
        } else {
            conteudos+='<br><b>Expressões da Questões 2</b><br>';
            conteudos+=('Sabor da Coca => Forte: '+pepsiforte()+' Suave: '+pepsisuave()+' Fraco: '+pepsifraco()+'<br>Sabor do Run => Forte: '+runforte()+' Suave: '+runsuave()+' Fraco: '+runfraco()+'<br>Sabor do Gelo => '+gelo());
        };
    conteudos+='<p><b>Expressões da Questões 3</b><br>';
    conteudos+=( 'Forte: '+forte()+' Suave: '+suave()+' Fraco: '+fraco())
    conteudos+=('<p><b>'+definepaladar()+'</b>');
    conteudos+=('<p><b>R$'+definepreco()+",00</b>");
    $('#saidas').html(conteudos);
    $('#saidas').show();
}


//Função principal
function  mix() {
    
    //Variaveis
    qtdrefri= $('#qtdrefri').val();
    qtdrun= $('#qtdrun').val();
    qtdgelo= $('#qtdgelo').val();

    //Reinicia variaveis 
    refrisaborsuave=0;
    refrisaborfraco=0;
    refrisaborforte=0;
    runsaborsuave=0;
    runsaborforte=0;
    runsaborfraco=0;
    gelosabor=0;

    //Mostra as Saídas
    mostrarsaidas();
}