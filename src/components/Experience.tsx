import React from "react";
import workHistory from "../config/ExData";
import "./style.ex.css";
import { motion } from "framer-motion";

function Experience() {
  const transition = {
    type: "spring",
    damping: 25,
    stiffness: 120,
  };

  return (
    <div
      id="Experience"
      className="h-screen w-full mx-auto my-18 px-5 bg-black"
    >
      <section className="mx-auto max-w-screen-lg my-28 px-5">
        <header className="text-2xl font-bold pt-10 mb-5">
          <h2>Experience</h2>
        </header>
        <div className="main-cont">
          <section id="cd-timeline" className="cd-container">
            {/*  */}
            {workHistory &&
              workHistory.map((work) => (
                <div className="cd-timeline-block">
                  <div className="cd-timeline-img cd-picture"></div>
                  <motion.div
                    animate={{ opacity: 1, x: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <div className="cd-timeline-content">
                      <h1 className="uppercase font-bold text-2xl pl-3 pt-2 flex">
                        {work?.companyName}
                        <span>
                          {work?.link && (
                            <div className="w-auto flex space-x-5 ml-2 mt-1x relative">
                              <a
                                href={work.link}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img
                                  src="./images/icons/external-link.svg"
                                  alt="link to live website"
                                  width="24px"
                                  height="24px"
                                />
                              </a>
                            </div>
                          )}
                        </span>
                      </h1>
                      <h4 className="uppercase font-bold text-base pl-3 pt-2">
                        {work?.role}
                      </h4>

                      <div className="timeline-content-info">
                        <h5 className="text-sm">{work.duration}</h5>
                      </div>
                      <div className="pl-2">
                        {work?.workDes &&
                          work.workDes.map((x) => (
                            <h4 className="text-base pt-2">
                              {" "}
                              <span className="text-2xl">-</span> {x}{" "}
                            </h4>
                          ))}
                      </div>
                      <div className="flex overflow-auto space-x-3 pb-2 md:flex-wrap">
                        {work?.exposer &&
                          work.exposer.map((ex, index) => (
                            <span
                              className="border border-gray-500 px-2 py-1 mt-3 ml-1 rounded-lg text-sm"
                              key={index}
                            >
                              {ex}
                            </span>
                          ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
          </section>
        </div>
      </section>
    </div>
  );
}

export default Experience;
