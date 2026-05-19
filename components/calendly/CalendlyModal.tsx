"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

export default function CalendlyModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // Load Calendly script once when opened
  useEffect(() => {
    if (open) {
      const script = document.createElement("script");
      script.src =
        "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [open]);

  // ESC to close + lock scroll
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose} // ✅ click outside closes
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()} // ✅ prevents inner click closing
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-md hover:bg-zinc-100"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Calendly Embed */}
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/gwmccart3"
          style={{ minWidth: "320px", height: "700px" }}
        />
      </div>
    </div>
  );
}