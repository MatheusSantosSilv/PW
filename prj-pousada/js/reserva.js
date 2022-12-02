function calcular(){
    var hospede, diaria, valorTotal = 0,valorSuite = 0,valorHospede = 0,valorDiaria = 0;

    
    codSuite = document.frmReserva.slcSuite.selectedIndex;
    nomeSuite = document.frmReserva.slcSuite[codSuite].text;
    switch(codSuite){
        case 0: 
            valorSuite = 600.00;
            break;
        case 1:
            valorSuite = 350.00;
            break;
        case 2: 
        valorSuite = 200.00;
            break;
    }

    hospede = parseInt(document.getElementById('hospede').value);
    valorHospede = (hospede * 50)
    diaria = parseInt(document.getElementById('diaria').value);
    valorDiaria = (diaria * 200)

    valorTotal = valorSuite + valorDiaria + valorHospede;



    //AULA 24.11.2022

    //radio button
    var i, refeicao,adicionais = 0;

    for (i = 0; i < document.frmReserva.rdRefeicao.length; i++) {
        if (document.frmReserva.rdRefeicao[i].checked)
            break;
    }
    
    if (parseInt(document.frmReserva.rdRefeicao[i].value) == 1)        
        refeicao = "café da manhã";
    else if (parseInt(document.frmReserva.rdRefeicao[i].value) == 2)
        refeicao = "Meia Pensão";
    else
        refeicao = "Pensão Completa";


    //checkbox
    if (document.getElementById('traslado').checked) {
        adicionais += 255;
    }
    if (document.getElementById('cityTour').checked == true){
        adicionais += 350;
    }
    if (document.getElementById('passeio').checked == true){
        adicionais += 544;
    }

    valorTotal = (adicionais + valorTotal);



    document.getElementById('suite').innerHTML = "suite: " + nomeSuite;
    document.getElementById('refeicao').innerHTML = "Sua refeição será: " + refeicao;
    document.getElementById('divhospede').innerHTML = "Número de hospedes: " + hospede;
    document.getElementById('divdiaria').innerHTML = "Numero de diaria: " + diaria;
    document.getElementById('valorTotal').innerHTML = "valor total é: " + valorTotal;
    document.getElementById('adicionais').innerHTML = "Adicionais: R$ " + adicionais;


}