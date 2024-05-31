"use client";

import { Toaster as RadToaster } from "sonner";

export function Toaster() {
  return (
    <RadToaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: "rgba(var(--active))",
          color: "rgba(var(--secondary))",
          border: "1px solid rgba(var(--separator))",
        },
      }}
    />
  );
}
