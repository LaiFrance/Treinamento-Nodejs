

const operations = require('./operacoes')
const readLine = require('readline-sync')

console.log("Calculadora")
const num1 = readLine.questionInt("Digite um numero: ")
const oper = readLine.question("Digite a  operação: (+, -, *, /)")
const num2 = readLine.questionInt("Digite outro numero: ")

switch (oper) {
    case "+":
        operations.sum(num1, num2)
        break;
    case "-":
        operations.sub(num1, num2)
        break;
    case "*":
        operations.mul(num1, num2)
        break;
    case "/":
        operations.div(num1, num2)
        break;
    default:
            console.log("Operação é desconhecida")

}
