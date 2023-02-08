function soma(num1,num2) {
    const somando = num1 + num2
    return somando
}

function subtracao(num1,num2) {
    const subtraindo = num1 - num2
    return subtraindo
}

function multiplicacao(num1,num2) {
    const multiplicando = num1 * num2
    return multiplicando
}

function divisao(num1,num2) {
    const dividindo = num1 / num2
    return dividindo
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