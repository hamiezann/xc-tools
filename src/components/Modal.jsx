import React from "react";
import { X } from "lucide-react";

const colorVariants = {
    red: "from-red-700 to-red-300",
    blue: "from-blue-700 to-blue-300",
    green: "from-green-700 to-green-300",
    purple: "from-purple-700 to-purple-300",
    pink: "from-pink-700 to-pink-300",
};

function BasicModal({ isOpen, modalColor = "blue", onClose, title, children }) {
    if (!isOpen) return null;

    const gradient = colorVariants[modalColor] || colorVariants.blue;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn">
            <div
                className={`relative w-full max-w-md rounded-2xl bg-gradient-to-br ${gradient} p-6 shadow-2xl transform transition-all animate-scaleIn`}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 rounded-full bg-gray-100 p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition"
                >
                    <X className="h-5 w-5" />
                </button>

                {/* Title */}
                {title && (
                    <h2 className="mb-4 text-2xl font-semibold text-white text-center">
                        {title}
                    </h2>
                )}

                {/* Body */}
                <div className="text-white text-center">{children}</div>
            </div>
        </div>
    );
}

export default BasicModal;
