import { motion } from 'framer-motion';

import { styles } from '../styles';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { lock } from '../assets';

import { SectionWrapper } from '../hoc';
import { useState } from 'react';

const ProjectCard = ({
project
}) => {
  const {
    name,
    description,
    tags,
    image,
    links = [],
    deprecated
  } = project;

  return (
    <div
      className="sm:w-[360px] w-full p-[1px] rounded-[30px] hover:shadow-card hover:bg-gradient-to-b from-blue-500 to-purple-500 relative"
    >
      <div
        className="bg-tertiary p-[20px] rounded-[30px]"
      >
        <div
          className="relative w-full h-[230px]"
        >
          <div className="rounded-[10px] overflow-hidden relative">
            {deprecated && (
              <div className="absolute top-0 left-0 z-10">
                <div className="center relative inline-block select-none whitespace-nowrap rounded-br-[10px] bg-pink-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                  UNAVAILABLE 😢
                </div>
              </div>
            )}
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover sm:object-contain"
            />
          </div>

          <div
            className="absolute top-0 right-0 flex justify-end flex-wrap m-3 card-img_hover gap-2 max-w-[120px]"
          >
            {links.length ? links.map(link=>(
              <div
                onClick={() => {
                  if(!link.disabled)
                  window.open(link.url, "_blank")
                }}
                className={`w-10 h-10 rounded-full
                  flex justify-center items-center ${link.color} ${link.disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                { link.disabled && 
                  <div className={`absolute bottom-0 right-0 p-[3px] rounded-full ${link.color}`}>
                    <img src={lock} className={`w-3 ${link.disabledColor === 'dark' ? 'invert' : ''}`} alt="not available" />
                  </div>
                }
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
    </div>
  )
}

const Works = () => {
  const [workType, setWorkType] = useState('personal');

  function onChangeWorkType(worktype) {
    setWorkType(worktype)
    document
    .getElementById('portfolio')
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      <motion.div
        id="portfolio"
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects<span className="text-blue-500">.</span></h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Explore my coding journey through some of my projects. Turning ideas into reality, one line of code at a time.
        </motion.p>
      </div>

      <div className="mt-5 relative">
        <div className="bg-primary flex justify-center sticky top-[75px] py-5 z-50">
          <div className="rounded-full hover:shadow-card bg-gradient-to-b from-blue-500 to-purple-500">
            <div className="bg-tertiary m-[1px] text-sm text-white leading-none rounded-full inline-flex">
              <button onClick={() => onChangeWorkType('personal')} className={`inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:bg-blue-500 rounded-l-full px-4 py-2 ${workType === 'personal' ? 'bg-gradient-to-b from-blue-500 to-purple-500' : ''}`} id="grid">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="fill-current w-4 h-4 mr-2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                <span>Individual work</span>
              </button>
              <button onClick={() => onChangeWorkType('collaborate')} className={`inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:bg-blue-500 rounded-r-full px-4 py-2 ${workType === 'collaborate' ? 'bg-gradient-to-b from-blue-500 to-purple-500' : ''}`} id="list">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="fill-current w-4 h-4 mr-2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                <span>Collaborative work</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-7">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
              className={`display: ${project.type === workType ? 'block' : 'hidden'}`}
            >
              <ProjectCard
                key={project.id}
                project={project}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Works, "works")