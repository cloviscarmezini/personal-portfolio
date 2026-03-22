import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const ServiceCard = ({ title, icon, index }) => {
  const reducedMotion = usePrefersReducedMotion();
  const timeToShow = reducedMotion ? 0 : 0.5 * index;

  return (
    <li className="xs:w-[250px] w-full list-none">
      <motion.div
        variants={fadeIn("right", "spring", timeToShow, 0.75)}
        className="p-[1px] rounded-[20px] hover:shadow-card hover:bg-gradient-to-b from-blue-500 to-purple-500"
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-center items-center flex-col"
        >
          <img
            src={icon}
            aria-hidden={true}
            tabIndex={-1}
            alt=""
            className="w-16 h-16 object-contain mb-5"
          />

          <p className="text-white text-[20px] font-bold text-center leading-[1.3]">
            {title}
          </p>
        </div>
      </motion.div>
    </li>
  )
}

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview<span className="text-blue-500" aria-hidden>.</span></h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js.
        I'm a quick learner and collaborate closely with clients
        to create efficient, scalable, and user-friendly solutions that solve
        real-world problems.
      </motion.p>
      <h3 id="services-heading" className="sr-only">My roles and expertise</h3>
      <ul className="mt-20 flex flex-wrap gap-10" aria-labelledby="services-heading">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </ul>
    </>
  )
}

export default SectionWrapper(About, "about")