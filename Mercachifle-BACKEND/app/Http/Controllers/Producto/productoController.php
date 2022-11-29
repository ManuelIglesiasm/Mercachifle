<?php

namespace App\Http\Controllers\Producto;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Productos;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;

class productoController extends Controller
{
    public function productCreate(Request $request){
        $datacreate = new Productos();
        $datacreate->nombre = $request->nombre;
        $datacreate->descripcion = $request->descripcion;
        $datacreate->stock = $request->stock;
        $datacreate->vendedor = $request->vendedor;
        $datacreate->save();
        return response()-> json([
            "status" => 1,
            "mesagge" => "producto creado correctamente"
        ]);
    }
    public function productUpdate($id,Request $request){
        if(Productos::where("id",$id)->exists()){
            $data = Productos::find($id);
        $data->nombre = $request->nombre;
        $data->descripcion = $request->descripcion;
        $data->stock = $request->stock;
        $datacreate->vendedor = $request->vendedor;
        $data->save();
        return response()-> json([
            "status" => 1,
            "mesagge" => "producto actualizado correctamente"
        ]);
    }
    }
    public function productDelete($id){
        if(Productos::where("id",$id)->exists()){
            $datadelete = Productos::find($id);
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
    public function productGetAll(){
        $dataresponse = Productos::get();
        return response()-> json($dataresponse);
    }

    public function productGet($id){
        $dataresponse = Productos::find($id);
        return response()-> json($dataresponse);
    }
}
