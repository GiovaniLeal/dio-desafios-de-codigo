// variáveis
let nomeHeroi = "Giovani";
let nivelHeroi = 10001;

//Classificador de nível 

if (nivelHeroi <= 1000){
    console.log ("O Herói de nome " + nomeHeroi + " está no nível de Ferro")

} else if (nivelHeroi > 1000 && nivelHeroi<= 2000){
    console.log ("O Herói de nome " + nomeHeroi + " está no nível de Bronze")

} else if (nivelHeroi > 2000 && nivelHeroi <= 5000){
    console.log ("O Herói de nome " + nomeHeroi + " está no nível de Prata")

} else if (nivelHeroi > 5000 && nivelHeroi <= 7000){
    console.log ("O Herói de nome " + nomeHeroi + " está no nível de Ouro")

} else if (nivelHeroi > 7000 && nivelHeroi <= 8000){
    console.log ("O Herói de nome " + nomeHeroi + " está no nível de Platina")

} else if (nivelHeroi > 8000 && nivelHeroi <= 9000){
    console.log ("O Herói de nome " + nomeHeroi + " está no nível de Ascendente")

} else if (nivelHeroi > 9000 && nivelHeroi <= 10000){
    console.log ("O Herói de nome " + nomeHeroi + " está no nível de Imortal")

} else if (nivelHeroi >= 10001){
    console.log ("O Herói de nome " + nomeHeroi + " está no nível de Radiante")

}