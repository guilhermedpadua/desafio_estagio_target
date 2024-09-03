function isFibonacci(num) {
    let a = 0, b = 1, temp;
    while (b <= num) {
        if (b === num) return true;
        temp = b;
        b = a + b;
        a = temp;
    }
    return false;
}

console.log(isFibonacci(8)); // true
console.log(isFibonacci(7)); // false

// A função isFibonacci verifica se o número informado faz parte da sequência de Fibonacci, retornando true ou false conforme o caso.
