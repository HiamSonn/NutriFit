"use client";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SendIcon from "@mui/icons-material/Send";
import Dish from "@/components/dish";
import { useRouter } from "next/navigation";
import { useState } from "react";
const meal = () => {
    const [isFavorite, setIsFavorite] = useState(false);
    const handleFavoriteClick = (e) => {
      e.stopPropagation();
      setIsFavorite(!isFavorite);
    };
  const router = useRouter();
  return (
    <div className="bg-white max-w-full overflow-hidden mt-10">
      <div className=" grid grid-cols-[0.5fr_11fr_0.5fr]">
        <div></div>
        <div className="lg:space-y-10 md:space-y-8 sm:space-y-6 space-y-4">
          <div className="grid lg:grid-cols-2 md:grid:cols-2 grid-cols-1 lg:gap-20 md:gap-12 sm:gap-10 gap-8 min-h-[100px] mt-10 ">
            <div className="col-span-1 space-y-2 border border-grayborder px-4 py-2 rounded-md shadow-md">
              <div className="flex justify-between ">
                <div className="text-darkgreen font-bold lg:text-2xl md:text-lg sm:text-base text-sm">
                  Bữa sáng kiểu mỹ
                </div>
                <FavoriteIcon
                  sx={{
                    fontSize: {
                      xs: "16px",
                      sm: "20px",
                      md: "24px",
                      lg: "28px",
                    },
                  }}
                  className={`cursor-pointer ${
                    isFavorite ? "text-lightgreen" : "text-darkgreen"
                  }`}
                  onClick={handleFavoriteClick}
                />
              </div>
              <h1 className="font-bold lg:text-lg md:text-xs sm:text-xs text-xs">
                Bữa sáng
              </h1>
              <div className="text-gray lg:text-sm text-xs lg:space-x-4 md:space-x-3 space-x-2">
                <span>200kcal</span>
                <span>5 phút chế biến</span>
                <span>50.000 đ</span>
              </div>
            </div>
            <div className="col-span-1  px-4 py-2 rounded-md">
              <div className="flex lg:justify-end md:justify-end sm:justify-start  space-x-5">
                <AccountCircleIcon
                  sx={{
                    fontSize: {
                      xs: "24px",
                      sm: "28px",
                      md: "32px",
                      lg: "36px",
                    },
                  }}
                  className="text-darkgreen "
                />
                <span className="flex items-center lg:text-xl md:text-lg sm:text-base text-sm">
                  Nguyễn Văn A
                </span>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-3 gap-4">
            <Dish />
            <Dish />
            <Dish />
            <Dish />
            <Dish />
          </div>
          <div className="border border-grayborder px-4 py-2 rounded-md lg:w-[60%]">
            <h1 className="text-darkgreen font-bold lg:text-2xl md:text-lg sm:text-base text-sm">
              Bình luận
            </h1>
            <div className="border border-grayborder p-2 flex justify-between rounded-md">
              <AccountCircleIcon
                sx={{
                  fontSize: {
                    xs: "24px",
                    sm: "28px",
                    md: "32px",
                    lg: "36px",
                  },
                }}
                className="text-darkgreen "
              />
              <SendIcon
                sx={{
                  fontSize: {
                    xs: "20px",
                    sm: "24px",
                    md: "28px",
                    lg: "32px",
                  },
                }}
                className="text-darkgreen -rotate-45 items-center"
              />
            </div>
            <div className="py-3 flex  rounded-md justify-between pl-2 space-x-2">
              <AccountCircleIcon
                sx={{
                  fontSize: {
                    xs: "24px",
                    sm: "28px",
                    md: "32px",
                    lg: "36px",
                  },
                }}
                className="text-darkgreen "
              />
              <div className="border border-grayborder p-3 rounded-md">
                <h1 className=" font-bold lg:text-lg md:text-base text-sm ">
                  Trịnh Trần Phương Tuấn
                </h1>
                <p className="  lg:text-lg md:text-base sm:text-sm text-xs">
                  Cá hồi salad tuyệt vời! Miếng cá hồi tươi ngon, mềm mại được
                  kết hợp hoàn hảo với rau xanh giòn và sốt trộn đậm đà. Một món
                  ăn healthy, thanh mát mà còn cực kỳ dinh dưỡng, chắc chắn sẽ
                  khiến bạn thích mê!!!
                </p>
              </div>
            </div>
            <div className="py-3 flex  rounded-md justify-between pl-2 space-x-2">
              <AccountCircleIcon
                sx={{
                  fontSize: {
                    xs: "24px",
                    sm: "28px",
                    md: "32px",
                    lg: "36px",
                  },
                }}
                className="text-darkgreen "
              />
              <div className="border border-grayborder p-3 rounded-md">
                <h1 className=" font-bold lg:text-lg md:text-base text-sm ">
                  Trịnh Trần Phương Tuấn
                </h1>
                <p className="  lg:text-lg md:text-base sm:text-sm text-xs">
                  Cá hồi salad tuyệt vời! Miếng cá hồi tươi ngon, mềm mại được
                  kết hợp hoàn hảo với rau xanh giòn và sốt trộn đậm đà. Một món
                  ăn healthy, thanh mát mà còn cực kỳ dinh dưỡng, chắc chắn sẽ
                  khiến bạn thích mê!!!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default meal;
