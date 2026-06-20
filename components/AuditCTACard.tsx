"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const STEPS = [
  {
    id: "name",
    question: "What's your name?",
    placeholder: "John Smith",
    type: "text",
    helper: "So I know who I'm recording the audit for.",
  },
  {
    id: "url",
    question: "What's your website URL or company name?",
    placeholder: "https://yourwebsite.com",
    type: "text", // Changed from "url" to "text" to permit flexible entries safely
    helper: "We'll run a full audit on this page.",
  },
  {
    id: "challenge",
    question: "What's your main business challenge right now?",
    type: "select",
    options: [
      { label: "Our phone isn't ringing enough", value: "low_leads" },
      { label: "We get web traffic/clicks, but no actual jobs", value: "poor_conversion" },
      { label: "We want to dominate our local city on Google", value: "local_dominance" },
      { label: "Tired of paying for junk shared leads (Angi/HomeAdvisor)", value: "anti_lead_brokers" },
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
    id: "email",
    question: "Where should I send your audit?",
    placeholder: "you@company.com",
    type: "email",
    helper: "Your personalized Loom audit will arrive within 24 hours.",
  },
];

type FormData = Record<string, string>;

export default function AuditCTACard() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const [inputValue, setInputValue] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = back

  const current = STEPS[step];
  const isLast = step === STEPS.length - 1;
  const progress = (step / STEPS.length) * 100;

  // Central processing function to execute safe state updates across fields
  const processNextStep = async (valueToCommit: string) => {
    const finalValue = valueToCommit.trim();

    if (!finalValue) {
      setError("This field is required.");
      return;
    }

    if (current.type === "email" && !/\S+@\S+\.\S+/.test(finalValue)) {
      setError("Please enter a valid email address.");
      return;
    }

    const updatedFormData = { ...formData, [current.id]: finalValue };
    setFormData(updatedFormData);
    setError("");

    if (isLast) {
      setSubmitting(true);
      try {
        const res = await fetch("/api/audit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedFormData),
        });
        
        if (!res.ok) {
          const resError = await res.json().catch(() => ({}));
          throw new Error(resError.error || "Submission failed");
        }
        
        setSubmitted(true);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
        setError(message);
      } finally {
        setSubmitting(false);
      }
      return;
    }

    const nextStepIndex = step + 1;
    setDirection(1);
    setStep(nextStepIndex);
    // Hydrate field memory space if returning backwards earlier
    setInputValue(updatedFormData[STEPS[nextStepIndex].id] || "");
  };

  const handleNext = () => {
    processNextStep(inputValue);
  };

  const handleBack = () => {
    if (step === 0) return;
    setDirection(-1);
    const prevStepIndex = step - 1;
    setStep(prevStepIndex);
    setInputValue(formData[STEPS[prevStepIndex].id] ?? "");
    setError("");
  };

  const handleSelect = (selectedValue: string) => {
    setInputValue(selectedValue);
    setError("");
    // Clean delay to avoid shifting layout views during transition animations
    setTimeout(() => {
      processNextStep(selectedValue);
    }, 250);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && current.type !== "select") handleNext();
  };

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -40 }),
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 pt-24 mt-5" id="quiz">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-50 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-indigo-50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-sm">
            <Sparkles className="h-4 w-4" />
            Complimentary Growth Audit
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-black md:text-5xl">
            Find Out Exactly What&apos;s
            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
              {" "}
              Costing You Leads
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600">
            Answer a few quick questions and I&apos;ll personally record a Loom
            video walkthrough of your website, highlighting what to fix first.
          </p>
        </div>

        {/* Quiz Card */}
        <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-3xl border border-black/5 bg-white shadow-2xl">
          {/* Progress bar */}
          <div className="h-1.5 w-full bg-zinc-100">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
              animate={{ width: submitted ? "100%" : `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>

          <div className="p-8 md:p-10">
            <AnimatePresence mode="wait" custom={direction}>
              {submitted ? (
                // ===== SUCCESS STATE =====
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center py-6 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 12,
                      delay: 0.1,
                    }}
                    className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100"
                  >
                    <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-zinc-900">
                    You&apos;re on the list!
                  </h3>

                  <p className="mt-4 max-w-sm text-zinc-500">
                    I&apos;ll personally review{" "}
                    <span className="font-semibold text-zinc-800">
                      {formData.url}
                    </span>{" "}
                    and send your Loom video audit to{" "}
                    <span className="font-semibold text-zinc-800">
                      {formData.email}
                    </span>{" "}
                    within{" "}
                    <span className="font-semibold text-zinc-800">
                      24 hours
                    </span>
                    .
                  </p>

                  <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      No commitment required
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      Check your spam folder too
                    </span>
                  </div>
                </motion.div>
              ) : (
                // ===== FORM STEPS =====
                <motion.div
                  key={step}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  {/* Step counter */}
                  <div className="mb-6 flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-500">
                      Step {step + 1} of {STEPS.length}
                    </p>
                    {step > 0 && (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="text-xs font-medium text-zinc-400 transition hover:text-zinc-700"
                      >
                        ← Back
                      </button>
                    )}
                  </div>

                  {/* Question */}
                  <h3 className="text-xl font-bold text-zinc-900 sm:text-2xl">
                    {current.question}
                  </h3>

                  {current.helper && (
                    <p className="mt-1.5 text-sm text-zinc-400">
                      {current.helper}
                    </p>
                  )}

                  {/* Input Elements */}
                  <div className="mt-6">
                    {current.type === "select" ? (
                      <div className="grid gap-2.5 sm:grid-cols-2">
                        {current.options?.map((opt) => (
                          <motion.button
                            key={opt.value}
                            type="button"
                            onClick={() => handleSelect(opt.value)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`flex items-center justify-between rounded-xl border-2 px-4 py-3.5 text-left text-sm font-medium transition-all ${
                              inputValue === opt.value
                                ? "border-blue-500 bg-blue-50 text-blue-700"
                                : "border-zinc-200 text-zinc-700 hover:border-blue-300 hover:bg-zinc-50"
                            }`}
                          >
                            <span>{opt.label}</span>
                            {inputValue === opt.value && (
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-500" />
                            )}
                          </motion.button>
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
                        className="w-full rounded-xl border-2 border-zinc-200 px-4 py-3.5 text-base text-zinc-900 placeholder:text-zinc-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                      />
                    )}

                    {error && (
                      <p className="mt-2 text-sm text-red-500">{error}</p>
                    )}
                  </div>

                  {/* Continue button — only shown for open inputs */}
                  {current.type !== "select" && (
                    <div className="mt-6">
                      <Button
                        onClick={handleNext}
                        disabled={submitting || !inputValue.trim()}
                        className="group h-12 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-base font-semibold text-white shadow-lg transition-all hover:scale-[1.01] disabled:opacity-50"
                      >
                        {submitting ? (
                          <Loader2 className="h-5 w-5 animate-spin" />
                        ) : isLast ? (
                          <>
                            Send My Audit
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </>
                        ) : (
                          <>
                            Continue
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Trust signals */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-zinc-400">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Takes less than 2 minutes
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Delivered within 24 hours
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            No sales call required
          </span>
        </div>
      </div>
    </section>
  );
}