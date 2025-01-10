"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import LogoutIcon from "@mui/icons-material/Logout";

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
    <body className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white text-black p-4 fixed top-0 left-0 w-full z-10 shadow-md">
        <nav className="flex justify-between gap-4 px-20">
          <Link
            href="/main-page"
            className={`hover:text-teal-600 ${
              activeLink === "/main-page" ? "text-teal-600 font-bold" : ""
            }`}
            onClick={() => handleLinkClick("/main-page")}
          >
            Trang chủ
          </Link>
          <Link
            href="/main-page/practice-page"
            className={`hover:text-teal-600 ${
              activeLink === "/main-page/practice-page"
                ? "text-teal-600 font-bold"
                : ""
            }`}
            onClick={() => handleLinkClick("/main-page/practice-page")}
          >
            Luyện tập
          </Link>
          <Link
            href="/main-page/nutrition-page"
            className={`hover:text-teal-600 ${
              activeLink === "/main-page/nutrition-page"
                ? "text-teal-600 font-bold"
                : ""
            }`}
            onClick={() => handleLinkClick("/main-page/nutrition-page")}
          >
            Dinh dưỡng
          </Link>
          <Link
            href="/main-page/plan-page"
            className={`hover:text-teal-600 ${
              activeLink === "/main-page/plan-page"
                ? "text-teal-600 font-bold"
                : ""
            }`}
            onClick={() => handleLinkClick("/main-page/plan-page")}
          >
            Kế hoạch
          </Link>

          {/* Logout Button */}
          <LogoutIcon
            onClick={() => {
              // Thực hiện logic logout ở đây (ví dụ: xóa token, session)
              // Sau đó điều hướng về màn hình login
              window.location.href = "/login"; // Điều hướng tới màn hình đăng nhập
            }}
          />
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow pt-[57px]">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-200 text-black py-12">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex justify-between">
            {/* Cột 1 */}
            <div className="flex flex-col space-y-4">
              <h3 className="font-bold text-xl">Khỏe mạnh hơn mỗi ngày</h3>
              <p>Địa chỉ: Trường đại học Công nghệ thông tin</p>
              <p>Số điện thoại: 0399879090</p>
              <p>Email: contact@health.com</p>
            </div>

            {/* Cột 2 */}
            <div className="flex flex-col space-y-4">
              <h3 className="font-bold text-xl">Links</h3>
              <p>Luyện tập</p>
              <p>Dinh dưỡng</p>
              <p>Kế hoạch</p>
            </div>

            {/* Cột 3 */}
            <div className="flex flex-col space-y-4">
              <h3 className="font-bold text-xl">Liên hệ với chúng tôi</h3>
              <div className="flex space-x-4">
                <img
                  src="/ins.png"
                  alt="Image 1"
                  className="w-12 h-12 object-cover"
                />
                <img
                  src="/fb.png"
                  alt="Image 2"
                  className="w-12 h-12 object-cover"
                />
                <img
                  src="/youtube.png"
                  alt="Image 3"
                  className="w-12 h-12 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </body>
  );
}
