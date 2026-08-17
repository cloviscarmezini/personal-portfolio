import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { styles } from '../styles';
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const isPortuguese = (i18n.resolvedLanguage || i18n.language || 'en-US').startsWith('pt');
  const isEnglish = !isPortuguese;

  const toggleLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <nav
      className={`
        ${styles.paddingX} w-full flex items-center py-5
        fixed top-0 z-20 bg-primary
      `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="Clovis Carmezini - Home"
            className="h-9 object-contain"
          />
        </Link>

        <div className="flex items-center gap-4">
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map(link => (
              <li
                key={link.id}
                className={`hover:text-blue-500 text-[18px] ${active === link.id ? 'text-blue-500' : 'text-secondary'} font-medium cursor-pointer`}
                onClick={() => setActive(link.id)}
              >
                <a href={`#${link.id}`}>{t(link.titleKey)}</a>
              </li>
            ))}
          </ul>

          <div className="hidden sm:inline-flex items-center rounded-full border border-blue-500/50 bg-tertiary p-1 text-xs font-semibold uppercase tracking-wide text-white">
            <button
              type="button"
              onClick={() => toggleLanguage('en-US')}
              aria-label={t('nav.language') + ' EN'}
              aria-pressed={isEnglish}
              className={`rounded-full px-3 py-1.5 transition ${isEnglish ? 'bg-blue-500 text-white shadow-md' : 'text-secondary hover:text-white'}`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => toggleLanguage('pt-BR')}
              aria-label={t('nav.language') + ' PT'}
              aria-pressed={isPortuguese}
              className={`rounded-full px-3 py-1.5 transition ${isPortuguese ? 'bg-blue-500 text-white shadow-md' : 'text-secondary hover:text-white'}`}
            >
              PT
            </button>
          </div>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center gap-3">
          <div className="inline-flex items-center rounded-full border border-blue-500/50 bg-tertiary p-1 text-[10px] font-semibold uppercase tracking-wide text-white sm:hidden">
            <button
              type="button"
              onClick={() => toggleLanguage('en-US')}
              aria-label={t('nav.language') + ' EN'}
              aria-pressed={isEnglish}
              className={`rounded-full px-2.5 py-1 transition ${isEnglish ? 'bg-blue-500 text-white shadow-md' : 'text-secondary hover:text-white'}`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => toggleLanguage('pt-BR')}
              aria-label={t('nav.language') + ' PT'}
              aria-pressed={isPortuguese}
              className={`rounded-full px-2.5 py-1 transition ${isPortuguese ? 'bg-blue-500 text-white shadow-md' : 'text-secondary hover:text-white'}`}
            >
              PT
            </button>
          </div>

          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(toggle => !toggle)}
          />

          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-gradient-to-b from-blue-500 to-purple-500 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex flex-col gap-4 justify-end items-start">
              {navLinks.map(link => (
                <li
                  key={link.id}
                  className={`${active === link.id ? 'text-white' : 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(toggle => !toggle)
                    setActive(link.id)
                  }}
                >
                  <a href={`#${link.id}`}>{t(link.titleKey)}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar