<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/imageDisplay', function () {
    return view('publicImageTest');
});
