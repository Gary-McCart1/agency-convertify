"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/gtag";

const STEPS = [
  {
    id: "name",
    question: "What name should I address your video to?",
    placeholder: "John Smith",
    type: "text",
    helper: "So I know who I'm recording this personal walkthrough for.",
  },
  {
    id: "business_name",
    question: "What is your business name or Google Map name?",
    placeholder: "Apex Plumbing & HVAC",
    type: "text",
    helper: "We will pull up your active live listing to run a direct map audit.",
  },
  {
    id: "trade",
    question: "What is your main contractor trade?",
    type: "select",
    options: [
      { label: "Roofing & Exteriors", value: "roofing" },
      { label: "Plumbing, HVAC, or Electrical", value: "mep" },
      { label: "Landscaping & Tree Service", value: "landscaping" },
      { label: "Remodeling & Handyman Services", value: "remodeling" },
      { label: "Other Home Service Trade", value: "other_trade" },
    ],
  },
  {
    id: "challenge",
    question: "What's your biggest business headache right now?",
    type: "select",
    options: [
      {
        label: "Tired of paying for junk shared leads (Angi / HomeAdvisor)",
        value: "anti_lead_brokers",
      },
      {
        label: "We are stuck outside the top 3 spots on Google Maps",
        value: "low_map_ranking",
      },
      {
        label: "We get map clicks, but our competitor has way more reviews",
        value: "poor_social_proof",
      },
      {
        label: "We want to pull high-paying clients from nearby towns",
        value: "radius_expansion",
      },
    ],
  },
  {
    id: "review_process",
    question: "How do you currently ask clients for 5-star reviews?",
    type: "select",
    options: [
      { label: "We ask verbally but forget to follow up", value: "verbal" },
      { label: "We send manual texts or emails later on", value: "manual" },
      { label: "We don't really have a strict process yet", value: "none" },
      { label: "We use an automated system/software", value: "automated" },
    ],
  },
  {
    id: "email",
    question: "Where should I text or email your video link?",
    placeholder: "you@company.com",
    type: "email",
    helper: "Your custom, no-BS Loom map breakdown arrives here in 24 hours.",
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
  const [startedQuiz, setStartedQuiz] = useState(false);
  const current = STEPS[step];
  const isLast = step === STEPS.length - 1;
  const progress = (step / STEPS.length) * 100;

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
        const message =
          err instanceof Error
            ? err.message
            : "Something went wrong. Please try again.";
        setError(message);
      } finally {
        setSubmitting(false);
        trackEvent("submit_lead_quiz");
      }
      return;
    }

    const nextStepIndex = step + 1;
    setDirection(1);
    setStep(nextStepIndex);
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

  const handleFirstInteraction = () => {
    if (!startedQuiz) {
      trackEvent("start_lead_quiz");
      setStartedQuiz(true);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-16" id="quiz">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-50/70 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-indigo-50/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold text-blue-600 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Free Local 3-Pack Video Audit
          </div>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            See Exactly Why Competitors Are
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}
              Taking Your Local Calls
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Tell me what you do, and I will personally shoot a raw Loom video analyzing your Google Maps listing, local search footprint, and missing lead leaks.
          </p>
        </div>

        {/* Quiz Card */}
        <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          {/* Progress bar */}
          <div className="h-1.5 w-full bg-slate-100">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 to-indigo-600"
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
                    transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
                    className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100"
                  >
                    <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Audit Blueprint Locked In!
                  </h3>

                  <p className="mt-3 max-w-sm text-sm text-slate-500 leading-relaxed">
                    I am tracking down{" "}
                    <span className="font-bold text-slate-800">
                      {formData.business_name}
                    </span>{" "}
                    right now. Your custom dashboard overview will hit{" "}
                    <span className="font-bold text-slate-800">
                      {formData.email}
                    </span>{" "}
                    within the next <span className="font-bold text-slate-800">24 hours</span>.
                  </p>

                  <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      No pitch or high-pressure calls
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      Check inbox & junk folder
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
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      Step {step + 1} of {STEPS.length}
                    </p>
                    {step > 0 && (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="text-xs font-semibold text-slate-400 transition hover:text-slate-700"
                      >
                        ← Go Back
                      </button>
                    )}
                  </div>

                  {/* Question */}
                  <h3 className="text-xl font-bold text-slate-900 sm:text-2xl tracking-tight">
                    {current.question}
                  </h3>

                  {current.helper && (
                    <p className="mt-1 text-sm text-slate-400">
                      {current.helper}
                    </p>
                  )}

                  {/* Input Elements */}
                  <div className="mt-6">
                    {current.type === "select" ? (
                      <div className="grid gap-3 sm:grid-cols-1">
                        {current.options?.map((opt) => (
                          <motion.button
                            key={opt.value}
                            type="button"
                            onClick={() => handleSelect(opt.value)}
                            whileHover={{ scale: 1.005 }}
                            whileTap={{ scale: 0.995 }}
                            className={`flex items-center justify-between rounded-xl border-2 px-5 py-4 text-left text-sm font-semibold transition-all ${
                              inputValue === opt.value
                                ? "border-blue-600 bg-blue-50/50 text-blue-700"
                                : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                            }`}
                          >
                            <span>{opt.label}</span>
                            {inputValue === opt.value && (
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
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
                          handleFirstInteraction();
                        }}
                        onKeyDown={handleKeyDown}
                        placeholder={current.placeholder}
                        className="w-full rounded-xl border-2 border-slate-200 px-4 py-4 text-base text-slate-900 placeholder:text-slate-400 transition-all focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-50"
                      />
                    )}

                    {error && (
                      <p className="mt-2 text-sm font-medium text-red-500">{error}</p>
                    )}
                  </div>

                  {/* Continue button — only shown for open inputs */}
                  {current.type !== "select" && (
                    <div className="mt-6">
                      <Button
                        onClick={handleNext}
                        disabled={submitting || !inputValue.trim()}
                        className="group h-13 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-base font-bold text-white shadow-md transition-all hover:opacity-95 disabled:opacity-50"
                      >
                        {submitting ? (
                          <Loader2 className="h-5 w-5 animate-spin mx-auto" />
                        ) : isLast ? (
                          <span className="flex items-center justify-center gap-2">
                            Generate My Custom Audit
                            <ArrowRight className="h-5 w-5" />
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            Continue
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                          </span>
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
        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs font-semibold text-slate-400">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Takes 45 seconds
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Delivered directly via video
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            No cold sales calls required
          </span>
        </div>
      </div>
    </section>
  );
}