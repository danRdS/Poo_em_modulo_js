export class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `${this.nome} tem ${this.idade} anos.`;
    }
}