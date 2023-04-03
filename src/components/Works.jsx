import { motion } from 'framer-motion';

import { styles } from '../styles';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  links = [],
  index
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
      className="sm:w-[360px] w-full p-[1px] rounded-2xl hover:shadow-card hover:bg-gradient-to-b from-blue-500 to-purple-500"
    >
      <div
        className="bg-tertiary p-5 rounded-2xl"
      >
        <div
          className="relative w-full h-[230px]"
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain rounded-2xl"
          />

          <div
            className="absolute top-0 right-0 flex justify-end flex-wrap m-3 card-img_hover gap-2 max-w-[120px]"
          >
            {links.length ? links.map(link=>(
              <div
                onClick={() => window.open(link.url, "_blank")}
                className={`w-10 h-10 rounded-full
                  flex justify-center items-center cursor-pointer ${link.color}`}
              >
                <img
                  src={link.icon}
                  alt={link.alt}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )) : <></>}
          </div>
        </div>

        <div className="mt-5">
          <h3
            className="text-white text-[24px]"
          >
            {name}
          </h3>
          <p
            className="mt-2 text-secondary text-[14px] min-h-[63px]"
          >
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "works")