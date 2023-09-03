import React from "react";

export default function Skill({ technology, years }) {
  return (
    <div className="flex flex-col items-center md:space-y-2">
      <p className="text-2xl font-bold">{technology}</p>
      <p className="text-sm">{years}</p>
    </div>
  );
}
