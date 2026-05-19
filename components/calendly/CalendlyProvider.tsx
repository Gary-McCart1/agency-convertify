"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import CalendlyModal from "./CalendlyModal";

type CalendlyContextType = {
  open: () => void;
  close: () => void;
};

const CalendlyContext = createContext<CalendlyContextType | null>(null);

export function useCalendly() {
  const ctx = useContext(CalendlyContext);
  if (!ctx) throw new Error("useCalendly must be used inside provider");
  return ctx;
}

export default function CalendlyProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <CalendlyContext.Provider value={{ open, close }}>
      {children}

      <CalendlyModal open={isOpen} onClose={close} />
    </CalendlyContext.Provider>
  );
}