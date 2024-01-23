import React from 'react';
import { RESUME_PATH } from "../config/root.link";

const Header = () => {
  return (
    <nav className="sticky w-full space-x-10 mb-10 mx-auto bg-black top-0 right-1/4 z-10">
      <div className="flex p-5 justify-center items-center">
        <ul className="flex flex-row space-x-4 md:space-x-10 md:text-xl justify-center md:justify-end font-thin">
          <li>
            <a
              href="#Home"
              className="py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#Experience"
              className="py-1 px-5 hover:hover-gradient focus:hover-gradient rounded-lg"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#Skill"
              className="py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg"
            >
              Skill
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg"
            >
              Contact
            </a>
          </li>

          <li>
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noreferrer"
              className="py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header