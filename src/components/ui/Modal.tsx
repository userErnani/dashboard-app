'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  title?: string;
  onClose?: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, children }: ModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-white/90">
      <div className="relative bg-white rounded-xl p-2 shadow-2xl max-w-4xl w-full border border-gray-300">
        {children}
      </div>
    </div>,
    document.body
  );
};
