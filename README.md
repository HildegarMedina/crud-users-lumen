# CRUD users lumen

![Badge](https://img.shields.io/static/v1?label=Backend&message=Lumen&color=rgb(87,95,207)&style=for-the-badge&logo=%3CLOGO%3E)

![Badge](https://img.shields.io/static/v1?label=Frontend&message=React%20&color=rgb(255,211,42)&style=for-the-badge&logo=%3CLOGO%3E)

Configurando o frontend:

> cd client 

> yarn install

> cd ../

Configurando o backend:

> cd server

> composer install

> cp .env.example .env

Configurar o .env, as variaveis DB_USERNAME e DB_PASSWORD pelo dados do seu banco de dados MySQL.

Logo disso, se tem que cria o banco de dados com o nome 'crud_users_lumen', para logo na pasta server, fazer a migração:

> php artisan migrate

> cd ../

Iniciar o servidor PHP (Lumen):

> ./run server

Iniciar o cliente JS (React):

> ./run client
