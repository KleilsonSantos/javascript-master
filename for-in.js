const pessoa = {
    nome: 'Jhon Mayes',
    idade: 40,
    sexo: 'Masculino',
    funcao: 'Desenvolvedor'
}


for (let key in pessoa) {
    console.log(key, pessoa[key])
}