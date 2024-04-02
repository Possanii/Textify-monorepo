import React from "react";
interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  text: string;
}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  ({ text, ...props }, ref) => {
  return (
    <button
      {...props}
      ref={ref}
      className="w-full bg-black text-white py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 hover:bg-green-600"
    >
      {text}
    </button>
  );
}
)

export default Button;
