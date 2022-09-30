<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Data;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;

class ApiController extends Controller
{
    public function dataCreate(Request $request){
        $datacreate = new Data();
        $datacreate->name = $request->name;
        $datacreate->type = $request->type;
        $datacreate->save();
        return response()-> json([
            "status" => 1,
            "mesagge" => "data-create succesfuly"
        ]);
    }
    public function dataDelete(Request $request){
        if(Data::where("id",$request->id)->exists()){
            $datadelete = Data::find($request->id);
            $datadelete -> delete();
            return response()-> json([
                "status" => 1,
                "mesagge" => "data-delete  succesfuly"
            ]);
        }else{

            return response()-> json([
                "status" => 1,
                "mesagge" => "data-not found succesfuly"
            ]);

        
    }
    }
    public function dataGet(){
        $dataresponse = Data::get();
        return response()-> json([
            "status" => 1,
            "mesagge" => "data-get  succesfuly",
            "data" => $dataresponse
        ]);
    }
}
