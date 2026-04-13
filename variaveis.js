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

let pessoa = {
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

/* agora uma observacao muito interessante assim como uma variavel e praticamente a mesma coisa um objeto e tanbem um array porem o que vai mudar e como eles sao acessados assim tanbem como acessar o conteudo deles  */

/* abaixo um exemplo completo com uma funcao simples para calcular a media de um aluno  */

let aluno = {
    nome: `Carlos`,
    notas: [8, 10, 9],
    curso : 'programação',
    idade: 22,

    calcularMedia: function() {
        let soma = this.notas[0] + this.notas[1] + this.notas[2]/* estudar mais para entender sobre o this no notin na pagina this  lenbrando que quando ele esta dentro de um objeto this aponta diretamente para o mesmo lenbrado que so vou usar o this quando o array estiver dentro de um objeto se nao estiver dentro de um objeto nao e necessario o this  */
        let media = soma / this.notas.length
        return media
    }

}
console.log(aluno.nome)
console.log(aluno.calcularMedia())


/* ........................................................................................................................................................................ */


/* Praticas */


let casa = "house"

console.log(casa)