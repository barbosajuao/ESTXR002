const somar = (a, b) => {
    return a + b;
}

console.log(somar(5, 3)); // Output: 8

// 1. DEFINIÇÃO (O robô aprende o que fazer)
const traduzir = (fruta) => {
    if (fruta === "maçã") return "10";
    if (fruta === "banana") return "20";
    return "sem acesso"; // Se não conhecer a fruta
};

// 2. CHAMADA (O robô entra em ação)
// Aqui você "invoca" o nome da função e abre os parênteses ()

console.log(traduzir("maçã")); // Output: 🍎




const dobro = (numero) => numero * 2;

// Chamando a função e guardando o "presente" que ela devolveu
let meuResultado = dobro(50); 

// Agora eu uso a variável onde eu quiser
console.log("O dobro de 50 é:");
console.log(meuResultado);


const converterhoras = (horas) => horas * 60;

let resultado = converterhoras(2);

console.log(`2 horas equivalem a ${resultado} minutos.`);