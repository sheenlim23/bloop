import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import clsx from "clsx";

type ToastType = "danger" | "success" | "info" | "warning";
type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

const typeStyles = {
  danger: {
    iconBg: "bg-red-100 dark:bg-red-800",
    iconText: "text-red-500 dark:text-red-200",
  },
  success: {
    iconBg: "bg-green-100 dark:bg-green-800",
    iconText: "text-green-500 dark:text-green-200",
  },
  info: {
    iconBg: "bg-blue-100 dark:bg-blue-800",
    iconText: "text-blue-500 dark:text-blue-200",
  },
  warning: {
    iconBg: "bg-yellow-100 dark:bg-yellow-800",
    iconText: "text-yellow-500 dark:text-yellow-200",
  },
};

const positionStyles: Record<ToastPosition, string> = {
  "top-left": "top-4 left-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  "bottom-right": "bottom-4 right-4",
};

function ToastComponent({
  message,
  type = "danger",
  duration = 2000,
  onClose,
  icon,
  position = "bottom-right",
}: {
  message: string;
  type: ToastType;
  duration?: number;
  onClose: () => void;
  icon?: React.ReactNode;
  position?: ToastPosition;
}) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={clsx(
        "fixed z-[999999999] flex items-center w-full max-w-xs p-4 rounded-lg shadow-sm text-gray-400 bg-gray-800",
        positionStyles[position]
      )}
      role="alert"
    >
      <div
        className={clsx(
          "flex items-center justify-center shrink-0 w-8 h-8 rounded-lg",
          typeStyles[type].iconBg,
          typeStyles[type].iconText
        )}
      >
        {icon}
      </div>
      <div className="ms-3 text-sm font-normal">{message}</div>
      <button
        onClick={onClose}
        className="ms-auto -mx-1.5 -my-1.5 text-gray-400 hover:text-gray-900 rounded-lg p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-700"
      >
        <svg
          className="w-3 h-3"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
}

export function showToast(
  message: string,
  type: ToastType = "danger",
  duration = 3000,
  icon?: React.ReactNode,
  position?: ToastPosition
) {
  const div = document.createElement("div");
  document.body.appendChild(div);

  const root = ReactDOM.createRoot(div);

  const remove = () => {
    root.unmount();
    div.remove();
  };

  root.render(
    <ToastComponent
      message={message}
      type={type}
      duration={duration}
      onClose={remove}
      icon={icon}
      position={position}
    />
  );
}
