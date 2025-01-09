"use client";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { useRouter } from "next/navigation";
export default function PlanPage() {
  const router = useRouter();
  const [isEditingTime, setIsEditingTime] = useState(false);
  const [isEditingBudget, setIsEditingBudget] = useState(false);
  const [isEditingCookingTime, setIsEditingCookingTime] = useState(false);
  const [chanThuong, setChanThuong] = useState(["Đầu gối phải", "Tay trái"]);
  const [benhLyNen, setBenhLyNen] = useState(["Viêm phổi","Hở van tim"]);
  const [yeuthich, setYeuthich] = useState(["Gà", "Rau cải"]);
  const [diung, setDiung] = useState(["Tôm", "Cua"]);
  const [themDiung, setThemDiung] = useState("");
  const [themYeuthich, setThemYeuthich] = useState("");
  const [themChanThuong, setThemChanThuong] = useState("");
  const [themBenhLyNen, setThemBenhLyNen] = useState("");
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
  const handleAddBenhLyNen = () =>{ 
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
      <div className="space-y-10">
        <h1 className="text-darkgreen font-bold text-2xl">Kế hoạch</h1>
        <div className="grid grid-cols-2 gap-10">
          <div className="col-span-1 space-y-10">
            <h1 className="text-darkgreen font-bold text-2xl">
              Thông tin cá nhân
            </h1>
            <div className="border border-grayborder p-10 rounded-md space-y-4">
              <div>
                <h1>Tên</h1>
                <input
                  type="text"
                  className="border rounded-md p-2 border-grayborder w-full"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                  <h1>Chiều cao</h1>
                  <input
                    type="text"
                    className="border rounded-md p-2 border-grayborder w-full"
                  />
                </div>
                <div className="col-span-1">
                  <h1>Cân nặng</h1>
                  <input
                    type="text"
                    className="border rounded-md p-2 border-grayborder w-full"
                  />
                </div>
                <div className="col-span-1">
                  <h1>Tuổi</h1>
                  <input
                    type="text"
                    className="border rounded-md p-2 border-grayborder w-full"
                  />
                </div>
              </div>
              <div className=" flex justify-end">
                <button className="bg-lightgreen text-white px-6 py-1 rounded-lg font-bold">
                  Cập nhật
                </button>
              </div>
            </div>
          </div>
          <div className="col-span- space-y-10">
            <h1 className="text-darkgreen font-bold text-2xl">Mục tiêu</h1>
            <div className="col-span-1 border border-grayborder p-10 rounded-md space-y-10">
              <div className="space-y-5 mt-1">
                <div className="flex justify-between">
                  <span>Thời gian: 3 tháng</span>
                  <span>Thời gian còn lại: 1 tháng</span>
                </div>
                <div className="flex justify-between">
                  <span>Đạt 70kg</span>
                  <span>Hiện tại: 84kg</span>
                </div>
              </div>
              <div className="w-full bg-progress rounded-full h-2.5">
                <div
                  className="bg-darkgreen h-2.5 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
              <div className=" flex justify-end">
                <button className="bg-lightgreen text-white px-6 py-1 rounded-lg font-bold  " onClick={()=>router.push("/main-page/plan-page/target")}>
                  Điều chỉnh
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="col-span-1 space-y-10">
            <h1 className="text-darkgreen font-bold text-2xl">
              Chế độ tập luyện
            </h1>
            <div className="border border-grayborder p-10 rounded-md space-y-4">
              <div className="flex justify-between">
                <span>Cường độ luyện tập</span>
                <select className="border rounded-md p-2 border-grayborder">
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
                    className={`p-2 outline-none bg-white text-center w-11 ${
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
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <span>Không gian luyện tập</span>
                <select className="border rounded-md p-2 border-grayborder">
                  <option value="1">Hẹp</option>
                  <option value="2">Trung bình</option>
                  <option value="3">Rộng</option>
                </select>
              </div>
              <div className="flex justify-between">
                <span>Dụng cụ luyện tập</span>
                <select className="border rounded-md p-2 border-grayborder">
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
                    <span>{item}</span>
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
                    className="border rounded-md p-2 border-grayborder "
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
                    <span>{item}</span>
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
                    className="border rounded-md p-2 border-grayborder "
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
          <div className="col-span-1 space-y-10">
            <h1 className="text-darkgreen font-bold text-2xl">
              Chế độ dinh dưỡng
            </h1>
            <div className="border border-grayborder p-10 rounded-md space-y-4">
              <div className="flex justify-between">
                <span>Ngân sách mỗi bữa ăn</span>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    disabled={!isEditingBudget}
                    className={`p-2 outline-none bg-white text-center w-11 ${
                      isEditingBudget
                        ? "border border-grayborder rounded-md"
                        : "border-none"
                    }`}
                    value={200.000}
                  />
                  <span>đ</span>
                  <EditIcon
                    className="text-black cursor-pointer"
                    onClick={() => setIsEditingBudget(!isEditingBudget)}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <span>Thời gian nấu</span>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    disabled={!isEditingCookingTime}
                    className={`p-2 outline-none bg-white text-center w-11 ${
                      isEditingCookingTime
                        ? "border border-grayborder rounded-md"
                        : "border-none"
                    }`}
                    value={30}
                  />
                  <span>phút</span>
                  <EditIcon
                    className="text-black cursor-pointer"
                    onClick={() => setIsEditingCookingTime(!isEditingCookingTime)}
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
                    <span>{item}</span>
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
                    <span>{item}</span>
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
