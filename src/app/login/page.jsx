"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    // Sau khi login thành công, điều hướng đến trang Mainpage
    router.push("/main-page");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Login Page</h1>
      <input
        type="text"
        placeholder="Username"
        className="border p-2 mb-2 w-64"
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 mb-4 w-64"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
}
