import { InputHTMLAttributes } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
}

export default function Input({
  label,
  id,
  registration,
  error,
  className,
  ...props
}: InputFieldProps) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-sm font-semibold mb-2 text-gray-700">
        {label}
      </label>
      <input
        id={id}
        {...registration}
        {...props}
        className={`border border-gray-400 rounded-md w-full py-2 px-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition ${className ?? ''}`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  );
}
