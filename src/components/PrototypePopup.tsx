import React from "react";
import { Info, X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrototypePopup({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-start">
          <div className="flex-shrink-0">
            <Info className="w-6 h-6 text-blue-600" />
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Prototype Application
            </h3>
            <p className="text-gray-600 mb-4">
              This is a prototype version of Vac Ex Dispatch. Some features may
              be limited or unavailable, and information displayed might not
              reflect real-world data.
            </p>
            <button
              onClick={onClose}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Enter Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
