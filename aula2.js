// Exercicio 1
console.log("O primeiro programa a gente nunca esquece!")

//Exercicio 2
const nomeCompleto = prompt("Digite seu nome completo")
const endereco = prompt("Digite seu endereço")
const cepTelefone = prompt("Digite seu Cep e número de telefone")
console.log(nomeCompleto)
console.log(endereco)
console.log(cepTelefone)

//Exercicio 3
console.log(`Soon may the Wellerman come
To bring us sugar and tea and rum
One day, when the tonguing is done
We'll take our leave and go`)

// Exercicio 4
console.log("Aluno (a)    Nota")
console.log("=========    ====")
console.log("Aline        9.0")
console.log("Mário        Dez")
console.log("Sérgio       4.5")
console.log("Shirley      7.0")

// Exercicio 5
console.log(`Cadastro de Clientes
0 – Fim
1 - Inclui
2 - Altera
3 - Exclui
4 - Consulta`)

let opcao = prompt("Escolha uma opção")
console.log(`A opção escolhida foi a: ${ opcao }`)

// Exercicio 6
let vidaMonstro = prompt("Digite a vida do Monstro (entre 10 e 50)")
let danoJogador = prompt("Digite o Dano do Jogador (entre 5 e 10)")
let turnos = Math.ceil(vidaMonstro/danoJogador)
console.log(`O jogador irá derrotar o monstro em ${ turnos } turnos`)

// Exercicio 7
const valorRefeicao = 42.54
const taxaServico = valorRefeicao/100
console.log(`Valor da taxa de serviço: R$ ${ taxaServico.toFixed(2) }`)

// Exercicio 8
const valorConta = 100.98
const valorPago = 150
const valorTroco = Math.round(valorPago - valorConta)
console.log(`O valor do troco é de R$ ${ valorTroco }`)

// Exercicio 9
const anoNascimento = prompt("Digite o ano de seu nascimento")
const anoAtual = prompt("Digite o ano atual")
const idade = anoAtual - anoNascimento
console.log(`${ idade } anos, Você está na flor da idade`)

// Exercicio 10
const valorEmReal = prompt("Digite o valor que quer converter")
const valorEmDolar = valorEmReal*0.19
const valorEmEuro = valorEmReal*0.16
const valorEmLibra = valorEmReal*0.14
const valorEmDolarCanadense = valorEmReal*0.24
const valorEmPesoArgentino = valorEmReal*18.07
const valorEmPesoChileno = valorEmReal*146.2
console.log(`$ ${ valorEmDolar.toFixed(2) } em Dólar`)
console.log(`$ ${ valorEmEuro.toFixed(2) } em Euro`)
console.log(`$ ${ valorEmLibra.toFixed(2) } em Libra`)
console.log(`$ ${ valorEmDolarCanadense.toFixed(2) } em Dólar Canadense`)
console.log(`$ ${ valorEmPesoArgentino.toFixed(2) } em Peso Argentino`)
console.log(`$ ${ valorEmPesoChileno.toFixed(2) } em Peso Chileno`)

// Exercicio 11 e 12
const valorAluguel = +prompt("Digite o valor do seu aluguel")
const valorReajuste = +prompt("Digite o valor do seu reajuste") 
const valorReajustado = (valorAluguel * (valorReajuste/100)) + valorAluguel
console.log(valorReajustado)