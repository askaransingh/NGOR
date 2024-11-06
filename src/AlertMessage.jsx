// AlertMessage.jsx
import React from "react";
import { useAlert } from "./AlertContext"; // Ensure correct path

const AlertMessage = () => {
  const { alertMessage } = useAlert();

  // Don't render anything if there's no message
  if (!alertMessage) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-red-600 text-white py-3 text-center z-50">
      {alertMessage}
    </div>
  );
};

export default AlertMessage;
