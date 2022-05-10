<?php
namespace app\controller;

use app\BaseController;

class Admin extends BaseController
{
    public function home() {
        return view('index/index');
    }

    public function login()
    {
        return json([
            'code'  =>  200,
            'msg'   =>  '登录成功'
        ]);
    }

}
