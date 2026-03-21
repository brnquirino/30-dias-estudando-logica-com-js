class Aluno {
    constructor(nome){
        this.nome = nome;
        this.notas = []
    }

    getNota(){
        console.log(`Notas do aluno: ${this.notas}`);
    };

    setNota(nota){
        this.notas.push(nota);
    };

    calcularMedia(){
        let soma = 0;

        for (let nota of this.notas){
            soma += nota;
        };
        return soma / this.notas.length;
    };

    verificarAprovacao(){
        const media = this.calcularMedia();

        if (media > 6){
            return "Aprovado";
        } else {
            return "Reprovado"
        }
    }

};


const aluno1 = new Aluno ("Bruno");

aluno1.setNota(7);
aluno1.setNota(9);
aluno1.setNota(7);

console.log(aluno1.calcularMedia());
console.log(aluno1.verificarAprovacao());
