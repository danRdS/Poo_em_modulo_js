import { Pessoa } from "./Pessoa.js";

const moshe = new Pessoa('Moshé', 82);

const texto = document.getElementById('pessoa');
texto.innerText = moshe.apresentar();

const btn = document.querySelector('.container button');

btn.onclick = () => {
    btn.classList.toggle('ativo');
    texto.classList.toggle('visivel');
};