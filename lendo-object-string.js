/**
 * Criando um método para ler os dados de um
 * objeto, e mostrar apenas os dados que forem
 * atributos do tipo string desse objeto.
 */

let filme = {
    titulo: 'Matrix',
    genero: 'Ficção Ciêntifica',
    Ano: 1988,
    duracao: 2,
    diretor: 'José Andrade'
}
/** Função para ler os dados do 'object->filme'
 * e mostrar apenas os elementos do tipo 'string'
 */

/**Declarando a função 'lerDados(filme)', 
 * recebendo como parâmetro o 'object->filme'
 * */
function lerDados(filme) {
    /**inciciando um 'for-in' para percorrer os elementos
     * do object.
     */
    for (const key in filme) {
        
        const element = filme[key];
        if (typeof element === 'string') {
            console.log(`${key} -> ${element}`)
        }
    }
}

lerDados(filme)