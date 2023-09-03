import React from "react";

export default function Profile() {
  return (
    <div>
      <div className="flex flex-col mx-12 md:flex-row md:justify-between md:mx-48 pt-8 pb-16">
        <img src="dev_anyi.jpg" className="md:hidden profile-pic-sm mb-4" />
        <div className="flex flex-col">
          <p className="text-3xl font-bold">Hi!</p>
          <p className="text-3xl font-bold">
            I am <span classname="text-blue-800">Ifeanyi Ibe</span>.
          </p>
          <div>
            <p className="my-5 text-sm max-w-fit md:max-w-screen-md md:pr-12">
              A backend software engineer based in Lagos, Nigeria. A firm
              believer in strength in diversity, I love meeting and working with
              brilliant people from various backgrounds and cultures.
            </p>
            <p className="md:mt-8 underline text-center">
              <a href="mailto:phenomenonif@gmailcom">
                <span className="text-sm font-bold">CONTACT ME</span>
              </a>
            </p>
          </div>
        </div>
        <img src="dev_anyi.jpg" className="hidden md:block profile-pic" />
      </div>
    </div>
  );
}
