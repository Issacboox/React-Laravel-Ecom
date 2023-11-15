<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ProductReview;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function ReviewList(Request $req){
        $id = $req->id;
        $result = ProductReview::where('product_id',$id)->orderBy('id','desc')->limit(4)->get();
        return $result;
    }
}
