/**
 * Velocidade máxima permitida 70
 * - Para cada 5km acima da velocidade máxima
 * acrescenta 1 ponto na carteira.
 * - Acima de 12 pontos -> 'Carteira Suspensa
 */

const final = 70
const maximoDePontos = 12
let velocidade = 130.8
if (velocidade <= final) {
    console.log('Velocidade OK')
} else {
    console.log(velocidadeMaxima(velocidade))
}

/**  */
function velocidadeMaxima(value) {
    let velocidade = Math.floor(value)
    let tmp = velocidade - final
    let pontos = Math.floor(tmp / 5)
    return acimaDaVelocidade(velocidade, pontos)
}

/** Função  */
function acimaDaVelocidade(tmp, pontos) {
    let floor = Math.floor(pontos)
    let text0 = `================================\n`
    let text1 = `Velocidade acima da permitida!!!\n`
    let text2 = `\nSua velocidade e de ${tmp} Km por hora \na velocidade permitida nesse trecho \ne de 70 Kmh, a cada 5 Kmh a mais da \nvelocidade permitida acrescenta 1 \nponto em sua carteira.\n`
    let text3 = `Você está com  ${floor}, pontos na sua CNH\n`
    let text4 = `\nSua carteira está suspensa!!!`
    if (pontos >= maximoDePontos) {
        return `${text0}${text1}${text0}${text2}${text3} ${text4}`
    } else {
        return `${text0}${text1}${text0}${text2} \n${text3}`
    }
}