<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ProductList;
use Illuminate\Http\Request;

class ProductListController extends Controller
{
    public function ProductListByRemark(Request $req)
    {
        $remark = $req->remark;
        $productlist = ProductList::where('remark', $remark)->get();
        return $productlist;
    }

    public function ProductListByCategory(Request $req)
    {
        $category = $req->category;
        $productlist = ProductList::where('category', $category)->get();
        return $productlist;
    }

    public function ProductListBySupCategory(Request $req)
    {
        $category = $req->category;
        $sub_category = $req->sub_category;
        $productlist = ProductList::where('category', $category)->where('sub_category', $sub_category)->get();
        return $productlist;
    }

    public function ProductBySearch(Request $req){
        $key = $req->key;
        $productlist = ProductList::where('title', 'LIKE', "%{$key}%")->get();
        return $productlist;
    }
    
}
