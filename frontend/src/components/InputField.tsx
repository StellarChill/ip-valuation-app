import React from "react";

type InputFieldProps = {
  label: string;
  value: string;
  placeholder?: string;
  icons?: React.ReactNode;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export  function InputField({
  label,
  value,
  placeholder,
  icons,
  type = "text",
  onChange,
}: InputFieldProps) {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-semibold">{label}</label>
      <div className="relative">
        {icons && (
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
            {icons}
          </span>
        )}
        <input
          type={type}
          className="w-full border border-gray-300 rounded px-3 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
  
  
 
}
 export  function LoginFeild(){
   return( <>
      <div>
        <InputField
          label="Email Address"
          icons={<i className="fas fa-envelope"></i>}
          placeholder="Enter your email address"
          value=""
          onChange={(e) => console.log(e.target.value)}
        />
        <InputField
          label="Password"
          icons={<i className="fas fa-lock"></i>}
          placeholder="Enter your password"
          type="password"
          value=""
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
   </>);
}

