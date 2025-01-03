"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = () => {
    // Sau khi login thành công, điều hướng đến trang Mainpage
    router.push("/main-page");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-teal-500 text-3xl font-bold mb-6">NUTRIFIT</h1>
      <h2 className="text-2xl font-medium mb-4 text-black">Đăng nhập</h2>
      <div className="flex flex-col items-center w-72">
        <input
          type="email"
          placeholder="Email"
          className="border p-3 mb-3 w-full rounded-md text-black"
        />
        <div className="relative w-full">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Mật khẩu"
            className="border p-3 w-full rounded-md text-black"
          />
          <button
            type="button"
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
            onClick={handlePasswordToggle}
          >
            {passwordVisible ? "🙈" : "👁️"}
          </button>
        </div>
        <button
          onClick={handleLogin}
          className="bg-teal-500 text-white w-full py-2 rounded-md mt-4"
        >
          Đăng nhập
        </button>
      </div>
      <div className="flex items-center justify-between mt-6 w-72">
        <div className="border-t border-black flex-1"></div>
        <span className="mx-3 text-gray-500">Or</span>
        <div className="border-t border-black flex-1"></div>
      </div>
      <div className="flex justify-center mt-4 space-x-12">
        <button>
          <img src="/google.png" alt="Google" className="h-8" />
        </button>
        <button>
          <img src="/facebook.png" alt="Facebook" className="h-8" />
        </button>
      </div>
      <div className="mt-6 text-gray-500">
        Bạn chưa có tài khoản?{" "}
        <a href="/register" className="text-orange-500">
          Đăng ký
        </a>
      </div>
    </div>
  );
}
