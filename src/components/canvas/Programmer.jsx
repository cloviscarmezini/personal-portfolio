import Lottie from "lottie-react";

import {
  heroAnimation
} from "../../assets";

const ProgrammerCanvas = () => {
  return (
    <Lottie
      preload
      animationData={heroAnimation}
      initialSegment={[0, 135]}
      loop={false}
      className="sm:h-1/2 h-[15rem]"
    />
  )
}

export default ProgrammerCanvas