"use client";

export default function RestPage() {
  return (
    <div className="min-h-screen bg-white p-4 px-20 flex justify-center">
      <div className="text-center">
        <img
          src="/rest.png"
          alt="Description"
          className="mx-auto mb-4 mt-20" // Căn giữa hình ảnh và thêm khoảng cách dưới ảnh
        />
        <h1 className="text-2xl font-semibold text-gray-400">
          Hôm nay là ngày nghỉ. Cơ thể bạn xứng đáng được nghỉ ngơi
        </h1>
      </div>
    </div>
  );
}
