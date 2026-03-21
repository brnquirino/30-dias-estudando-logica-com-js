class Personagem {
    constructor(nome, vida){
        if (this.constructor === Personagem){
            throw new Error("Classe abstrata não pode ser instanciada")
        }
    this.nome = nome;
    this.vida = vida;
    Personagem.totalPersonagens++;
    }

    atacar(){
        throw new Error("Metodo abstrato deve ser implementado");
    }
}


Personagem.totalPersonagens = 0;


class Guerreiro extends Personagem {
    atacar(){
        console.log(`${this.nome} atacou com espada ⚔️`);
    }
}


class Mago extends Personagem {
    atacar(){
        console.log(`${this.nome} lançou magia 🔮`)
    }
}


const g1 = new Guerreiro("Zoro", 100);
const m1 = new Mago ("Merlin", 80);

g1.atacar();
m1.atacar();

Personagem.prototype.receberDano = function(dano){
    this.vida -= dano;
    console.log(`${this.nome} recebeu ${dano} de dano. Vida: ${this.vida}`)
}

g1.receberDano(20);
m1.receberDano(10);


Personagem.mostrarTotal = function(){
    console.log(`Total de personagens: ${Personagem.totalPersonagens}`)
}

Personagem.mostrarTotal();