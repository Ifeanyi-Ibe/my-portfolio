import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex flex-col items-center space-y-5 mx-24 md:flex-row md:justify-between md:mx-48 py-6">
      <h1 className="text-white font-sm font-bold text-xl">{`<dev_anyi>`}</h1>
      <div className="flex md:justify-between space-x-4 md:space-x-6">
        <a
          href="https://www.github.com/Ifeanyi-Ibe?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="text-white text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/ifeanyi-ibe-2b3283199/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className="text-2xl" />
        </a>
        <a
          href="https://twitter.com/dev_anyi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillTwitterCircle className="text-2xl" />
        </a>
      </div>
    </div>
  );
}
