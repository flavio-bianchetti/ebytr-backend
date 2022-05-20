# Ebytr - Backend
:rotating_light: Você pode encontrar a versão deste documento em português _[aqui](#versão-em-português---ebytr---backend)_.

This repository contains the project "_Ebytr - Backend_", technical challenge - Career Blitz - Trybe. This project consists of a to-do list application, made in React, NodeJS, MongoDB and layered architecture.
The "_Ebytr - Frontend_" can be viewed _[here](https://github.com/flavio-bianchetti/ebytr-frontend)_.


### Functionalities:
- View the task list;
- This list must be sorted alphabetically, by creation date or by status;
- Insert a new task in the list;
- Remove a task from the list;
- Update a task from the list;
- The task must have an editable status: pending, in progress or ready;

### Author:

- _[Flávio Bianchetti](https://www.linkedin.com/in/flaviobianchetti/)_

---

### ### Technologies used in the construction of this application:

<section>
  <a href="https://docs.docker.com/" target="_blank">
    <img
      align="center"
      height="30"
      src="https://img.shields.io/badge/Docker-018bff?style=for-the-badge&logo=docker&logoColor=white"
      target="_blank"
    />
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
    <img
      align="center"
      height="30"
      src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
      target="_blank"
    />
  </a>
  <a href="https://www.typescriptlang.org/docs/" target="_blank">
    <img
      align="center"
      height="30"
      src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
      target="_blank"
    />
  </a>
  <a href="https://sequelize.org/" target="_blank">
    <img
      align="center"
      height="30"
      src="https://img.shields.io/badge/Sequelize-663399?style=for-the-badge&logo=sequelize&logoColor=white"
      target="_blank"
    />
  </a>
  <a href="https://www.mysql.com/" target="_blank">
    <img
      align="center"
      height="30"
      src="https://img.shields.io/badge/MySQL-02569B?style=for-the-badge&logo=mysql&logoColor=white"
      target="_blank"
    />
  </a>
</section>

---

### Installation

1. Open the terminal, in a directory of your choice, and clone the project:
```bash
  git@github.com:flavio-bianchetti/ebytr-backend.git
```

2. Enter the project directory:
```bash
  cd ebytr-backend
```
3. Install dependencies:
```bash
  npm install
```
4. The API uses the MySQL database to store the information. If you do not have MySQL installed, consult the documentation available _[here](https://dev.mysql.com/doc/)_ or change the file "_src/config/database.ts_" for your database. preference.

5. The application makes use of the _[Sequelize](https://sequelize.org/)_ dependency that allows the creation of the database automatically during startup and other features.

6. Configure the _[dotenv](https://www.npmjs.com/package/dotenv)_ file with your information:
```javascript
  // example of padding:
  DB_HOSTNAME=localhost
  DB_USERNAME=root
  DB_PASSWORD=myBankPassword
  DB_DATABASE=ebytr_todolist
  DB_PORT=3306
  JWT_SECRET=mySuperPassword
  APP_PORT=3002
```
7. Launch the application:
```bash
  npm start
```

### Testing from the API:

1. For tests use _[Postman](https://www.postman.com/)_ or _[Insomnia](https://insomnia.rest/download)_, in the routes listed below.

### Available resources:
- **Create:**
  - **POST /create**
    - **request:** requires that the information for registering the new user be passed through the body, as shown in the example below.
    ```bash
    {
      "email": "email@email.com",
      "name" : "User",
      "password": "123456"
    }
    ```
    - **response:** on success returns an object similar to the one shown below.
    ```bash
    {
      "id": 2,
      "name": "User",
      "email": "email@email.com"
    }
    ```
- **Login:**
  - **POST /login**
    - **request:** requires the correct information to be passed through the body to access the application, as shown in the example below.
    ```bash
    {
      "email": "email@email.com",
      "name" : "User",
      "password": "123456"
    }
    ```
    - **response:** on success returns an object similar to the one shown below.
    *OBS:* For all the next requests it is necessary to inform the generated token.
    ```bash
    {
      "id": 2,
      "name": "User",
      "email": "email@email.com",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyLCJuYW1lIjoiVXN1w6FyaW8iLCJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSJ9LCJpYXQiOjE2NTMwNDg2MDIsImV4cCI6MTY1MzY1MzQwMn0.fgt0uKK3ERN-yNOw5fnucs0Qzu4Yl3pY5R9koJyiffc"
    }
    ```
- **TodoList:**
  - **POST /todolist**
    - **request:** requires that the information for registering the new user be passed through the body, as shown in the example below.
    ```bash
      {
        "userId": 2, // userid
        "description": "my task 1",
        "status": "inProgress" // Must contain the values ​​'inProgress', 'pending' or 'finished'
      }
    ```
    - **response:** on success returns an object similar to the one shown below.
    ```bash
      {
        "id": 4,
        "userId": 2,
        "description": "my task 1",
        "date": "Fri May 20 2022 09:23:27 GMT-0300 (Brasilia Standard Time)",
        "status": "inProgress"
      }
    ```
  - **GET /todolist**
    - **request:** requires that the desired user id be passed through the link, as shown in the example below.
    ```http
      http://localhost:3002/todolist/2
    ```
    - **response:** in case of success, returns an array with all the tasks registered by the informed user.
    ```bash
      [
        {
          "id": 4,
          "userId": 2,
          "description": "my task 1",
          "date": "Fri May 20 2022 09:23:27 GMT-0300 (Brasilia Standard Time)",
          "status": "inProgress"
        }
      ]
    ```
  - **PUT /todolist/task/:id**
    - **request:**
      - requires that the id of the task to be changed be passed through the link, as shown in the example below.
        ```http
          http://localhost:3002/todolist/task/4
        ```
      - it also needs that the information to change the task be passed through the body.
        ```bash
          {
            "description": "my changed task 1",
            "status": "pending"
          }
        ```
    - **response:** on success returns an object similar to the one shown below.
    ```bash
      {
        "id": 4,
        "userId": 2,
        "description": "my changed task 1",
        "date": "Fri May 20 2022 09:23:27 GMT-0300 (Brasilia Standard Time)",
        "status": "pending"
      }
    ```
  - **DELETE /todolist/task/:id**
    - **request:** requires the id of the task to be deleted to be passed through the link, as shown in the example below.
        ```http
          http://localhost:3002/todolist/task/4
        ```
    - **response:** in case of success, a response with status 200 is returned, with the message body empty.

### Problems found:
- Errors occurred when deploying the application on *Heroku* are preventing the correct remote operation of the API.

### Current stages of development:
   - The database is already in *Supabase* and is being tested.
   - There were problems installing the application on *Heroku* and their fixes are in progress.
   - Local tests are being carried out in the application using *Docker*.
   - *Tests* will be implemented soon.
---

by _[Flávio Bianchetti - 2022](https://github.com/flavio-bianchetti)_.

---
---

# Versão em português - Ebytr - Backend

Este repositório contém o projeto "_Ebytr - Backend_", desafio técnico - Blitz de Carreira - Trybe. Este projeto consiste em uma aplicação de lista de tarefas, feita em React, NodeJS, MongoDB e arquitetura em camadas.
O "_Ebytr - Frontend_" pode ser visualizado _[aqui](https://github.com/flavio-bianchetti/ebytr-frontend)_.


### Funcionalidades: 
- Visualizar a lista de tarefas;
- Esta lista deve ser ordenável por ordem alfabética, data de criação ou por status;
- Inserir uma nova tarefa na lista;
- Remover uma tarefa da lista;
- Atualizar uma tarefa da lista;
- A tarefa deve possuir um status editável: pendente, em andamento ou pronto;

### Autor:

- _[Flávio Bianchetti](https://www.linkedin.com/in/flaviobianchetti/)_

---
### Tecnologias utilizadas na construção desta aplicação:

<section>
  <a href="https://docs.docker.com/" target="_blank">
    <img
      align="center"
      height="30"
      src="https://img.shields.io/badge/Docker-018bff?style=for-the-badge&logo=docker&logoColor=white"
      target="_blank"
    />
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
    <img
      align="center"
      height="30"
      src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
      target="_blank"
    />
  </a>
  <a href="https://www.typescriptlang.org/docs/" target="_blank">
    <img
      align="center"
      height="30"
      src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
      target="_blank"
    />
  </a>
  <a href="https://sequelize.org/" target="_blank">
    <img
      align="center"
      height="30"
      src="https://img.shields.io/badge/Sequelize-663399?style=for-the-badge&logo=sequelize&logoColor=white"
      target="_blank"
    />
  </a>
  <a href="https://www.mysql.com/" target="_blank">
    <img
      align="center"
      height="30"
      src="https://img.shields.io/badge/MySQL-02569B?style=for-the-badge&logo=mysql&logoColor=white"
      target="_blank"
    />
  </a>
</section>

---

### Instalação

1. Abra o terminal, em um diretório de sua preferência, e faça o clone do projeto:
```bash
  git@github.com:flavio-bianchetti/ebytr-backend.git
```

2. Entre no diretório do projeto:
```bash
  cd ebytr-backend
```
3. Instale as dependências:
```bash
  npm install
```
4. A API utiliza o banco de dados MySQL para armazenar as informações. Caso não tenha o MySQL instalado, consulte a documentação disponível _[aqui](https://dev.mysql.com/doc/)_ ou altere o arquivo "_src/config/database.ts_" para o banco de dados de sua preferência.

5. A aplicação faz utilização da dependência _[Sequelize](https://sequelize.org/)_ que permite a crição do banco de dados automaticamente durante a inicialização e outras funcionalidades.

6. Configure o arquivo _[dotenv](https://www.npmjs.com/package/dotenv)_ com suas informações:
```javascript
  // exemplo de preenchimento:
  DB_HOSTNAME=localhost
  DB_USERNAME=root
  DB_PASSWORD=minhaSenhaDoBanco
  DB_DATABASE=ebytr_todolist
  DB_PORT=3306
  JWT_SECRET=minhaSuperSenha
  APP_PORT=3002
```
7. Inicie a aplicação:
```bash
  npm start 
```

### Testando da API:

1. Para os testes utilize o _[Postman](https://www.postman.com/)_ ou _[Insomnia](https://insomnia.rest/download)_, nas rotas abaixo discriminadas.

### Recursos disponíveis:
- **Create:**
  - **POST /create** 
    - **request:** necessita de que sejam passadas através do body as informações para cadastro do novo usuário, conforme o exemplo abaixo.
    ```bash
    {
      "email": "email@email.com",
      "name" : "Usuário",
      "password": "123456"
    }
    ```
    - **response:** em caso de sucesso retorna um objeto similar ao exibido abaixo.
    ```bash
    {
      "id": 2,
      "name": "Usuário",
      "email": "email@email.com"
    }
    ```
- **Login:**
  - **POST /login** 
    - **request:** necessita de que sejam passadas através do body as informações corretas para o acesso à aplicação, conforme o exemplo abaixo.
    ```bash
    {
      "email": "email@email.com",
      "name" : "Usuário",
      "password": "123456"
    }
    ```
    - **response:** em caso de sucesso retorna um objeto similar ao exibido abaixo.
    *OBS:* Para todas as próximas requisições é necessário informar o token gerado.
    ```bash
    {
      "id": 2,
      "name": "Usuário",
      "email": "email@email.com",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyLCJuYW1lIjoiVXN1w6FyaW8iLCJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSJ9LCJpYXQiOjE2NTMwNDg2MDIsImV4cCI6MTY1MzY1MzQwMn0.fgt0uKK3ERN-yNOw5fnucs0Qzu4Yl3pY5R9koJyiffc"
    }
    ```
- **TodoList:**
  - **POST /todolist**
    - **request:** necessita de que sejam passadas através do body as informações para cadastro do novo usuário, conforme o exemplo abaixo.
    ```bash
      {
        "userId": 2, // id do usuário
        "description": "minha tarefa 1",
        "status": "inProgress" // Deve conter os valores 'inProgress', 'pending' ou 'finished'
      }
    ```
    - **response:** em caso de sucesso retorna um objeto similar ao exibido abaixo.
    ```bash
      {
        "id": 4,
        "userId": 2,
        "description": "minha tarefa 1",
        "date": "Fri May 20 2022 09:23:27 GMT-0300 (Horário Padrão de Brasília)",
        "status": "inProgress"
      }
    ```
  - **GET /todolist**
    - **request:** necessita de que seja passado através do link o id do usuário desejado, conforme o exemplo abaixo.
    ```http
      http://localhost:3002/todolist/2
    ```
    - **response:** em caso de sucesso retorna um array com todas as tarefas cadastradas do usuário informado.
    ```bash
      [
        {
          "id": 4,
          "userId": 2,
          "description": "minha tarefa 1",
          "date": "Fri May 20 2022 09:23:27 GMT-0300 (Horário Padrão de Brasília)",
          "status": "inProgress"
        }
      ]
    ```
  - **PUT /todolist/task/:id**
    - **request:**
      - necessita de que seja passado através do link o id da tarefa a ser alterada, conforme o exemplo abaixo.
        ```http
          http://localhost:3002/todolist/task/4
        ```
      - necessita também de que sejam passadas através do body as informações para alteração da tarefa.
        ```bash
          {
            "description": "minha tarefa alterada 1",
            "status": "pending"
          }
        ```
    - **response:**  em caso de sucesso retorna um objeto similar ao exibido abaixo.
    ```bash
      {
        "id": 4,
        "userId": 2,
        "description": "minha tarefa alterada 1",
        "date": "Fri May 20 2022 09:23:27 GMT-0300 (Horário Padrão de Brasília)",
        "status": "pending"
      }
    ```
  - **DELETE /todolist/task/:id**
    - **request:** necessita de que seja passado através do link o id da tarefa a ser excluída, conforme o exemplo abaixo.
        ```http
          http://localhost:3002/todolist/task/4
        ```
    - **response:**  em caso de sucesso é retornada uma resposta com o status 200, com o corpo da mensagem vazio.

### Problemas encontrados:
- Erros ocorridos na implantação da aplicação no *Heroku* estão impedindo o correto funcionamento remoto da API.

### Etapas atuais do desenvolvimento:
  - O banco de dados já está no *Supabase* e encontra-se em testes.
  - Ocorreram problemas na instalação da aplicação no *Heroku* e suas correções estão em andamento.
  - Estão sendo feitos testes locais na aplicação utilizando o *Docker*.
  - Os *Testes* serão implementados em breve.

---

por _[Flávio Bianchetti - 2022](https://github.com/flavio-bianchetti)_.