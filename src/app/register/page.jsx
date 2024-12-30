"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleRegister = () => {
    alert("Đăng ký tài khoản!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-teal-500 text-3xl font-bold mb-6">NUTRIFIT</h1>
      <h2 className="text-2xl font-medium mb-4 text-black">Đăng ký</h2>
      <div className="flex flex-col items-center w-72">
        <input
          type="name"
          placeholder="Họ tên"
          className="border p-3 mb-3 w-full rounded-md text-black"
        />
        <input
          type="phone"
          placeholder="Số điện thoại"
          className="border p-3 mb-3 w-full rounded-md text-black"
        />
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
          onClick={handleRegister}
          className="bg-teal-500 text-white w-full py-2 rounded-md mt-4"
        >
          Đăng ký
        </button>
        <div className="mt-6 text-gray-500">
          Bạn đã có tài khoản?{" "}
          <a href="/login" className="text-orange-500">
            Đăng nhập
          </a>
        </div>
      </div>
    </div>
  );
}
