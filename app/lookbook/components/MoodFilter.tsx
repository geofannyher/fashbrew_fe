import React, { useState } from "react";

const moods = [
  { id: "all", label: "All Looks", active: true },
  { id: "date", label: "Date Look", active: false },
  { id: "weekend", label: "Weekend Chill", active: false },
  { id: "office", label: "Office Casual", active: false },
  { id: "rainy", label: "Rainy Day", active: false },
  { id: "monochrome", label: "Monochrome", active: false },
  { id: "brunch", label: "Brunch Ready", active: false },
];

interface MoodFilterProps {
  onFilterChange: (moodId: string) => void;
}

const MoodFilter = ({ onFilterChange }: MoodFilterProps) => {
  const [activeMood, setActiveMood] = useState("all");

  const handleMoodClick = (moodId: string) => {
    setActiveMood(moodId);
    onFilterChange(moodId);
  };

  return (
    <div className="px-4 py-6 bg-white">
      <div className="container max-w-7xl">
        <h2 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-4">
          Find Your Mood
        </h2>

        <div className="flex overflow-x-auto scrollbar-hide gap-3 pb-2">
          {moods.map((mood) => (
            <button
              key={mood.id}
              onClick={() => handleMoodClick(mood.id)}
              className={`
              flex-shrink-0 px-4 py-2 rounded-full text-sm font-light transition-all duration-300
              ${
                activeMood === mood.id
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }
            `}
            >
              {mood.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoodFilter;
