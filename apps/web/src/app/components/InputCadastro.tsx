import { AlertCircleIcon } from 'lucide-react';
import React from 'react';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const InputCadastro = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ label, error, ...props}, ref) => {
  return (
    <div>
      <label className="text-black py-2 block">{label}</label>
      <input 
      {...props} 
      ref={ref}
      className="w-full text-black px-4 py-2 border rounded border-black"/>
      {error && (
          <div className="flex gap-2 items-center mr-4">
            <AlertCircleIcon className="h-[14px] w-[14px] text-red-500" />
            <span className="text-red-500">{error}</span>
          </div>
        )}
      </div>
    );
  }
)
export default InputCadastro;
