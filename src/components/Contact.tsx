import React from "react";
import Image from 'next/image';
import {
  ADDRESS,
  PHONE,
  EMAIL_ID,
  FIRST_NAME,
  GITHUB_USERNAME,
  LAST_NAME,
  LINKEDIN_USERNAME,
  RESUME_PATH,
  WHATSAPP_ID,
} from "../config/root.link";
const Contact = () => {
  return (
    <div id="contact" className="w-full bg-gray py-[12rem] bg-black">
      <section className="mx-auto max-w-screen-lg my-18 px-5 flex flex-col flex-wrap">
        <header className="px-5 text-2xl font-bold pt-10">
          <h2>Contact Me</h2>
          <p className="text-base font-thin">Let us connect!</p>
        </header>
        <div className="md:mx-6 flex flex-col flex-wrap md:flex-row justify-between">
          <div className="md:w-6/12 md:px-0 p-5 my-5">
            <div>
              <p className="font-bold">
                {FIRST_NAME} {LAST_NAME}
              </p>
              <p className="font-thin">{ADDRESS}</p>
              <p className="font-thin">{PHONE}</p>
              <a
                href={`mailto: ${EMAIL_ID}`}
                className="border-b-2 mt-3 inline-block border-gray-500"
              >
                {EMAIL_ID}
              </a>
            </div>
            <a
              className="border-b-2 mt-3 inline-block border-gray-500"
              href={RESUME_PATH}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <div className="flex flex-row flex-wrap mt-7">
              <div className="mr-4">
                <a
                  href={`https://www.linkedin.com/in/${LINKEDIN_USERNAME}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm">
                    <Image
                        src="/images/icons/linkedin.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="mr-1"
                    />
                    LinkedIn
                  </span>
                </a>
              </div>

              <div className="mr-4">
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm">
                    <Image
                      src="./images/icons/github.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="mr-1"
                    />
                    GitHub
                  </span>
                </a>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_ID}`}
                target="_blank"
                rel="noreferrer"
              >
                <span className="mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm">
                  <Image
                    src="./images/icons/whatsapp-icon.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="mr-1"
                  />
                  Whatsapp
                </span>
              </a>
            </div>
          </div>

          {/* <div className="bg-gray px-5 py-10 md:py-8 sm:p-8 my-2 md:rounded-lg shadow-lg  justify-between w-full  md:w-6/12 ">
            <form
              className="flex flex-col space-y-3 m-auto w-full"
              name="contact"
              method="post"
            >
              <input type="hidden" name="form-name" value="contact" />

              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="gradient"
                required
              ></input>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="gradient"
                required
              ></input>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="25"
                rows="5"
                className="gradient"
                required
              ></textarea>
              <button
                type="submit"
                className="border border-gray-500 p-2 rounded-lg w-auto mr-auto shadow-md"
              >
                Send Message
              </button>
            </form>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Contact;
