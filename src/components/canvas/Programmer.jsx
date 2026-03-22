import Lottie from "lottie-react";

import {
  heroAnimation
} from "../../assets";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const ProgrammerCanvas = () => {
  const reducedMotion = usePrefersReducedMotion();
  return (
    <Lottie
      preload
      animationData={heroAnimation}
      initialSegment={[reducedMotion ? 135 : 0, 135]}
      loop={false}
      className="sm:h-1/2 h-[15rem]"
    />
  )
}

export default ProgrammerCanvas