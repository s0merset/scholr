"se client";
import React, { useState } from 'react';

interface ToggleSwitchProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  label,
  checked = false,
  onChange
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <div className="flex items-center mb-8">
      <div className="inline-block relative mr-3 w-12 h-6">
        <input
          type="checkbox"
          className="w-0 h-0 opacity-0"
          checked={isChecked}
          onChange={handleToggle}
        />
        <div
          className={`absolute inset-0 rounded-3xl transition-all ease-in-out cursor-pointer duration ${
            isChecked ? 'bg-blue-500' : 'bg-neutral-600'
          }`}
          onClick={handleToggle}
        >
          <div
            className={`absolute bg-white rounded-full transition-all ease-in-out duration h-[18px] top-[3px] w-[18px] ${
              isChecked ? 'left-[21px]' : 'left-[3px]'
            }`}
          />
        </div>
      </div>
      <label className="text-sm leading-snug text-black cursor-pointer" onClick={handleToggle}>
        {label}
      </label>
    </div>
  );
};
