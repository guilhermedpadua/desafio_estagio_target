// Exemplo de um vetor com os valores do faturamento diário (substitua pelos seus dados reais)
const faturamentoDiario = [1000, 2000, 1500, 0, 3000, 2500, 0, 4000, 1000, 0];

// Calculando a soma total do faturamento no mês
let somaTotal = 0;
for (let i = 0; i < faturamentoDiario.length; i++) {
    somaTotal += faturamentoDiario[i];
}

// Calculando a média mensal de faturamento
let mediaMensal = somaTotal / faturamentoDiario.length;

// Encontrando o menor valor de faturamento no mês
let menorValor = faturamentoDiario[0];
for (let i = 1; i < faturamentoDiario.length; i++) {
    if (faturamentoDiario[i] < menorValor && faturamentoDiario[i] > 0) {
        menorValor = faturamentoDiario[i];
    }
}

// Encontrando o maior valor de faturamento no mês
let maiorValor = faturamentoDiario[0];
for (let i = 1; i < faturamentoDiario.length; i++) {
    if (faturamentoDiario[i] > maiorValor) {
        maiorValor = faturamentoDiario[i];
    }
}

// Contando os dias em que o faturamento foi superior à média mensal
let diasAcimaDaMedia = 0;
for (let i = 0; i < faturamentoDiario.length; i++) {
    if (faturamentoDiario[i] > mediaMensal) {
        diasAcimaDaMedia++;
    }
}

// Exibindo os resultados
console.log('Menor valor:', menorValor);
console.log('Maior valor:', maiorValor);
console.log('Dias com faturamento acima da média:', diasAcimaDaMedia);
