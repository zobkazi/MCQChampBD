import React from "react";

interface FormFieldProps {
  name: string;
  type: string;
  placeholder: string;
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Define onChange prop
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  type,
  placeholder,
  className,
  value,
  onChange,
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value} // Set value attribute
        className={` border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 " placeholder="John" required  ${className}`}
        onChange={onChange} // Pass onChange prop
      />
      {/* <ErrorMessage name={name} component="div" className="text-red-500 mb-2" /> */}
    </>
  );
};

export default FormField;
