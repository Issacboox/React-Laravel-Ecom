<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\HomeSlider;
use Illuminate\Http\Request;

class HomeSliderController extends Controller
{
    public function AllSlider()
    {
        $slider = HomeSlider::all();
        return $slider;
    }
}
