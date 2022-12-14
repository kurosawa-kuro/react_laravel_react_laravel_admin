<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(RegisterRequest $request){
        $user = User::create([
            'first_name' => $request->input('first_name'),
            'last_name' => $request->input('last_name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
        ]);

//        dd($user);
//        print_r($user);

        Log::debug($user);
        return response($user,Response::HTTP_CREATED);
    }
    public function login(Request $request){
        if(!Auth::attempt($request->only('email','password'))){
            return \response([
                'error'=>'Invalid credintial'
            ],Response::HTTP_UNAUTHORIZED);
        }

        /** @var User user*/
        $user = Auth::user();
//        dd($user );

        $token = $user->createToken('token')->plainTextToken;
//        dd($token );

        return \response([
            'jwt'=>$token
        ]);
    }

    public function user(Request $request){
        return $request->user();
    }
}
