# Uso de módulos em POO

Vamos usar POO em arquivos js diferentes com a comunicação modular entre eles. Para isso faremos algumas configurações:

## Tarefas
- [Iniciar o pacote do projeto](#inicie-o-pacote)
- [Configurar o arquivo package.json](#configurar-o-packagejson)
- [No arquivo que contém a classe fazer exportação dela](#exportação-da-classe)
- [No arquivo principal fazer a importação do módulo que contém a classe](#importação-da-classe)
- [No arquivo html ao inserir a tag script usar o type module.](#usar-o-módulo-no-html)


## Inicie o pacote
Para iniciar o pacote em seu projeto, faça o seguinte comando:

```bash
    npm init -y
```

## Configurar o package.json
Agora abra o arquivo `package.json` e faça a seguinte alteração:

```json
    {
        "conteúdo anterior..."
        "type": "module"        
    }
``` 

Isso vai permitir o uso de módulos em seu projeto bem como sua exportação e importação.

Com o comando abaixo é possivel salvar a atualição feita no seu package.json:

```bash
    npm update
```


## Exportação da classe
Agora crie um arquivo `javascript` que vai ter a exportação da classe (pode ser, por exemplo, "`Pessoa.js`") e faça o seguinte comando:

```js
    export class Pessoa {
        constructor(nome) {
            "seu código aqui..."
        }
    }
```

Sua classe Pessoa já foi exportada e está pronta para ser importada em outro arquivo.

## Importação da classe
Agora em outro arquivo (que pode ser "`script.js`"), faça a importação da sua classe:

```js
    import { Pessoa } from "./Pessoa.js";

    const pessoa1 = new Pessoa("nomeDaPessoa");
```

Aqui foi feita a importação do módulo "**Pessoa**" que está no caminho especificado, que neste caso, fica no mesmo diretório do arquivo atual. E embaixo foi feita a instanciação.

## Usar o módulo no HTML
Com isso feito, agora é preciso **adicionar o módulo** no tipo do arquivo js no nosso arquivo html:

```HTML
    <script type="module" src="assets/js/script.js">
```

Está pronto. Agora todos os arquivos já estão configurados para poder fazer a integração entre os módulos.

[Voltar ao início](#uso-de-módulos-em-poo)