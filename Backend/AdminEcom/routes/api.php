<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\HomeSliderController;
use App\Http\Controllers\Admin\NotificationController;
use App\Http\Controllers\Admin\ProductDetailsController;
use App\Http\Controllers\Admin\ProductListController;
use App\Http\Controllers\Admin\ReviewController;
use App\Http\Controllers\Admin\VisitorController;
use App\Http\Controllers\User\AuthController;
use App\Http\Controllers\User\ForgetController;
use App\Http\Controllers\User\ResetController;
use App\Http\Controllers\User\UserController;
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

//Smilar Route
Route::get('/similar/{category}', [ProductDetailsController::class,'SimilarProduct']);

// Review Product 
Route::get('/reviewlist/{id}', [ReviewController::class,'ReviewList']);

// Clients User Router For Login

//Login API
Route::post('/login', [AuthController::class,'Login']);
// Register API
Route::post('/register', [AuthController::class,'Register']);
//Forget Password API | Dont Forget to send mail Fix it's later
Route::post('/forgetpassword', [ForgetController::class,'ForgetPassword']);
//Reset Pass
Route::post('/reset', [ResetController::class,'ResetPassword']);
// User
Route::get('/user', [UserController::class,'User'])->middleware('auth:api');
//End For user Login

