import type { ReactNode } from "react";

type SuccessModalProps = {
  isOpen: boolean;
  title: string;
  message: string;
  onClose: () => void;
  children?: ReactNode;
};

export default function SuccessModal({
  isOpen,
  title,
  message,
  onClose,
  children,
}: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900 dark:text-white">
        <h2 className="text-xl font-bold mb-3">{title}</h2>
        <p className="mb-4">{message}</p>
        {children}
        <button
          type="button"
          onClick={onClose}
          className="mt-2 inline-flex justify-center rounded bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
