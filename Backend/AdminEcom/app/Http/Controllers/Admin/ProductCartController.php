<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ProductCart;
use App\Models\ProductList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ProductCartController extends Controller
{
    public function AddToCart(Request $req)
{
    $email = $req->input('email');
    $quantity = $req->input('quantity');
    $product_code = $req->input('product_code');

    $productDetails = ProductList::where('product_code', $product_code)->get();

    if ($productDetails->isEmpty()) {
        // Product details not found
        return response()->json(['error' => 'Product details not found'], 404);
    }

    $price = $productDetails[0]['price'];
    $special_price = $productDetails[0]['special_price'];

    if ($special_price == "null") {
        $total_price = $price * $quantity;
        $unit_price = $price;
    } else {
        $total_price = $special_price * $quantity;
        $unit_price = $special_price;
    }

    $result = ProductCart::create([
        'email' => $email,
        'image' => $productDetails[0]['image'],
        'product_name' => $productDetails[0]['title'],
        'product_code' => $productDetails[0]['product_code'],
        'quantity' => $quantity,
        'unit_price' => $unit_price,
        'total_price' => $total_price,
    ]);

    return response()->json(1);
}

}
