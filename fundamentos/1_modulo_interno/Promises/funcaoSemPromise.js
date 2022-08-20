function calcularDivisao(num1, num2) {
    if (num2 ==0) throw new Error("Não pode ser feito uma divisao por 0")
    const resultado= num1 / num2;
    return resultado;

}

try {
    const resultado = calcularDivisao(10, 10);
    console.log("resultado:%s", resultado);
} catch (e) {
    console.log("Erro: %s", e.message);
}
try {
    const resultado = calcularDivisao(10, 0);
    console.log("resultado:%s", resultado);
} catch (e) {
    console.log("Erro: %s", e.message);
} 