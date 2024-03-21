// components/LoginButton.js
import React from 'react';

const LoginButton = ({ text }) => {
  return (
    <button
      type="submit"
      className="w-full bg-black text-white py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 hover:bg-green-600"
    >
      {text}
    </button>
  );
};

export default LoginButton;
