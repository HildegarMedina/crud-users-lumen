<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Request as RC;
use Illuminate\Http\JsonResponse;


interface UserControllerI {
    public function index(): JsonResponse;
    public function get_by_id($id): JsonResponse;
    public function create(Request $request): JsonResponse;
    public function update($id, Request $request): JsonResponse;
}

class UserController extends Controller implements UserControllerI {

    public $data=null, $message=null, $items=null;

    /**
    *Get all users
    */
    public function index(): JsonResponse {
        $all_users = User::all();
        return RC::response(null, null, null, $all_users);
    }

    /**
    *Get user by id
    */
    public function get_by_id($id): JsonResponse {

        $user = User::find($id);
        if ($user) {
            $this->data = $user;
            $this->status_code = 200;
        }else {
            $this->message = "user_not_found";
            $this->status_code = 404;
        }

        return RC::response($this->status_code, $this->message, $this->data, null);

    }

    /**
    *Create user
    */
    public function create(Request $request): JsonResponse {

        $this->validate($request, [
            'email' => 'required|email|unique:users',
            'password' => 'required'
        ]);

        $new_user = new User;
        $new_user->email = $request->input('email');
        $new_user->password = $request->input('password');
        $new_user->save();
        $this->status_code = 201;
      
        return RC::response($this->status_code, $this->message, null, null);
    }
    
    /**
    *Update user
    */
    public function update($id, Request $request): JsonResponse {

        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = User::find($id);
        if ($user) {
            $user->email = $request->input('email');
            $user->password =$request->input('password');
            $user->save();
            $this->status_code = 200;
        }else {
            $this->status_code = 404;
            $this->message = 'user_not_found';
        }

        return RC::response($this->status_code, $this->message, null, null);
    }

    /**
    *Delete user
    */
    public function delete($id) {
        $user = User::find($id);
        if ($user) {
            $user->delete();
            $this->status_code = 204;
        }else {
            $this->status_code = 404;
            $this->message = 'user_not_found';
        }

        return RC::response($this->status_code, $this->message, null, null);
    }
}