let aleatorio = Math.floor(Math.random() * 3)
let chances = 3
let erros = []

document.getElementById('resultado').innerHTML = "<h3>Chances: " + chances + "</h3>"


function apostar(){
    var numero = document.getElementById('numero').value
    console.log(aleatorio)

    if(isNaN(numero) || numero == ''){
        alert("Digite um número válido")
        document.getElementById('numero').focus()
    }

    else if(erros.indexOf(numero) != -1){
        document.getElementById('resultado').innerHTML = "<h3>Erros: " + numero + "("+ erros + ")<br>Chances: " + chances +"<br>Tente um número maior que " + numero +"</h3>"
        alert(`Você já apostou o número ${numero}. Tente outro...`)
    }



    else if(numero != aleatorio){
        chances--
        erros.push(numero)
        if(numero < aleatorio){
            document.getElementById('resultado').innerHTML = "<h3>Erros: " + numero + "("+ erros + ")<br>Chances: " + chances +"<br>Tente um número maior que " + numero +"</h3>"
            
            if(chances == 0){
                document.getElementById('resultado').innerHTML = "<h3>Erros: " + numero + "("+ erros + ")<br>Chances:" + chances +"<br>Tente um número menor que " + numero +"<br>Game Over!! Numero Sorteado:" + aleatorio +"</h3>"
                erros = []
                return chances = 3
            }
        }
        else{
            document.getElementById('resultado').innerHTML = "<h3>Erros: " + numero + "("+ erros + ")<br>Chances:" + chances +"<br>Tente um número menor que " + numero +"</h3>"
            if(chances == 0){
                document.getElementById('resultado').innerHTML = "<h3>Erros: " + numero + "("+ erros + ")<br>Chances:" + chances +"<br>Tente um número menor que " + numero +"<br>Game Over!! Numero Sorteado:" + aleatorio +"</h3>"
                erros = []
                return chances = 3
            }
        }
        
    }

    else{
        alert('Vc ganhou')
        erros = []
        return chances = 3
    }
}
