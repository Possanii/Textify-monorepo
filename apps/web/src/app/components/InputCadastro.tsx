// components/Input.jsx

import React from 'react';

const InputCadastro = ({ label, ...restProps}) => {
  return (
    <div>
      <label htmlFor={restProps.id} className="text-black py-2 block">
        {label}
      </label>
      <input {...restProps} className="w-full text-black px-4 py-2 border rounded" required/>
    </div>
  );
};

export default InputCadastro;
