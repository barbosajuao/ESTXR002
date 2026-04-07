const estoque = ["Peça A", "Peça B", "Peça C", "Peça D"];

// estoque.length diz ao computador o tamanho exato da lista (4)
for (let i = 0; i < estoque.length; i++) {
    console.log(`Escaneando posição ${i}: Encontrado ${estoque[i]}`);
}

const pacientes = ["Estável", "Estável", "Crítico", "Estável"];

for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i] === "Crítico") {
        console.log(`ALERTA! O paciente na posição ${i} precisa de atenção imediata!`);
    }
}