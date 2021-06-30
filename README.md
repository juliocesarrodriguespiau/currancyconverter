<h1 align="center">Api Currancy Converter</h1>

## 📝 **Sobre**
Exemplo de Api de Conversão direta e indireta de moedas, utilizando uma API [ExhangeRate-API](https://www.exchangerate-api.com/docs/overview) como fonte de atualizada de contação e taxa de conversão.

## 🔨 **Tecnologias Utilizadas**

- [Javascript](https://www.javascript.com/)
- [NodeJS](https://nodejs.org/en/)

## 📚 **Requisitos para o ambiente**
Para podermos começar, iremos precisar instalar em sua máquina as seguintes ferramentas:

Um bom editor de códigos como [VSCode](https://code.visualstudio.com/) para abrir o projeto e ter acesso ao código.

Uma ferramenta para executar os testes e requisições da API como o [Insomnia](https://insomnia.rest/download). 

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Axios](https://www.npmjs.com/package/axios)
- [Cors](https://www.npmjs.com/package/cors)

### Instale as dependências, frameworks e bibliotecas
```sh
$ npm install
$ npm start
$ npm install express
$ npm install axios
$ npm install cors
```

## 🚀 **Começando - Radando o Backend**

### Clone o projeto do repositório com o comando abaixo
```sh
$ git clone https://github.com/juliocesarrodriguespiau/currancyconverter
```

### Execute o projeto
```sh
$ node src/index.js
```

## ⚙️ **Obtendo os resultados**

### Como executar as API Currancy Converter
```
• No [Insomnia](https://insomnia.rest/download) crie um método Get e insira a url (http://localhost:8001/convert/USD/BRL/1).

• Substitua o parâmetro `USD` pelo código que deseja usar como moeda base.

• Substitua o parâmetro `BRL` pelo código que deseja usar como moeda-alvo.

• Substitua o parâmetro `1` pela quantidade que deseja converter da moeda-alvo.

Os códigos de moeda (USD, BRL, ARS) seguem o padrão [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)

Através da API Currancy Converter exibimos a conversão direta e indireta das moedas passadas pelos parâmetros da request:

Exemplo Conversão Direta:
url: http://localhost:8001/convert/USD/BRL/1

Resultado/Reposta:

{
  "result": 4.9406
}

Exemplo Conversão Indireta:
url: http://localhost:8001/convert/USD/BRL/10

Resultado/Resposta:

{
  "result": 49.406
}
```

Desenvolvido por [Júlio César Rodrigues Piau](https://github.com/juliocesarrodriguespiau/) ;D 🚀