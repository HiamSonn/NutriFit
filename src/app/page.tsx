"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DefaultPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/login"); // Điều hướng tới trang login khi vào ứng dụng
  }, [router]);

  return null; // Không hiển thị gì ở đây, chỉ để điều hướng
}
