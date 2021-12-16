<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller{

    /**
    *Get all users
    */
    public function index() {
        $all_users = User::all();
        $all_users = ["items" => $all_users];

        return response()->json($all_users);
    }

    /**
    *Get user by id
    */
    public function get_user_by_id($id) {

        $user = User::find($id);
        if ($user) {
            $status_code = 200;
            $response = ["status_code" => $status_code, $user];
        }else {
            $message = "user_not_found";
            $status_code = 404;
            $response = ["status_code" => $status_code, "message" => $message];
        }
        return response()->json($response, $status_code);

    }
    
}