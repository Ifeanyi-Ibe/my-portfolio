import React from "react";
import { AiFillGithub } from "react-icons/ai";

export default function Projects() {
  return (
    <div className="md:mx-48 mt-32">
      <div className="flex justify-around md:justify-between mb-16">
        <p className="text-2xl md:text-5xl font-bold">Projects</p>
        <p className="md:mt-8 underline text-center">
          <a href="mailto:phenomenonif@gmailcom">
            <span className="text-sm font-bold">CONTACT ME</span>
          </a>
        </p>
      </div>
      <div className="flex flex-col space-y-8 md:grid md:grid-cols-2 md:gap-8">
        <div className="flex flex-col space-y-2">
          <img src="lit-movies.png" alt="lit-movies" />
          <div className="mx-4 md:mx-0 flex space-x-4">
            <a href="https://lit-movies.onrender.com/" target="_blank">
              <p className="cursor-pointer text-blue-500 underline">
                Movie web app
              </p>
            </a>
            <a
              href="https://github.com/Ifeanyi-Ibe/lit-movies"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="text-white text-xl cursor-pointer" />
            </a>
          </div>
          <p className="mx-4 md:mx-0 text-xs font-semibold tech-gap-sm md:tech-gap">
            HTML TAILWIND REACT
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <img src="flourish-api.png" alt="flourish-api" />
          <div className="mx-4 md:mx-0 flex space-x-4">
            <a
              href="https://flourish-bank-service.onrender.com/accounts/doc/"
              target="_blank"
            >
              <p className="cursor-pointer text-blue-500 underline">
                Bank Account API
              </p>
            </a>
            <a
              href="https://github.com/Ifeanyi-Ibe/flourish-bank"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="text-white text-xl cursor-pointer" />
            </a>
          </div>

          <p className="mx-4 md:mx-0 text-xs font-semibold tech-gap-sm md:tech-gap">
            TYPESCRIPT EXPRESS.JS MONGODB MONGOOSE
          </p>
        </div>
      </div>
    </div>
  );
}
