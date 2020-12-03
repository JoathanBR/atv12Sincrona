
let armazenar = new Array()

function adicionarCrianca(){
    let crianca = new Object()
    var nome = document.getElementById('nomeCrianca').value
    var idade = document.getElementById('idadeCrianca').value

    if(nome == '' || idade == ''){
        alert('Digite o Nome da Criança e a idade dela')
        return
    }

    else if(isNaN(idade)){
        alert('Coloque um valor válido na idade')
        return
    }
    else{
        crianca.nome = nome
        crianca.idade = idade

        armazenar.push(crianca)
    }
}


function listarCrianca(){
    armazenar.forEach(function(valor){
        document.getElementById('resultadoCrianca').innerHTML += valor.nome + " - " + valor.idade + " anos<br>"
    })
}

function resumirIdade(){
    var idades = []
    var cont = 1
    for(var i = 0; i < armazenar.length; i++){
        idades[i] = armazenar[i].idade
    }

    idades.sort()

    var somaCont = 1
    for(i = 0; i < idades.length; i++){
        for(j = i + 1; j < idades.length; j++){
            if (idades[j] == idades[i]) {
                cont++
            }

        }
    }
    console.log(cont)
    var porcentagem = (somaCont * 100)/(armazenar.length)

    armazenar.forEach(function(valor){
        document.getElementById('resultadoCrianca').innerHTML += (`<h3>${valor.idade} ano(s): ${cont} criança(s) - ${porcentagem.toFixed(2)}</h3>`)
    })
}

