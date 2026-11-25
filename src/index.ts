type TipoHeroi = "Guerreiro" | "Mago" | "Monge" | "Ninja"

type Ataque = "magia" | "espada" | "marciais" | "shuriken"

class Heroi {
    nome: string
    idade: number
    tipo: TipoHeroi

    constructor(nome: string, idade: number, tipo: TipoHeroi){
        this.nome = nome;
        this.idade = idade,
        this.tipo = tipo
    }

    atacar(){
        let ataque: Ataque | undefined;

        if(this.tipo === "Mago"){
            ataque = "magia"
        } else if(this.tipo === "Guerreiro"){
            ataque = "espada"
        } else if(this.tipo === "Monge"){
            ataque = "marciais"
        } else if(this.tipo === "Ninja"){
            ataque = "shuriken"
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

const heroi = new Heroi("Clayton", 55, "Guerreiro");

heroi.atacar();