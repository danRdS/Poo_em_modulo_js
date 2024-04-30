export class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}