<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/* Route::get('/cuentas', 'App\Http\Controllers\CuentaController@index'); 
Route::post('/cuentas', 'App\Http\Controllers\CuentaController@store'); 
Route::put('/cuentas/{id}', 'App\Http\Controllers\CuentaController@update'); 
Route::delete('/cuentas/{id}', 'App\Http\Controllers\CuentaController@destroy'); */