//Exercício 1
const numeroAleatorio = Math.floor(Math.random() * 10 + 1)
const numeroUsuario = +prompt("Digite um número de 1 a 10")

if(numeroAleatorio === numeroUsuario){
  console.log("Parabéns, você acertou!")
} else{
  console.log("Que pena, tente outra vez.")
}

//Exercício 2
const numeroUm = 1
const numeroDois = 2

function func1(argumento1, argumento2){
  return argumento1 + argumento2
}

func1(numeroUm, numeroDois)

//Exercício 3
const numero = 1

function func1(argumento){
  return argumento > 0 ? "P" : "N"
  
  if (argumento > 0){
    return "P"
  }
  else{
    return "N"
  }
}

func1(numero)
