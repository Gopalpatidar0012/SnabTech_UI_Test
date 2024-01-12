import React from "react";

export interface CBInputProps {
  type: string;
  placeholder: string;
  value?: string;
  onChangeFunc: (event: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  errorMsg?: string;
  isError?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  disabled?: boolean;
  isDarkMode?: boolean;
}
const CBInput = ({
  onChangeFunc,
  type = "text",
  value = "",
  placeholder = "",
  autoFocus = false,
  errorMsg = "",
  isError = false,
  onFocus = () => {},
  onBlur = () => {},
  disabled = false,
  isDarkMode = false,
}: CBInputProps) => {
  const inputClasses = `h-full w-full border-solid py-2.5 ${
    isError ? "border-red" : "border-black"
  } border-b placeholder-gray bg-transparent text-base font-regular font-openSans outline outline-0 transition-all focus:outline-0 ${
    isDarkMode ? "text-white" : "text-black"
  }`;

  return (
    <div className="relative">
      <input
        className={inputClasses}
        type={type}
        autoFocus={autoFocus}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChangeFunc}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {isError && <div>{errorMsg}</div>}
    </div>
  );
};

export default CBInput;
