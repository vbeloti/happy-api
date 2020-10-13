## Happy API (Node.js && Typescript && TypeORM)

### 💻 Happy API

<div align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="Happy" src="https://github.com/vbeloti/happy-api/blob/master/.github/images/happy-1.jpg?raw=true" />
</div>

## 🖥 Recursos

| Recurso                    | Descrição                                                             |
|:--------------             |:----------------------------------------------------------------------|
| `GET /orphanages`          | Retorna uma lista de orfanatos                                        |
| `GET /orphanages/:id`      | Retorna um orfanato                                                   |
| `POST /orphanages`         | Cria um orfanato                                                      |

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js][nodejs]
- [TypeORM][typeorm]
- [TypeScript][typescript]
- [SQLite][sqlite]

### Pré-requisitos

1º Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js][nodejs].

### 🧭 Rodando a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/vbeloti/discord-web

# Acesse a pasta do projeto
$ cd discord-web

# Instale as dependências
$ yarn ou npm install

# Rode as migrations
$ yarn migration:run ou npm run migration:run

# Execute a aplicação em modo de desenvolvimento
$ yarn dev ou npm run dev

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```

## 📝 Licença

Este projeto esta sobe a licença MIT.

Feito com ❤️ por Vinicius Beloti 👋🏽 [Entre em contato!](https://www.linkedin.com/in/vinicius-beloti/)

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[typeorm]: https://typeorm.io/
[sqlite]: https://www.sqlite.org/
