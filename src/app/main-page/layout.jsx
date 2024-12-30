"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function MainPageLayout({ children }) {
  const [isClient, setIsClient] = useState(false); // Quản lý trạng thái client-side render

  // Chỉ khi client-side đã render, mới cập nhật các giá trị cần thiết
  useEffect(() => {
    setIsClient(true);
  }, []);

  const [activeLink, setActiveLink] = useState("/main-page"); // Mặc định là link Homepage

  const handleLinkClick = (path) => {
    setActiveLink(path); // Cập nhật active link khi click
  };

  if (!isClient) {
    return null; // Không render gì cho đến khi client-side đã render
  }

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-white text-black p-4 fixed top-0 left-0 w-full z-10 shadow-md">
          <nav className="flex justify-between gap-4 px-20">
            <Link
              href="/main-page"
              className={`hover:text-green-500 ${
                activeLink === "/main-page" ? "text-green-500 font-bold" : ""
              }`}
              onClick={() => handleLinkClick("/main-page")}
            >
              Trang chủ
            </Link>
            <Link
              href="/main-page/practice-page"
              className={`hover:text-green-500 ${
                activeLink === "/main-page/practice-page"
                  ? "text-green-500 font-bold"
                  : ""
              }`}
              onClick={() => handleLinkClick("/main-page/practice-page")}
            >
              Luyện tập
            </Link>
            <Link
              href="/main-page/nutrition-page"
              className={`hover:text-green-500 ${
                activeLink === "/main-page/nutrition-page"
                  ? "text-green-500 font-bold"
                  : ""
              }`}
              onClick={() => handleLinkClick("/main-page/nutrition-page")}
            >
              Dinh dưỡng
            </Link>
            <Link
              href="/main-page/plan-page"
              className={`hover:text-green-500 ${
                activeLink === "/main-page/plan-page"
                  ? "text-green-500 font-bold"
                  : ""
              }`}
              onClick={() => handleLinkClick("/main-page/plan-page")}
            >
              Kế hoạch
            </Link>

            {/* Logout Button */}
            <button
              onClick={() => {
                // Thực hiện logic logout ở đây (ví dụ: xóa token, session)
                // Sau đó điều hướng về màn hình login
                window.location.href = "/login"; // Điều hướng tới màn hình đăng nhập
              }}
              className="hover:underline text-black"
            >
              Đăng xuất
            </button>
          </nav>
        </header>

        {/* Main content */}
        <main className="flex-grow pt-[57px]">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
          My Application. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
