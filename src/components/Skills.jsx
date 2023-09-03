import React from "react";
import skillsData from "../data";
import Skill from "./Skill";

export default function Skills() {
  return (
    <div className="flex flex-col space-y-6 mx-8 md:grid md:grid-cols-3 md:gap-8 md:mx-48">
      {skillsData.map((skill, index) => (
        <Skill key={index} {...skill} />
      ))}
    </div>
  );
}
