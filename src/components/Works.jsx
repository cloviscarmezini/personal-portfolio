import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { styles } from '../styles';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { lock } from '../assets';

import { SectionWrapper } from '../hoc';
import { useState } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const ProjectCard = ({ project, t }) => {
  const {
    nameKey,
    descriptionKey,
    tags,
    image,
    links = [],
    deprecated
  } = project;

  const name = t(nameKey);
  const description = descriptionKey ? t(descriptionKey) : '';

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
                  {t('common.unavailable')}
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
            {links.length ? links.map(link => (
              <div
                onClick={() => {
                  if (!link.disabled)
                    window.open(link.url, "_blank")
                }}
                className={`w-10 h-10 rounded-full
                  flex justify-center items-center ${link.color} ${link.disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                {link.disabled &&
                  <div className={`absolute bottom-0 right-0 p-[3px] rounded-full ${link.color}`}>
                    <img src={lock} className={`w-3 ${link.disabledColor === 'dark' ? 'invert' : ''}`} alt={t('common.notAvailable')} />
                  </div>
                }
                <img
                  src={link.icon}
                  alt={link.altKey ? t(link.altKey) : link.alt || t('common.notAvailable')}
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
  const { t } = useTranslation();
  const [workType, setWorkType] = useState('personal');
  const reducedMotion = usePrefersReducedMotion();

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
        <p className={styles.sectionSubText}>{t('works.subtitle')}</p>
        <h2 className={styles.sectionHeadText}>{t('works.title')}<span className="text-blue-500">.</span></h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {t('works.description')}
        </motion.p>
      </div>

      <div className="mt-5 relative">
        <div className="mt-10 flex flex-wrap gap-7">
          {projects.map((project, index) => {
            const timeToShow = reducedMotion ? 0 : 0.5 * index

            return (
              <motion.div
                key={project.id || index}
                variants={fadeIn("up", "spring", timeToShow, 0.75)}
              >
                <ProjectCard
                  key={project.id}
                  project={project}
                  t={t}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Works, "works")