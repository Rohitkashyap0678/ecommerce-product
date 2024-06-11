import React, { useEffect, useState } from "react";
import { Clear } from "@mui/icons-material";

const Toast = ({ type, text }) => {
  let bgColor, borderColor, textColor;

  switch (type) {
    case "warning":
      bgColor = "bg-yellow-100";
      borderColor = "border-yellow-600";
      textColor = "text-yellow-700";
      break;
    case "success":
      bgColor = "bg-green-100";
      borderColor = "border-green-600";
      textColor = "text-green-700";
      break;
    case "error":
      bgColor = "bg-red-100";
      borderColor = "border-red-600";
      textColor = "text-red-700";
      break;
    case "pending":
      bgColor = "bg-blue-100";
      borderColor = "border-blue-600";
      textColor = "text-blue-700";
      break;
    default:
      bgColor = "bg-gray-100";
      borderColor = "border-gray-600";
      textColor = "text-gray-700";
  }

  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showToast && (
        <div
          className={`fixed items-center gap-4 flex bottom-5 !font-semibold right-5 p-4 rounded-md border-4 ${bgColor} ${borderColor} ${textColor} toast-slide`}
        >
          {text}
          <Clear className="cursor-pointer sabsolute top-2 right-2" onClick={() => setShowToast(false)} />
        </div>
      )}
    </>
  );
};

export default Toast;
