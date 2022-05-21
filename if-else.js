/**
 * Declarando variável hora
 */
let hora = 21

/**
 * Condição para mensagem de 
 * 'Bom dia','Boa Tarde','Boa Noite'
 */
if (hora >= 0 && hora < 12) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}