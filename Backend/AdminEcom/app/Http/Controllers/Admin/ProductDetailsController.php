<?php

namespace App\Http\Controllers\Admin;

use App\Models\ProductDeatails;
use App\Http\Controllers\Controller;
use App\Models\ProductList;
use Illuminate\Http\Request;

class ProductDetailsController extends Controller
{
    public function ProductDetail(Request $req){
        $id = $req->id;
        $product_details = ProductDeatails::where("product_id",$id)->get();
        $product_list = ProductList::where("id",$id)->get();

        $item = [
            "product_detail"=> $product_details,
            "product_list"=> $product_list,
        ];

        return $item;
    }
    public function SimilarProduct(Request $req){
        $category = $req->category;
        $productlist = ProductList::where("category",$category)->orderBy('id','desc')->limit(6)->get();
        return $productlist;
    }
}
