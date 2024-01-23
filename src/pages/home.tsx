import React, { useEffect } from "react";
import Image from "next/image";
import {
  FRONT_PAGE_NAME,
  FRONT_PAGE_DESC,
  PROFILE_DESCRIPTION,
} from "@/config/root.link";
import { motion } from "framer-motion";

const Home = () => {
  // useEffect(() => {
  //   initAOS();
  // }, []);

  return (
    <div id="Home">
      <section className="h-screen w-full mx-auto max-w-screen-lg my-18 px-5 flex flex-col flex-wrap space-y-16 md:space-y-0 patterns justify-center">
        <div className="max-w-md space-y-5 mb-8">
          <motion.div
            initial={{ opacity: 0, x: "-700%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl font-bold md:text-7xl">
              Hello. I’m {FRONT_PAGE_NAME}
            </h1>
            <p className="tracking-wide leading-relaxed">{FRONT_PAGE_DESC} </p>
          </motion.div>
        </div>
        <div className="flex w-full justify-center items-center">
          <div className="container flex flex-row justify-center items-center">
            <div className="pr-10">
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <p>{PROFILE_DESCRIPTION}</p>
              </motion.div>
            </div>
            <div className="border-profile rounded-2xl w-full p-1 justify-end items-end">
              <motion.div
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <Image
                  src="/images/profile.jpg"
                  alt="My Profile"
                  className="rounded-2xl"
                  width={300}
                  height={300}
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
