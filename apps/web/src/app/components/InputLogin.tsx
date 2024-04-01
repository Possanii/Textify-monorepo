import React from 'react';

const InputLogin = ({ label, type, name, placeholder, required }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="text-black block py-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="text-black w-full px-4 py-2 border rounded border-black"
        required={required}
      />
    </div>
  );
};

export default InputLogin;
