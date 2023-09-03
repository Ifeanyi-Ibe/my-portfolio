import React from "react";
import skillsData from "../data";
import Skill from "./Skill";

export default function Skills() {
  return (
    <div className="md:grid grid-cols-3 gap-8 mx-48">
      {skillsData.map((skill, index) => (
        <Skill key={index} {...skill} />
      ))}
    </div>
  );
}
