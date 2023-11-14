<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\HomeSliderController;
use App\Http\Controllers\Admin\NotificationController;
use App\Http\Controllers\Admin\ProductDetailsController;
use App\Http\Controllers\Admin\ProductListController;
use App\Http\Controllers\Admin\VisitorController;
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
// Visitor
Route::get("/getvisitor", [VisitorController::class, 'GetVisitorDetails']);

//Category SubCategory
Route::get('/allcategory', [CategoryController::class, 'AllCategory']);

//ProductList
Route::get('/allproductlistbyremark/{remark}', [ProductListController::class, 'ProductListByRemark']);
Route::get('/allproductlistbycategory/{category}', [ProductListController::class, 'ProductListByCategory']);
Route::get('/allproductlistbysubcategory/{category}/{sub_category}', [ProductListController::class, 'ProductListBySupCategory']);

//Product Deatail
Route::get('/productdetail/{id}', [ProductDetailsController::class,'ProductDetail']);


//Slider Route
Route::get('/allslider', [HomeSliderController::class,'AllSlider']);


//Notification
Route::get('/notification', [NotificationController::class,'AllNotification']);

//Search Route
Route::get('/search/{key}', [ProductListController::class,'ProductBySearch']);

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
