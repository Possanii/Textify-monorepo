// components/Button.jsx

import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-4 w-full bg-black text-white font-semibold py-2 px-4 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
    >
      {text}
    </button>
  );
};

export default Button;
