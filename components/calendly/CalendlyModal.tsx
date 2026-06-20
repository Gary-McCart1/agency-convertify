"use client";

import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { trackEvent } from "@/lib/gtag";

export default function CalendlyModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [meetingScheduled, setMeetingScheduled] = useState(false);

  const handleClose = () => {
    setMeetingScheduled(false);
    onClose();
  };

  // Load Calendly script when modal opens
  useEffect(() => {
    if (!open) return;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [open]);

  // ESC key + lock scroll
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Listen for successful Calendly bookings
  useEffect(() => {
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.origin !== "https://calendly.com") return;

      if (e.data.event === "calendly.event_scheduled") {
        trackEvent("schedule_direct_meeting");
        setMeetingScheduled(true);
      }
    };

    window.addEventListener("message", handleCalendlyEvent);

    return () => {
      window.removeEventListener("message", handleCalendlyEvent);
    };
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute left-4 top-4 z-10 rounded-full bg-black/10 px-4 py-2 text-sm font-medium transition hover:bg-black/20"
        >
          Close
        </button>

        {meetingScheduled ? (
          <div className="flex h-[900px] flex-col items-center justify-center px-8 text-center py-10">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
              <CheckCircle2 className="h-10 w-10 text-emerald-600" />
            </div>

            <h2 className="text-3xl font-bold text-zinc-900">
              Meeting Scheduled!
            </h2>

            <p className="mt-4 max-w-md text-zinc-500">
              Thanks for booking a time with me. You should receive a
              confirmation email from Calendly shortly. I look forward to
              speaking with you and helping you uncover opportunities to grow
              your business.
            </p>

            <button
              onClick={handleClose}
              className="mt-8 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02]"
            >
              Done
            </button>
          </div>
        ) : (
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/gwmccart3"
            style={{
              minWidth: "320px",
              height: "700px",
            }}
          />
        )}
      </div>
    </div>
  );
}