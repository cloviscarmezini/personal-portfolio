import { styles } from "../styles";

import {
  Line,
  LineSecondary,
  githubSvg,
  linkedin
} from "../assets";

import { ProgrammerCanvas } from './canvas';
import { useTranslation } from "react-i18next";
import { useExperiment } from "@statsig/react-bindings";
import { ScrollDownButton } from "./canvas/ScrollDownButton";


const EXPERIMENT_GROUP_NAME = 'test_ab'
const EXPERIMENT_NAME = 'show_dot_on_name'

const Hero = () => {
  const [translate] = useTranslation();
  const experiment = useExperiment(EXPERIMENT_GROUP_NAME);

  const showDotOnName = experiment.get(EXPERIMENT_NAME, false);

  return (
    <header
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
              <h1 className={styles.heroHeadText}>{translate('hero.greetings')} {" "}
                <span className="text-blue-500">
                  Clovis {showDotOnName ? '.' : ''}
                </span>
              </h1>
              <p className={styles.heroSubText}>
                I'm a programming lover & <br />
                technology enthusiastic.<br />
                How about a cup of <span className="text-blue-500">coffee?</span>
              </p>
              <div className="mt-2 flex row gap-4">
                <a className="cursor-pointer" href="https://www.linkedin.com/in/cloviscarmezini/" target="_blank">
                  <div className="flex row items-center gap-2">
                    <img src={linkedin} className="w-3 invert" aria-hidden={true} />
                    <p className="text-md">
                      LinkedIn
                    </p>
                  </div>
                </a>
                <a className="cursor-pointer" href="https://github.com/cloviscarmezini" target="_blank">
                  <div className="flex row items-center gap-2">
                    <img src={githubSvg} className="w-4 invert" aria-hidden={true} />
                    <p className="text-md">
                      GitHub
                    </p>
                  </div>
                </a>
              </div>
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
        aria-hidden={true}
        tabIndex={-1}
        alt=""
        style={{
          zIndex: -1
        }}
      />

      <img
        src={LineSecondary}
        aria-hidden={true}
        tabIndex={-1}
        alt=""
        className="absolute top-0 right-0"
        style={{
          zIndex: -1
        }}
      />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <ScrollDownButton href="#about" ariaLabel="Go to About section" />
      </div>
    </header>
  )
}

export default Hero