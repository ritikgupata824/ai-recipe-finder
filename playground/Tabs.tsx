"use client";

import { useId, useState } from "react";

type Tab = {
  id: string;
  label: string;
  content: string;
};

const tabs: Tab[] = [
  {
    id: "overview",
    label: "Overview",
    content: "This is the overview panel.",
  },
  {
    id: "details",
    label: "Details",
    content: "This is the details panel.",
  },
  {
    id: "settings",
    label: "Settings",
    content: "This is the settings panel.",
  },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const baseId = useId();

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    let nextIndex = index;

    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % tabs.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActiveTab(nextIndex);

    const nextButton = document.getElementById(
      `${baseId}-tab-${nextIndex}`
    );

    nextButton?.focus();
  };

  const activePanelId = `${baseId}-panel-${tabs[activeTab].id}`;

  return (
    <section>
      <div
        role="tablist"
        aria-label="Recipe information"
        className="flex gap-2 border-b border-gray-300"
      >
        {tabs.map((tab, index) => {
          const tabId = `${baseId}-tab-${tab.id}`;

          return (
            <button
              key={tab.id}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={activePanelId}
              tabIndex={activeTab === index ? 0 : -1}
              onClick={() => setActiveTab(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className="rounded-t-lg px-4 py-2 font-medium"
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        id={activePanelId}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${tabs[activeTab].id}`}
        tabIndex={0}
        className="mt-4 rounded-lg border border-gray-200 p-4"
      >
        {tabs[activeTab].content}
      </div>
    </section>
  );
}
