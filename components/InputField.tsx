import React from 'react'

interface FormFieldProps {
    labelName: string;
    placeholder: string;
    inputType?: string;
    isTextArea?: boolean;
    value?: string;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const InputField = ({ labelName, placeholder, inputType, isTextArea, value, handleChange }: FormFieldProps) => {
  return (
    <label className='flex-1 w-full flex flex-col'>
      {labelName && (
        <span className='font-medium text-black text-[16px] leading-[22px] mb-[10px]'>{labelName}</span>
      )}
      {isTextArea ? (
        <textarea 
        required
        value={value}
        onChange={handleChange}
        rows={5}
        placeholder={placeholder}
        className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#e5e5e5] bg-transparent text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
        />
      ) : (
        <input 
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          placeholder={placeholder}
          className="py-[12px] sm:px-[20px] px-[12px] outline-none border-[1px] border-[#e5e5e5] bg-transparent text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
        />
      )}
    </label>
  )
}

export default InputField