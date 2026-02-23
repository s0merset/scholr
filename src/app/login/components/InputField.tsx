import React from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange
}) => {
  return (
    <div className="mb-6">
      <label className="mb-2 text-sm font-semibold leading-snug text-black block">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="px-4 py-3 w-full text-base text-black bg-white rounded-lg border border-neutral-200"
      />
    </div>
  );
};
