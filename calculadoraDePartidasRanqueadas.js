//Variáveis 
let nivelHeroi
let saldoVitorias 


//Função que calcula o saldo de vitórias e retorta o saldo de partidas rankeadas
function partidasRankeadas (quantidadeVitorias, quantidadeDerrotas ) {
    saldoVitorias = quantidadeVitorias - quantidadeDerrotas
    return saldoVitorias
}

//Chamada da função = ( Essa função deve ser chamada antes da classificação do jogador) = 
partidasRankeadas(70,5)


//Loop que verifica a classicação do jogador de acordo com o saldo de vitórias retornado pela função partidasRankeadas

if (saldoVitorias <10) {
    nivelHeroi = "Ferro"

} else if (saldoVitorias >10 && saldoVitorias <= 20) {
    nivelHeroi = "Bronze"

} else if (saldoVitorias > 20 && saldoVitorias <= 50 ) {
    nivelHeroi = "Prata"

} else if (saldoVitorias > 50 && saldoVitorias <= 80 ){
    nivelHeroi = "Ouro"

}else if (saldoVitorias > 80 && saldoVitorias <= 90 ) {
    nivelHeroi = "Diamante"

} else if (saldoVitorias > 90 && saldoVitorias <= 100 ) {
    nivelHeroi = "Lendário"

} else {
    nivelHeroi = "Imortal"
}

//Saida final 
console.log (`O Herói tem de saldo ${saldoVitorias} e está no nível ${nivelHeroi}.`)