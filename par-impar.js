/**
 * Mostrando se um número e par ou impar.
 */

const value = 5
mostraParImpar(value)

function mostraParImpar(value) {
    for (let index = 1; index <= value; index++) {
        if (index % 2 === 0) {
            console.log('Par:   ', index)
        } else {
            console.log('Impar: ', index)
        }
    }
}