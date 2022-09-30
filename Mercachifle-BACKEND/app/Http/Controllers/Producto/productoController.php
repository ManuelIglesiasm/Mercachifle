<?php

namespace App\Http\Controllers\Producto;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Productos;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;

class productoController extends Controller
{
    public function productoCreate(Request $request){
        $datacreate = new Productos();
        $datacreate->nombre = $request->nombre;
        $datacreate->descripcion = $request->descripcion;
        $datacreate->stock = $request->stock;
        $datacreate->save();
        return response()-> json([
            "status" => 1,
            "mesagge" => "producto creado correctamente"
        ]);
    }
    public function productoDelete(Request $request){
        if(Productos::where("id",$request->id)->exists()){
            $datadelete = Productos::find($request->id);
            $datadelete -> delete();
            return response()-> json([
                "status" => 1,
                "mesagge" => "producto eliminado correctamente"
            ]);
        }else{

            return response()-> json([
                "status" => 1,
                "mesagge" => "producto no encontrado"
            ]);

        
    }
    }
    public function productoGet(){
        $dataresponse = Productos::get();
        return response()-> json([
            "status" => 1,
            "mesagge" => "producto conseguido correctamente",
            "data" => $dataresponse
        ]);
    }
}
