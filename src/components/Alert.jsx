import React from 'react';
import { CheckCircle, AlertTriangle } from 'lucide-react';

const Alert = ({ type = "success", text = "" }) => {
  const isError = type === "danger";

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div
        className={`flex items-center gap-3 px-5 py-3 rounded-xl shadow-lg text-white animate-fade-in-up transition-all duration-300 ${
          isError ? 'bg-red-500' : 'bg-green-600'
        }`}
        role="alert"
      >
        {isError ? <AlertTriangle size={20} /> : <CheckCircle size={20} />}
        <div className="text-sm font-medium">
          {text || (isError ? "Something went wrong!" : "Action completed!")}
        </div>
      </div>
    </div>
  );
};

export default Alert;
