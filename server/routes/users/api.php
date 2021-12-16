<?php

/** @var \Laravel\Lumen\Routing\Router $router */

$router->get('/api/v1/users', 'UserController@index');

$router->get('/api/v1/users/{id}', 'UserController@get_by_id');

$router->post('/api/v1/users/', 'UserController@create');