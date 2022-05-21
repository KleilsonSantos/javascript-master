const pessoas = {
    nome: 'Jhon Mayes',
    idade: 40,
    sexo: 'Masculino',
    funcao: 'Desenvolvedor'
}
for (let pessoa in pessoas) {
    console.log(pessoa, pessoas[pessoa]);
}
console.log('=================================')
let arrayString = ['Carlos', 'André', 'Luiz']
for (const key in pessoas) {
    if (Object.hasOwnProperty.call(pessoas, key)) {
        const element = pessoas[key];
        console.log(element)
    }
}
console.log('=================================')
for (const itarator in pessoas) {
    console.log(itarator)
}
console.log('=================================')
let numeroMaior = Math.max(10, 20)

let maior = max(20, 100)
console.log(maior)

function max(x, y) {
    return x > y ? x : y
}
// console.log(Math.min(10, 20))
// console.log(Math.ceil(12.87))
// var myArray = [1, 5, 6, 2, 3];
// var m = Math.min(...myArray);
// console.log(m)