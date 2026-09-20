"use client";

import { useId, useState } from "react";

export default function Disclosure() {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  return (
    <section className="rounded-lg border border-gray-300">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center justify-between px-4 py-3 text-left font-semibold"
      >
        <span>What is this component?</span>
        <span aria-hidden="true">{open ? "-" : "+"}</span>
      </button>

      <div
        id={contentId}
        hidden={!open}
        className="border-t border-gray-200 px-4 py-3 text-gray-600"
      >
        This disclosure follows the WAI-ARIA disclosure pattern and can be
        operated with the keyboard.
      </div>
    </section>
  );
}
