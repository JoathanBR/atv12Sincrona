
let armazenar = new Array()

function adicionarClube(){
    var clube = document.getElementById('clube').value
    
    
    if(clube == '' ){
        alert('Digite o Nome de um clube')
        return
    }

    else if(!isNaN(clube)){
        alert('Coloque um valor válido no nome de clube')
        return
    } else {
        armazenar.push(clube)
    }


}

var adicionar = document.getElementById('adicionar')
adicionar.addEventListener('click',adicionarClube )

function listarClubes (){
    var result = ""

    armazenar.forEach(function (nome, indice ){
        result += + (indice + 1) + ". " + nome + "<br>"
    })

    document.getElementById('resposta').innerHTML = result
}

var listar = document.getElementById('listar')
listar.addEventListener('click', listarClubes)

function montarTabela(){

    var result = ""
    var j = 1

    if (((armazenar.length )%2) == 0) {
        for(let i = 0; i < (armazenar.length/2) ; i++){
            result += armazenar[i] + " X " + armazenar[armazenar.length - (i + 1)] + "<br>"
        }
        document.getElementById('resposta').innerHTML = result

    } else {
        document.getElementById('resposta').innerHTML = "Não a times suficientes pra a criação da tabela"
    }

}

var tabela = document.getElementById('montarTabela')
tabela.addEventListener('click', montarTabela)