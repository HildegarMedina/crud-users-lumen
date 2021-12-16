<?php

/** @var \Laravel\Lumen\Routing\Router $router */

$router->get('/api/v1/users', 'UserController@index');

$router->get('/api/v1/users/{id}', 'UserController@get_user_by_id');