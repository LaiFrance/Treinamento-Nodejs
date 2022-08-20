function calcularDivisao(num1, num2){
    const promise = new Promise((resolve, reject) => {
        if (num2 ==0) reject(new Error("Não pode ser feito uma divisao por 0"))
        const resultado= num1 / num2;
        resolve(resultado);
    });
    return promise;
}

calcularDivisao(2,0)
    .then(resultado => console.log("resultado:%s", resultado))
    .catch(e => console.log("Erro: %s", e.message));

calcularDivisao(2,10)
    .then(resultado => console.log("resultado:%s", resultado))
    .catch(e => console.log("Erro: %s", e.message));
