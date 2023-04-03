import { motion } from "framer-motion";

import { styles } from "../styles";

import {
  Line,
  LineSecondary
} from "../assets";

import { ProgrammerCanvas } from './canvas';

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen"
    >
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto h-full`}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-20 h-full">
          <div className="flex flex-row gap-5">
            <div className="flex flex-col items-center mt-5 justify-center">
              <div className="w-5 h-5 rounded-full bg-blue-500" />
              <div className="w-1 sm:h-80 h-40 blue-gradient" />
            </div>

            <div>
              <h1 className={styles.heroHeadText}>Hi, I'm {" "}
                <span className="text-blue-500">
                  Clovis
                </span>
              </h1>
              <p className={styles.heroSubText}>
                I'm a programming lover & <br className="sm:block hidden"/>
                technology enthusiastic.<br className="sm:block hidden"/>
                Let's grab a <span className="text-blue-500">coffee?</span>
              </p>
            </div>
          </div>
          
          <div className="flex justify-center items-center">
            <ProgrammerCanvas />
          </div>
        </div>
      </div>

      <img
        src={Line}
        className="absolute bottom-0 left-0"
        style={{
          zIndex: -1
        }}
      />

      <img
        src={LineSecondary}
        className="absolute top-0 right-0"
        style={{
          zIndex: -1
        }}
      />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: 'infinity',
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero