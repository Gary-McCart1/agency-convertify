"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const STEPS = [
  {
    id: "url",
    question: "What's your website URL?",
    placeholder: "https://yourwebsite.com",
    type: "url",
    helper: "We'll run a full audit on this page.",
  },

  {
    id: "business",
    question: "What type of business are you?",
    type: "select",
    options: [
      { label: "Local Service Business", value: "local" },
      { label: "E-Commerce", value: "ecommerce" },
      { label: "SaaS / Software", value: "saas" },
      { label: "Other", value: "other" },
    ],
  },

  {
    id: "challenge",
    question: "What's your biggest challenge right now?",
    type: "select",
    options: [
      { label: "Getting more traffic", value: "traffic" },
      { label: "Traffic isn't converting", value: "conversions" },
      { label: "I don't know what's working", value: "analytics" },
      { label: "Starting from scratch", value: "scratch" },
    ],
  },

  {
    id: "leadGoal",
    question: "How many new leads would you like each month?",
    type: "select",
    options: [
      { label: "1-10", value: "1_10" },
      { label: "10-25", value: "10_25" },
      { label: "25-50", value: "25_50" },
      { label: "50+", value: "50_plus" },
    ],
  },

  {
    id: "marketing",
    question: "How are you currently getting customers?",
    type: "select",
    options: [
      { label: "Referrals / Word of Mouth", value: "referrals" },
      { label: "Google Ads", value: "google_ads" },
      { label: "SEO / Google Maps", value: "seo" },
      { label: "Social Media", value: "social" },
      { label: "Multiple Channels", value: "multiple" },
    ],
  },

  {
    id: "budget",
    question: "What's your current monthly marketing budget?",
    type: "select",
    options: [
      { label: "Not investing currently", value: "none" },
      { label: "Under $500/mo", value: "under_500" },
      { label: "$500 - $2,000/mo", value: "500_2000" },
      { label: "$2,000 - $5,000/mo", value: "2000_5000" },
      { label: "$5,000+/mo", value: "5000_plus" },
    ],
  },

  {
    id: "name",
    question: "What's your name?",
    placeholder: "John Smith",
    type: "text",
    helper: "So I know who I'm recording the audit for.",
  },

  {
    id: "email",
    question: "Where should I send your audit?",
    placeholder: "you@company.com",
    type: "email",
    helper: "Your personalized Loom audit will arrive within 24 hours.",
  },
];

type FormData = Record<string, string>;

interface AuditFormProps {
  onClose: () => void;
}

export default function AuditForm({ onClose }: AuditFormProps) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const [inputValue, setInputValue] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const current = STEPS[step];
  const isLast = step === STEPS.length - 1;
  const progress = (step / STEPS.length) * 100;

  const handleNext = async () => {
    const value = inputValue.trim();
    if (!value) {
      setError("This field is required.");
      return;
    }

    // Basic URL validation
    if (current.type === "url") {
      try {
        new URL(value.startsWith("http") ? value : `https://${value}`);
      } catch {
        setError("Please enter a valid URL.");
        return;
      }
    }

    // Basic email validation
    if (current.type === "email" && !/\S+@\S+\.\S+/.test(value)) {
      setError("Please enter a valid email address.");
      return;
    }

    const updated = { ...formData, [current.id]: value };
    setFormData(updated);
    setError("");

    if (isLast) {
      setSubmitting(true);
      try {
        const res = await fetch("/api/audit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updated),
        });

        if (!res.ok) throw new Error("Submission failed");
        setSubmitted(true);
      } catch {
        setError("Something went wrong. Please try again.");
      } finally {
        setSubmitting(false);
      }
      return;
    }

    setStep((s) => s + 1);
    setInputValue("");
  };

  const handleSelect = (value: string) => {
    setInputValue(value);
    setError("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && current.type !== "select") handleNext();
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full p-2 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Progress Bar */}
        <div className="h-1.5 w-full bg-zinc-100">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>

        <div className="p-8">
          <AnimatePresence mode="wait">
            {submitted ? (
              // ===== SUCCESS STATE =====
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center py-6 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                  className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100"
                >
                  <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                </motion.div>
                <h2 className="text-2xl font-bold text-zinc-900">
                  You&apos;re on the list!
                </h2>
                <p className="mt-3 max-w-sm text-zinc-500">
                  I&apos;ll personally review{" "}
                  <span className="font-medium text-zinc-800">
                    {formData.url}
                  </span>{" "}
                  and send your Loom video audit to{" "}
                  <span className="font-medium text-zinc-800">
                    {formData.email}
                  </span>{" "}
                  within{" "}
                  <span className="font-medium text-zinc-800">24 hours</span>.
                </p>
                <p className="mt-4 text-sm text-zinc-400">
                  Check your spam folder if you don&apos;t see it.
                </p>
                <Button
                  onClick={onClose}
                  className="mt-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 font-medium text-white"
                >
                  Done
                </Button>
              </motion.div>
            ) : (
              // ===== FORM STEPS =====
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.25 }}
              >
                {/* Step counter */}
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-500">
                  Step {step + 1} of {STEPS.length}
                </p>

                {/* Question */}
                <h2 className="text-xl font-bold text-zinc-900 sm:text-2xl">
                  {current.question}
                </h2>

                {current.helper && (
                  <p className="mt-1 text-sm text-zinc-400">{current.helper}</p>
                )}

                {/* Input */}
                <div className="mt-6">
                  {current.type === "select" ? (
                    <div className="grid gap-3">
                      {current.options?.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => handleSelect(opt.value)}
                          className={`flex items-center justify-between rounded-xl border-2 px-4 py-3.5 text-left text-sm font-medium transition-all ${
                            inputValue === opt.value
                              ? "border-blue-500 bg-blue-50 text-blue-700"
                              : "border-zinc-200 text-zinc-700 hover:border-blue-300 hover:bg-zinc-50"
                          }`}
                        >
                          {opt.label}
                          {inputValue === opt.value && (
                            <CheckCircle2 className="h-4 w-4 text-blue-500" />
                          )}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <input
                      type={current.type}
                      value={inputValue}
                      onChange={(e) => {
                        setInputValue(e.target.value);
                        setError("");
                      }}
                      onKeyDown={handleKeyDown}
                      placeholder={current.placeholder}
                      autoFocus
                      className="w-full rounded-xl border-2 border-zinc-200 px-4 py-3.5 text-base text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all"
                    />
                  )}

                  {error && (
                    <p className="mt-2 text-sm text-red-500">{error}</p>
                  )}
                </div>

                {/* Actions */}
                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (step === 0) return onClose();
                      setStep((s) => s - 1);
                      setInputValue(formData[STEPS[step - 1].id] ?? "");
                      setError("");
                    }}
                    className="text-sm font-medium text-zinc-400 transition hover:text-zinc-700"
                  >
                    {step === 0 ? "Cancel" : "← Back"}
                  </button>

                  <Button
                    onClick={handleNext}
                    disabled={
                      submitting || (current.type === "select" && !inputValue)
                    }
                    className="group rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-2.5 font-semibold text-white shadow-lg transition-all hover:scale-[1.03] disabled:opacity-50"
                  >
                    {submitting ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : isLast ? (
                      "Send My Audit"
                    ) : (
                      <>
                        Continue
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
