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
        if ($request->has(['email', 'password'])) {
            $user = User::firstWhere('email', $request->input('email'));
            if ($user) {
                $this->status_code = 409;
                $this->message = 'email_already_exists';
            }else {
                $new_user = new User;
                $new_user->email = $request->input('email');
                $new_user->password = Crypt::encrypt($request->input('password'));
                $new_user->save();
                $this->status_code = 201;
            }
        }else {
            $this->status_code = 400;
            if (!$request->has('email')) {
                $this->message = 'email_is_required';
            }else {
                $this->message = 'password_is_required';
            }
        }

        return RC::response($this->status_code, $this->message, null, null);
    }
    
}