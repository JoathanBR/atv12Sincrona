
let armazenar = new Array()

function adicionarNumero(){
    var numero = document.getElementById('numero').value
    
    

    if(numero == '' ){
        alert('Digite um numero')
        return
    }

    else if(isNaN(numero)){
        alert('Coloque um valor válido no numero')
        return
    } else {
        armazenar.push(numero)
    }

}

var adicionar = document.getElementById('adicionar')
adicionar.addEventListener('click',adicionarNumero )

function listarNumeros (){
    var result = "Números "
    var cont = false

    armazenar.forEach(function (nome, indice ){
        result += + nome + ", "
    })
    document.getElementById('resposta').innerHTML = result

    for (let i = 1; i < armazenar.length; i++) {
        if ( armazenar[i - 1] > armazenar[i]) {
            cont++
        }
        
    }

    if (cont > 0) {
        document.getElementById('resposta2').innerHTML = "Atenção... Números não estao em ordem crescente"
    } else {
        document.getElementById('resposta2').innerHTML = "Ok! Números estão em ordem crescente"
    }
    
}

var listar = document.getElementById('listar')
listar.addEventListener('click', listarNumeros)

