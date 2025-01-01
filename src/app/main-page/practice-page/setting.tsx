import React, { useState } from "react";
import { ChevronDown, X } from "lucide-react";

interface SettingScreenProps {
  onClose: () => void;
}

interface DropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  id: string;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

export default function SettingScreen({ onClose }: SettingScreenProps) {
  // State cho các toggle switch
  const [backgroundMusic, setBackgroundMusic] = useState(true);
  const [voiceGuide, setVoiceGuide] = useState(true);
  const [voiceEffect, setVoiceEffect] = useState(true);

  // State cho các dropdown
  const [trainerLanguage, setTrainerLanguage] = useState("Tiếng anh");
  const [voiceLanguage, setVoiceLanguage] = useState("Tiếng anh");
  const [voiceType, setVoiceType] = useState("Giọng J97");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Component Dropdown có thể tái sử dụng
  const Dropdown = ({
    options,
    value,
    onChange,
    id,
    isOpen,
    onToggle,
  }: DropdownProps) => (
    <div className="relative">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          onToggle(id);
        }}
      >
        <span className="text-black">{value}</span>
        <ChevronDown size={20} color="black" />
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
          {options.map((option) => (
            <div
              key={option}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
              onClick={() => {
                onChange(option);
                onToggle(id);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  // Toggle dropdown handler
  const handleToggleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  // Component Toggle Switch có thể tái sử dụng
  const ToggleSwitch = ({
    checked,
    onChange,
  }: {
    checked: boolean;
    onChange: () => void;
  }) => (
    <button
      onClick={onChange}
      className={`w-12 h-6 rounded-full relative transition-colors duration-200 ease-in-out ${
        checked ? "bg-teal-500" : "bg-gray-300"
      }`}
    >
      <div
        className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out ${
          checked ? "right-1" : "left-1"
        }`}
      />
    </button>
  );

  // Click outside handler để đóng dropdown
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest(".relative")) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [activeDropdown]);

  return (
    <div className="p-6 bg-white w-2/3 relative rounded-md shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-black">Cài đặt tập luyện</h2>
        <button
          onClick={onClose}
          className="hover:bg-gray-100 p-1 rounded-full"
        >
          <X size={24} color="black" />
        </button>
      </div>

      <div className="space-y-6 mb-20">
        {/* Huấn luyện viên section */}
        <div className="space-y-2">
          <label className="font-semibold text-black">Huấn luyện viên</label>
          <div className="flex items-center justify-between border rounded-lg p-3">
            <span className="text-black">Lựa chọn huấn luyện viên ảo</span>
            <Dropdown
              id="trainer"
              options={["Tiếng anh", "Tiếng việt"]}
              value={trainerLanguage}
              onChange={setTrainerLanguage}
              isOpen={activeDropdown === "trainer"}
              onToggle={handleToggleDropdown}
            />
          </div>
        </div>

        {/* Âm nhạc nền section */}
        <div className="flex items-center justify-between border rounded-lg p-3">
          <div className="flex items-center gap-12">
            <span className="font-medium text-black">Âm nhạc nền</span>

            <ToggleSwitch
              checked={backgroundMusic}
              onChange={() => setBackgroundMusic(!backgroundMusic)}
            />
          </div>
          <div className="flex items-center gap-6">
            <img
              src="/jack.png"
              alt="description"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-black">Thiên lý ơi</span>
            <span className="text-black">3:00</span>
          </div>
        </div>

        {/* Giọng nói section */}
        <div className="space-y-4">
          <span className="font-semibold text-black">Giọng nói hướng dẫn</span>
          <div className="space-y-3">
            <div className="flex text-black items-center justify-between border rounded-lg p-3">
              <span>Giọng nói hướng dẫn</span>
              <ToggleSwitch
                checked={voiceGuide}
                onChange={() => setVoiceGuide(!voiceGuide)}
              />
            </div>

            <div className="flex text-black items-center justify-between border rounded-lg p-3">
              <span>Ngôn ngữ giọng nói</span>
              <Dropdown
                id="voiceLanguage"
                options={["Tiếng anh", "Tiếng việt"]}
                value={voiceLanguage}
                onChange={setVoiceLanguage}
                isOpen={activeDropdown === "voiceLanguage"}
                onToggle={handleToggleDropdown}
              />
            </div>

            <div className="flex text-black items-center justify-between border rounded-lg p-3">
              <span>Giọng nói của huấn luyện viên</span>
              <Dropdown
                id="voiceType"
                options={["Giọng J97", "Giọng Sơn Tùng"]}
                value={voiceType}
                onChange={setVoiceType}
                isOpen={activeDropdown === "voiceType"}
                onToggle={handleToggleDropdown}
              />
            </div>

            <div className="flex text-black items-center justify-between border rounded-lg p-3">
              <span>Hiệu ứng giọng nói</span>
              <ToggleSwitch
                checked={voiceEffect}
                onChange={() => setVoiceEffect(!voiceEffect)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Save button */}
      <div className="absolute bottom-6 right-6">
        <button
          onClick={onClose}
          className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600"
        >
          Lưu
        </button>
      </div>
    </div>
  );
}
