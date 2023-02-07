// a)
function soma(num1, num2) {
    const soma = num1 + num2
    console.log(`O resultado de ${num1} + ${num2} é: ${soma}`)
}
soma(3,2)

// b)
function maiorIgual(num1, num2){
    const maiorIgual = num1 >= num2
    console.log(`${num1} é maior ou igual a ${num2}? ${maiorIgual}`)
}
maiorIgual(3,2)

// c)
function paridade(numero){
    const ehPar = numero % 2 === 0
    console.log(`O número ${numero} é par? ${ehPar}`)
}
paridade(3)

// d)
function salarioLiquido(salarioBruto) {
    const salarioLiquido = salarioBruto * 0.90
    console.log(`O salário líquido referente ao salário bruto de valor R$ ${salarioBruto} com desconto de 10% do INSS é: R$ ${salarioLiquido}.`)
}
salarioLiquido(3000)