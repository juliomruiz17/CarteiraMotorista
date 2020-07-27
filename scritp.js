
    function pulaLinha() {
        document.write("<br>");
    }

    function mostra(frase) {
        document.write(frase);
        pulaLinha();
    }

    let idade = Number(prompt("Qual é sua idade?"));


    if(idade < 18){
        alert("Só carrinho de controle remoto para você");
        alert("Ainda falta(m) " + (18 - idade) + " ano(s) para poder tirar carteira");
        mostra("Só carrinho de controle remoto para você");
        mostra("Ainda falta(m) " + (18 - idade) + " ano(s) para poder tirar carteira");         
    }
    else{
    let temCarteira = prompt("Tem carteira? Responda S ou N");
        if (idade >=18 && temCarteira == "S"){
        mostra("Pode dirigir");
        alert("Pode dirigir");
     }
        else{
        mostra("Não pode dirigir");
        alert("Não pode dirigir");
    }}
