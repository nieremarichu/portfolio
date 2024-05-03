import React from "react";
import Image from 'next/image';

import { Proficient, Familiar } from "../config/SkillData";
const Skill = () => {
  return (
    <div
      id="Skill"
      className="h-screen w-full mx-auto max-w-screen-lg justify-center my-18 px-5 bg-gray"
    >
      <section className="my-28">
        <header className="text-2xl font-bold pt-10 mb-5">
          <h2>Skills & Tools</h2>
        </header>
        {Proficient?.length > 0 && (
          <div className="pl-3">
            <h2 className="text-xl"> Proficient </h2>
            <div className="my-7 grid gap-5 grid-cols-3 md:grid-cols-6 content-center">
              {Proficient.map((x, index) => (
                <div data-aos='zoom-in'
                  className="flex flex-col items-center"
                  tabIndex={0}
                  role="img"
                  aria-label={x.skill}
                  key={index}
                >
                  <Image
                    src={x.logo}
                    alt=""
                    loading="lazy"
                    className="w-16 mb-1"
                    width={64}
                    height={64}
                  />
                  {x.skill}
                </div>
              ))}
            </div>
          </div>
        )}
        {Familiar?.length > 0 && (
          <div className="pl-3">
            <h2 className="text-xl"> Familiar </h2>
            <div className="my-7 grid gap-5 grid-cols-3 md:grid-cols-6 content-center">
              {Familiar.map((x, index) => (
                <div data-aos='zoom-in'
                  className="flex flex-col items-center"
                  tabIndex={0}
                  role="img"
                  aria-label={x.skill}
                  key={index + Proficient.length}
                >
                  <Image
                    src={x.logo}
                    alt=""
                    loading="lazy"
                    className="w-16 mb-1"
                    width={64}
                    height={64}
                  />
                  {x.skill}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* </div> */}
      </section>
    </div>
  );
};

export default Skill;
