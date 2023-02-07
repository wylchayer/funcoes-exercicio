function soma(num1,num2) {
    const soma = num1 + num2
    return soma
}

function subtracao(num1,num2) {
    const subtracao = num1 - num2
    return subtracao
}

function multiplicacao(num1,num2) {
    const multiplicacao = num1 * num2
    return multiplicacao
}

function divisao(num1,num2) {
    const divisao = num1 / num2
    return divisao
}

const num1 = Number(prompt(`Digite o primeiro número:`))
const num2 = Number(prompt(`Digite o segundo número:`))

const somaNums = soma(num1,num2)
const subtracaoNums = subtracao(num1,num2)
const multiplicacaoNums = multiplicacao(num1,num2)
const divisaoNums = divisao(num1,num2)

console.log(`O resultado da soma de ${num1} e ${num2} é: ${somaNums}`)
console.log(`O resultado da subtração de ${num1} e ${num2} é: ${subtracaoNums}`)
console.log(`O resultado da multiplicação de ${num1} e ${num2} é: ${multiplicacaoNums}`)
console.log(`O resultado da divisão de ${num1} e ${num2} é: ${divisaoNums}`)