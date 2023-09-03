import React from "react";

export default function Profile() {
  return (
    <div>
      <div className="flex md:justify-between mx-48 pt-8 pb-16">
        <div className="flex flex-col">
          <p className="text-6xl font-bold">Hi!</p>
          <p className="text-6xl font-bold">
            I am <span classname="text-blue-800">Ifeanyi Ibe</span>.
          </p>
          <div>
            <p className="my-5 text-sm max-w-fit">
              A backend software engineer based in Lagos, Nigeria. A firm
              believer in strength in diversity, I love meeting and working with
              brilliant people from various backgrounds and cultures.
            </p>
            <p className="mt-8 underline">
              <a href="mailto:phenomenonif@gmailcom">
                <span className="text-sm font-bold">CONTACT ME</span>
              </a>
            </p>
          </div>
        </div>
        <img src="dev_anyi.jpg" className="profile-pic" />
      </div>
    </div>
  );
}
