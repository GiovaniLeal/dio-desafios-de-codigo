//Classes do herói

class DadosDoHeroi{
    constructor(nomeHeroi, idadeHeroi, tipoHeroi){
        this.nomeHeroi = nomeHeroi
        this.idadeHeroi = idadeHeroi
        this.tipoHeroi = tipoHeroi
    }

    tipoDeAtaque(){
        //Retorna o tipo de ataque dependendo do tipo do herói
        const ataques = {
            mago: "magia",
            guerreiro: "espada",
            monje: "artes marciais",
            ninja: "shuriken"
        }
        //Retorno do tipo de ataque
        return ataques[this.tipoHeroi] || "ataque desconhecido"
    }

    escrever() {
        console.log(`o ${this.tipoHeroi} ${this.nomeHeroi} atacou usando ${this.tipoDeAtaque()}`)
    }

}


//instanciando a classe / criando o objeto heroi
let heroi = new DadosDoHeroi ("Capivara",20,"monje")

//saida
heroi.escrever()



