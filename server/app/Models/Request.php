<?php

namespace App\Models;

class Request {
    public static function response($status_code=null, $message=null, $data=null, $items=null) {
        if ($status_code == null) {$status_code = '200';}

        $response = [];
        if ($status_code) {
            $response["status_code"] = $status_code;
        }
        if ($message) {
            $response["message"] = $message;
        }
        if ($data) {
            $response["data"] = $data;
        }
        if ($items) {
            $response["items"] = $items;
        }

        return response()->json($response, $status_code);
    }
}
