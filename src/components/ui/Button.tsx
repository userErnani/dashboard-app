import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="bg-primary text-white font-bold py-2 px-4 rounded w-full hover:bg-primary-hover transition duration-200"
      {...props}
    >
      {children}
    </button>
  );
}
