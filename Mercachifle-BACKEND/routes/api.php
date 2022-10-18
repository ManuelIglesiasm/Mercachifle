<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\http\Controllers\Api\ApiController;
use App\http\Controllers\Producto\productoController;
use App\http\Controllers\Usuario\usuarioController;
use App\Http\Controllers\API\RegisterController;
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

Route::post("product_create", [productoController::class, "productCreate"]);
Route::get("product_get_all", [productoController::class, "productGetAll"]);
Route::get("product_get/{id}", [productoController::class, "productGet"]);
//Route::delete("product_delete", [productoController::class, "productDelete"]); 
Route::delete('product_delete/{id}', [productoController::class, "productDelete"]);
Route::put('products/{id}', [productoController::class, "productUpdate"]);


Route::post("usuario_create", [usuarioController::class, "usuarioCreate"]);
Route::get("usuario_get", [usuarioController::class, "usuarioGet"]);
Route::delete("usuario_delete", [usuarioController::class, "usuarioDelete"]); 


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(RegisterController::class)->group(function(){
    Route::post('register', 'register');
    Route::post('login', 'login');
});
     
Route::middleware('auth:sanctum')->group( function () {
    Route::resource('products', ProductController::class);
});
