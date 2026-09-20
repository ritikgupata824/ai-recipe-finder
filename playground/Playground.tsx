"use client";

import { useState } from "react";
import Modal from "./Modal";
import Tabs from "./Tabs";
import Disclosure from "./Disclosure";

export default function Playground() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="mx-auto max-w-4xl space-y-8 p-8">
      <div>
        <h1 className="text-4xl font-bold">Accessible Components Playground</h1>
        <p className="mt-2 text-gray-600">
          Keyboard-accessible Modal, Tabs, and Disclosure components.
        </p>
      </div>

      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold">Modal Dialog</h2>
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="mt-4 rounded-lg bg-black px-4 py-2 text-white"
        >
          Open Modal
        </button>

        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      </section>

      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-2xl font-semibold">Tabs</h2>
        <Tabs />
      </section>

      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-2xl font-semibold">Disclosure</h2>
        <Disclosure />
      </section>
    </main>
  );
}
