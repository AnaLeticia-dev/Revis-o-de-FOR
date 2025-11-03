/* <!--Atividade 1--> */
let num = prompt("Digite um número para ver a sequência:")
for (let i = 1; i <= num; i++) {
    console.log(i)
}

/*<!--Atividade 2--> */
let num1 = prompt("Digite um número para ver a soma:")
let soma = 0;
for (let i = 1; i <= num1; i++) {
    soma = soma + i;
}
console.log("Soma:", soma)

/*<!--Atividade 3--> */
let numPar = prompt("Digite um número para ver seus pares:")
numPar = Number(numPar)
for (let i = 1; i <= numPar; i++) {
    if (i % 2 == 0) {
        console.log("Números pares:", i)
    }
}
/*<!--Atividade 4--> */
let num2 = prompt("Digite um número para ver a tabuada:")
let soma1 = 0
console.log("Tabuada do número", num2, ":")
for (let i = 1; i <= 10; ++i) {
    soma1 = num2 * i
    console.log(num2, "x", i, "=", soma1)
}
/*<!--Atividade 5-->*/
let soma2 = 0;
for (let i = 1; i <= 5; i++) {
    let numero = prompt("Digite os números para ver a média:");
    numero = Number(numero)
    soma2 += numero;
}
let media = soma2 / 5;
console.log("A média dos números é:", media);

/*<!--Atividade 6--> */
let num3 = prompt("Digite um número para ver a contagem regressiva:")
num3 = Number(num3)
for (let i = num3; i >= 1; i--) {
    console.log(i)
}
/*<!--Atividade 7--> */
let numero1 = prompt("Digite um número para calcular o fatorial:")
let fatorial = 1
for (let contador = 1; contador <= numero1; contador++) {
    fatorial = fatorial * contador
}
console.log("O fatorial de", numero1, "é:", fatorial)

/*<!--Atividade 8--> */
let numImp = prompt("Digite um número para ver seus ímpares:")
numImp = Number(numImp)
for (let i = 1; i <= numImp; i++) {
    if (i % 2 !== 0) {
        console.log("Números ímpares:", i)
    }
}
/*<!--Atividade 9--> */
let maior = 0
for (let i = 1; i <= 5; i++) {
  let numero = prompt("Digite os número para descobrir o maior:");
  numero = Number(numero) 
  if (numero > maior) {
    maior = numero;
  }
}
console.log("O maior número digitado é: ",maior);

/*<!--Atividade 10--> */
let inteiro
let a = 0
let b = 1
let prox
let n = prompt("Digite quantos termos da sequência de Fibonacci deseja:")
prompt =(a,b)
for (let i = 3; i <= n; i++) {
   let prox = a + b
    console.log(prox)
    a = b
    b = prox
}
