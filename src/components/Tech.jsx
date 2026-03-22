import { BallCanvas } from "./canvas";

import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const Tech = () => {
  const reducedMotion = usePrefersReducedMotion();
  return (
    <>
      <h3 id="technologies-heading" className="sr-only">Technologies I have worked so far</h3>
      <ul className="flex flex-row flex-wrap justify-center gap-10" aria-labelledby="technologies-heading">
        {technologies.map(technology => (
          <li
            key={technology.name}
            className="w-28 h-28 list-none flex flex-col items-center justify-center"
          >
            {reducedMotion ? (
              <div className="rounded-full bg-white p-3">
                <img
                  src={technology.icon}
                  className="w-full h-full object-contain"
                  aria-hidden={true}
                />
              </div>
            ) : (
              <BallCanvas icon={technology.icon} />
            )}
            <span className="sr-only">{technology.name}</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default SectionWrapper(Tech, "tech")