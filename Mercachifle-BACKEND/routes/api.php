<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\http\Controllers\Api\ApiController;
use App\http\Controllers\Producto\productoController;
use App\http\Controllers\Usuario\usuarioController;
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


Route::post("data_create", [ApiController::class, "dataCreate"]);
Route::get("data_get", [ApiController::class, "dataGet"]);
Route::delete("data_delete", [ApiController::class, "dataDelete"]); 

Route::post("producto_create", [productoController::class, "productoCreate"]);
Route::get("producto_get", [productoController::class, "productoGet"]);
Route::delete("producto_delete", [productoController::class, "productoDelete"]); 

Route::post("usuario_create", [usuarioController::class, "usuarioCreate"]);
Route::get("usuario_get", [usuarioController::class, "usuarioGet"]);
Route::delete("usuario_delete", [usuarioController::class, "usuarioDelete"]); 


