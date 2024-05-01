import { Pessoa } from "./Pessoa.js";

const moshe = new Pessoa('Moshé', 82);
const joquebede = new Pessoa('Joquebede', 42);
const ester = new Pessoa('Ester', 28);
const jodebergues = new Pessoa('Jodebergues', 56);
const rute = new Pessoa('Rute', 34);

const pessoas = [moshe, joquebede, ester, jodebergues, rute];

const lista = document.querySelector('.lista');
const btn_mostrar_mais = document.querySelector('.btn_mostrar_mais');

(function() {
    Object.values(pessoas).forEach(pos => {
        const li = document.createElement('li');
        li.textContent = pos.nome;

        const balaoExplicativo = document.createElement('div');
        balaoExplicativo.className = 'balaoExplicativo';
        balaoExplicativo.innerHTML = pos.apresentar();

        li.appendChild(balaoExplicativo);

        li.onclick = () => mostrar(balaoExplicativo);
        
        lista.appendChild(li);
    });
})();

function mostrar(balaoExplicativoClicado) {
    Object.values(lista.children).forEach(children => {
        const balaoExplicativo = children.firstElementChild;

        if(balaoExplicativo == balaoExplicativoClicado) {
            balaoExplicativo.classList.toggle('visivel');
            const balaoExplicativoDimensao = children.getBoundingClientRect();
            const altura = balaoExplicativoDimensao.top - lista.getBoundingClientRect().top;
            balaoExplicativo.style.top = altura + 'px';
        } else {
            balaoExplicativo.classList.remove('visivel');
        }
    })
}

btn_mostrar_mais.onclick = () => {
    btn_mostrar_mais.classList.toggle('ativo');
    lista.classList.toggle('ampliada');
    mostrar();
}