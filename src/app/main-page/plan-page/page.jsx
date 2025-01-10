"use client";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { useRouter } from "next/navigation";
export default function PlanPage() {
  const router = useRouter();
  const [isEditingTime, setIsEditingTime] = useState(false);
  const [isEditingBudget, setIsEditingBudget] = useState(false);
  const [isEditingCookingTime, setIsEditingCookingTime] = useState(false);
  const [budget, setBudget] = useState(200000);
  const [cookingTime, setCookingTime] = useState(30);
  const [chanThuong, setChanThuong] = useState(["Đầu gối phải", "Tay trái"]);
  const [benhLyNen, setBenhLyNen] = useState(["Viêm phổi", "Hở van tim"]);
  const [yeuthich, setYeuthich] = useState(["Gà", "Rau cải"]);
  const [diung, setDiung] = useState(["Tôm", "Cua"]);
  const [themDiung, setThemDiung] = useState("");
  const [themYeuthich, setThemYeuthich] = useState("");
  const [themChanThuong, setThemChanThuong] = useState("");
  const [themBenhLyNen, setThemBenhLyNen] = useState("");
  const handleBudgetChange = (e) => {
    // Remove all non-digit characters
    const numericValue = e.target.value.replace(/[^0-9]/g, '');
    setBudget(e.target.value)
    setBudget(Number(numericValue));
  };
  
  const handleRemoveChanThuong = (index) => {
    setChanThuong(chanThuong.filter((_, i) => i !== index));
  };
  const handleRemoveBenhLyNen = (index) => {
    setBenhLyNen(benhLyNen.filter((_, i) => i !== index));
  };
  const handleAddChanThuong = () => {
    if (themChanThuong.trim()) {
      setChanThuong([...chanThuong, themChanThuong]);
      setThemChanThuong(""); // Reset input after adding
    }
  };
  const handleAddBenhLyNen = () => {
    if (themBenhLyNen.trim()) {
      setBenhLyNen([...benhLyNen, themBenhLyNen]);
      setThemBenhLyNen(""); // Reset input after adding
    }
  };
  const handleAddDiung = () => {
    if (themDiung.trim()) {
      setDiung([...diung, themDiung]);
      setThemDiung(""); // Reset input after adding
    }
  };
  const handleAddYeuthich = () => {
    if (themYeuthich.trim()) {
      setYeuthich([...yeuthich, themYeuthich]);
      setThemYeuthich(""); // Reset input after adding
    }
  };
  const handleRemoveDiung = (index) => {
    setDiung(diung.filter((_, i) => i !== index));
  };
  const handleRemoveYeuthich = (index) => {
    setYeuthich(yeuthich.filter((_, i) => i !== index));
  };
  return (
    <div className="grid grid-cols-[0.5fr_11fr_0.5fr] mt-10">
      <div></div>
      <div className="lg:space-y-10 md:space-y-8 sm:space-y-6 space-y-4">
        <h1 className="text-darkgreen font-bold lg:text-2xl text-lg  ">
          Kế hoạch
        </h1>
        <div className="grid lg:grid-cols-2  grid-cols-1 lg:gap-10 md:gap-6 gap-4">
          <div className="col-span-1 lg:space-y-10 md:space-y-8 sm:space-y-6 space-y-4">
            <h1 className="text-darkgreen font-bold lg:text-xl md:text-lg sm:text-base text-base">
              Thông tin cá nhân
            </h1>
            <div className="shadow-md lg:p-10 md:p-8 sm:p-6 p-3 rounded-md space-y-4">
              <div>
                <h1 className="lg:text-xl md:text-lg sm:text-base text-sm">
                  Tên
                </h1>
                <input
                  type="text"
                  className="border rounded-md p-2 border-grayborder w-full lg:text-xl md:text-lg sm:text-base text-xs"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                  <h1 className="lg:text-xl md:text-lg sm:text-base text-sm">
                    Chiều cao
                  </h1>
                  <input
                    type="text"
                    className="border rounded-md p-2 border-grayborder w-full lg:text-xl md:text-lg sm:text-base text-xs"
                  />
                </div>
                <div className="col-span-1">
                  <h1 className="lg:text-xl md:text-lg sm:text-base text-sm">
                    Cân nặng
                  </h1>
                  <input
                    type="text"
                    className="border rounded-md p-2 border-grayborder w-full lg:text-xl md:text-lg sm:text-base text-xs"
                  />
                </div>
                <div className="col-span-1">
                  <h1 className="lg:text-xl md:text-lg sm:text-base text-sm">
                    Tuổi
                  </h1>
                  <input
                    type="text"
                    className="border rounded-md p-2 border-grayborder w-full lg:text-xl md:text-lg sm:text-base text-xs"
                  />
                </div>
              </div>
              <div className=" flex justify-end">
                <button className="bg-lightgreen text-white px-6 py-1 rounded-lg font-bold lg:text-xl md:text-lg sm:text-base text-sm">
                  Cập nhật
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:space-y-10 md:space-y-8 sm:space-y-6 space-y-4">
            <h1 className="text-darkgreen font-bold lg:text-xl md:text-lg sm:text-base text-sm">
              Mục tiêu
            </h1>
            <div className=" col-span-1 shadow-md lg:p-11 md:p-8 sm:p-6 p-3  rounded-md lg:space-y-10 md:space-y-8 sm:space-y-6 space-y-4">
              <div className="space-y-5 mt-1">
                <div className="flex justify-between lg:text-xl md:text-lg sm:text-base text-sm">
                  <span>Thời gian: 3 tháng</span>
                  <span>Thời gian còn lại: 1 tháng</span>
                </div>
                <div className="flex justify-between lg:text-xl md:text-lg sm:text-base text-sm">
                  <span>Đạt 70kg</span>
                  <span className="text-lightgreen">Hiện tại: 84kg</span>
                </div>
              </div>
              <div className="w-full bg-progress rounded-full h-2.5 ">
                <div
                  className="bg-darkgreen h-2.5 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
              <div className=" flex justify-end ">
                <button
                  className="bg-lightgreen text-white px-6 py-1 rounded-lg font-bold lg:text-xl md:text-lg sm:text-base text-sm "
                  onClick={() => router.push("/main-page/plan-page/target")}
                >
                  Điều chỉnh
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:grid grid-cols-2 lg:gap-10 md:gap-6 gap-4">
          <div className="col-span-1 lg:space-y-10 md:space-y-8 sm:space-y-6 space-y-4 lg:text-xl md:text-lg sm:text-base text-sm">
            <h1 className="text-darkgreen font-bold lg:text-xl md:text-lg sm:text-base text-base">
              Chế độ tập luyện
            </h1>
            <div className="shadow-md lg:p-10 md:p-8 sm:p-6 p-3 rounded-md space-y-4">
              <div className="flex justify-between">
                <span>Cường độ luyện tập</span>
                <select className="border rounded-md p-2 border-grayborder text-gray">
                  <option value="1">Nhẹ</option>
                  <option value="2">Trung bình</option>
                  <option value="3">Mạnh</option>
                </select>
              </div>
              <div className="flex justify-between">
                <span>Thời gian luyện tập</span>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    disabled={!isEditingTime}
                    className={`p-2 outline-none bg-white text-center w-11 text-gray ${
                      isEditingTime
                        ? "border border-grayborder rounded-md"
                        : "border-none"
                    }`}
                    value={30}
                  />
                  <span>phút</span>
                  <EditIcon
                    className="text-black cursor-pointer"
                    onClick={() => setIsEditingTime(!isEditingTime)}
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "16px",
                        md: "20px",
                        lg: "24px",
                      },
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <span>Không gian luyện tập</span>
                <select className="border rounded-md p-2 border-grayborder text-gray">
                  <option value="1">Hẹp</option>
                  <option value="2">Trung bình</option>
                  <option value="3">Rộng</option>
                </select>
              </div>
              <div className="flex justify-between">
                <span>Dụng cụ luyện tập</span>
                <select className="border rounded-md p-2 border-grayborder text-gray">
                  <option value="1">Hạn chế</option>
                  <option value="2">Trung bình</option>
                  <option value="3">Thoải mái</option>
                </select>
              </div>
              <div className="space-y-5 ">
                <span>Chấn thương</span>
                {chanThuong.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 justify-between"
                  >
                    <span className="text-gray">{item}</span>
                    <button
                      onClick={() => handleRemoveChanThuong(index)}
                      className="rounded-full bg-grayborder text-black cursor-pointer w-6 h-6 flex items-center justify-center"
                    >
                      x
                    </button>
                  </div>
                ))}
                <div className="flex justify-between">
                  <input
                    value={themChanThuong}
                    type="text"
                    className="border rounded-md p-2 border-grayborder text-gray "
                    placeholder="Thêm chấn thương..."
                    onChange={(e) => setThemChanThuong(e.target.value)}
                  />
                  <button
                    onClick={handleAddChanThuong}
                    className="rounded-full bg-grayborder text-black cursor-pointer w-6 h-6 flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="space-y-5 ">
                <span>Bệnh lý nền</span>
                {benhLyNen.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 justify-between"
                  >
                    <span className="text-gray">{item}</span>
                    <button
                      onClick={() => handleRemoveBenhLyNen(index)}
                      className="rounded-full bg-grayborder text-black cursor-pointer w-6 h-6 flex items-center justify-center"
                    >
                      x
                    </button>
                  </div>
                ))}
                <div className="flex justify-between">
                  <input
                    value={themBenhLyNen}
                    type="text"
                    className="border rounded-md p-2 border-grayborder text-gray "
                    placeholder="Thêm bệnh lý nền..."
                    onChange={(e) => setThemBenhLyNen(e.target.value)}
                  />
                  <button
                    onClick={handleAddBenhLyNen}
                    className="rounded-full bg-grayborder text-black cursor-pointer w-6 h-6 flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className=" flex justify-end">
                <button className="bg-lightgreen text-white px-6 py-1 rounded-lg font-bold">
                  Cập nhật
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:space-y-10 md:space-y-8 sm:space-y-6 space-y-4">
            <h1 className="text-darkgreen font-bold lg:text-xl md:text-lg sm:text-base text-base">
              Chế độ dinh dưỡng
            </h1>
            <div className="shadow-md lg:p-10 md:p-8 sm:p-6 p-3 rounded-md space-y-4 lg:text-xl md:text-lg sm:text-base text-sm">
              <div className="flex justify-between">
                <span>Ngân sách mỗi bữa ăn</span>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    disabled={!isEditingBudget}
                    className={`p-2 outline-none bg-white  min-w-[100px] max-w-[130px] text-end text-gray ${
                      isEditingBudget
                        ? "border border-grayborder rounded-md"
                        : "border-none"
                    }`}
                    value={budget.toLocaleString('vi-VN')}
                    
                    onChange={handleBudgetChange}
                  />
                  <span className="text-gray">đ</span>
                  <EditIcon
                    className="text-black cursor-pointer"
                    onClick={() => setIsEditingBudget(!isEditingBudget)}
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "16px",
                        md: "20px",
                        lg: "24px",
                      },
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <span>Thời gian nấu</span>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    disabled={!isEditingCookingTime}
                    className={`p-2 outline-none bg-white text-center w-11 text-gray ${
                      isEditingCookingTime
                        ? "border border-grayborder rounded-md"
                        : "border-none"
                    }`}
                    value={cookingTime}
                    onChange={(e) => setCookingTime(e.target.value)}
                  />
                  <span className="text-gray">phút</span>
                  <EditIcon
                    className="text-black cursor-pointer"
                    onClick={() =>
                      setIsEditingCookingTime(!isEditingCookingTime)
                    }
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "16px",
                        md: "20px",
                        lg: "24px",
                      },
                    }}
                  />
                </div>
              </div>
              <div className="space-y-5 ">
                <span>Thực phẩm yêu thích</span>
                {yeuthich.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 justify-between"
                  >
                    <span className="text-gray">{item}</span>
                    <button
                      onClick={() => handleRemoveYeuthich(index)}
                      className="rounded-full bg-grayborder text-black cursor-pointer w-6 h-6 flex items-center justify-center"
                    >
                      x
                    </button>
                  </div>
                ))}
                <div className="flex justify-between">
                  <input
                    value={themYeuthich}
                    type="text"
                    className="border rounded-md p-2 border-grayborder "
                    placeholder="Thêm thực phẩm..."
                    onChange={(e) => setThemYeuthich(e.target.value)}
                  />
                  <button
                    onClick={handleAddYeuthich}
                    className="rounded-full bg-grayborder text-black cursor-pointer w-6 h-6 flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="space-y-5 ">
                <span>Thực phẩm dị ứng</span>
                {diung.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 justify-between"
                  >
                    <span className="text-gray">{item}</span>
                    <button
                      onClick={() => handleRemoveDiung(index)}
                      className="rounded-full bg-grayborder text-black cursor-pointer w-6 h-6 flex items-center justify-center"
                    >
                      x
                    </button>
                  </div>
                ))}
                <div className="flex justify-between">
                  <input
                    value={themDiung}
                    type="text"
                    className="border rounded-md p-2 border-grayborder "
                    placeholder="Thêm thực phẩm..."
                    onChange={(e) => setThemDiung(e.target.value)}
                  />
                  <button
                    onClick={handleAddDiung}
                    className="rounded-full bg-grayborder text-black cursor-pointer w-6 h-6 flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className=" flex justify-end">
                <button className="bg-lightgreen text-white px-6 py-1 rounded-lg font-bold">
                  Cập nhật
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
