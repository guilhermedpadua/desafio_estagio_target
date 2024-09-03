// Função para inverter os caracteres de uma string
function inverterString(str) {
    // Inicializando uma variável para armazenar a string invertida
    let stringInvertida = '';

    // Percorrendo a string de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
        // Adicionando cada caractere da string original à string invertida
        stringInvertida = stringInvertida + str[i];
    }

    // Retornando a string invertida
    return stringInvertida;
}

// Testando a função com a string "exemplo"
console.log(inverterString("exemplo")); // Saída será "olpmexe"
