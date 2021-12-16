<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Request as RC;
use Illuminate\Support\Facades\Crypt;

class UserController extends Controller{

    public $data=null, $message=null, $items=null;

    /**
    *Get all users
    */
    public function index() {
        $all_users = User::all();
        return RC::response(null, null, null, $all_users);
    }

    /**
    *Get user by id
    */
    public function get_by_id($id) {

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
    public function create(Request $request) {

        $this->validate($request, [
            'email' => 'required|email|unique:users',
            'password' => 'required'
        ]);

        $new_user = new User;
        $new_user->email = $request->input('email');
        $new_user->password = Crypt::encrypt($request->input('password'));
        $new_user->save();
        $this->status_code = 201;
      
        return RC::response($this->status_code, $this->message, null, null);
    }
    
    /**
    *Update user
    */
    public function update($id, Request $request) {

        $this->validate($request, [
            'email' => 'required|email|unique:users',
            'password' => 'required'
        ]);

        $user = User::find($id);
        if ($user) {
            $user->email = $request->input('email');
            $user->password = Crypt::encrypt($request->input('password'));
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