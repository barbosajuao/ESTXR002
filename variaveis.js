let nome = `joao`
let idade = 20
let altura = 1.75
let peso = 70.5
let isStudent = true

console.log(`Nome: ${nome}`)/* $ concatenação */
console.log(`Idade: ${idade}`)
console.log(`Altura: ${altura}m`)
console.log(`Peso: ${peso}kg`)
console.log(`É estudante? ${isStudent}`)
 
/* objetos */

let objetovazio = {}

/* objeto com propriedade */
let carro = {
    marca: `Toyota`,
    modelo: `Corolla`,
    ano: 2020,
    cor: `Prata`
}

console.log(carro)
console.log('') 

let pessoa ={
    nome: `Maria`,
    idade: 30,
    profissao: `Engenheira`,
    robies: [`futebol`, `correr`, `cozinhar`, 'passear'],
    endereço: { // objeto dentro de outro objeto
        rua: `Rua das Flores`,
        numero: 123,
        cidade: `São Paulo`,
        estado: `SP`
    }
}

console.log(pessoa)
console.log(pessoa.nome)/* acessando a propriedade nome do objeto pessoa */
console.log(pessoa.idade)/* acessando a propriedade idade do objeto pessoa */
console.log(pessoa.endereço.cidade)/* acessando o objeto endereço dentro do objeto pessoa */
console.log(pessoa.robies[2])/* acessando o terceiro hobbie do array robies dentro do objeto pessoa */  