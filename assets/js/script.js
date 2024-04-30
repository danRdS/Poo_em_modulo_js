import { Pessoa } from "./Pessoa.js";

const moshe = new Pessoa('Moshé', 82);
console.log(moshe.apresentar());

document.getElementById('pessoa').innerText = moshe.apresentar();