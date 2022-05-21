/** 
 * Declarando variáveis 
 */
let value = 10
    /**
     * Declarando função sem argumentos
     */
function resetandoValor(value) {
    return value * 2
};
console.log('Valor da variável \'value\' antes da função ser executado', value)
value = resetandoValor(value)
console.log('Valor da variável \'value\' depois da função ser executada', value)
console.log('===================================')