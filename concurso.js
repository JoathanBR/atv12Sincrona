let candidatos = new Array()
let min = prompt("Números de acertos para Aprovação?")

function adicionarCandidato(){
    let candidato = new Object()

    var nCan = document.getElementById('nome').value
    var nAcer = document.getElementById('acertos').value

    if(nCan == '' || nAcer == ''){
        alert('Digite o Nome do Candidato e o Nº de acertos dele')
        return
    }

    else if(isNaN(nAcer)){
        alert('Coloque um valor válido no Nº de acertos')
        return
    }
    else{
        candidato.nome = nCan
        candidato.numeroAcertos = nAcer

        candidatos.push(candidato)
    }

    console.log(min)
}

function listarTodos(){
    candidatos.forEach(function(valor){
        document.getElementById('listar').innerHTML += valor.nome + " - " + valor.numeroAcertos + " acertos<br>"
    })
}

function aprovados(){

    function compare(a,b) {
        if (a.numeroAcertos > b.numeroAcertos)
           return -1;
        if (a.numeroAcertos < b.numeroAcertos)
          return 1;
        return 0;
      }

      candidatos.sort(compare)
    candidatos.forEach(function(valor){
        if(valor.numeroAcertos >= min)
        document.getElementById('listarAprovados').innerHTML += valor.nome + " - " + valor.numeroAcertos + " acertos<br>"
    })
}