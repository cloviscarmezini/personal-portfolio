import React, { useEffect, useState } from 'react'

import { styles } from '../styles';
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

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
            alt="clovis carmezini's name and a cup of coffee"
            className="h-9 object-contain"
          />
        </Link>

        <ul
          className="list-none hidden sm:flex flex-row gap-10"
        >
          { navLinks.map(link=>(
            <li
              key={link.id}
              className={`hover:text-blue-500 text-[18px] ${
                active === link.title
                ? 'text-blue-500'
                : 'text-secondary'
              } font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{ link.title }</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(toggle=>!toggle)}
          />

          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-gradient-to-b from-blue-500 to-purple-500 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul
              className="list-none flex flex-col gap-4 justify-end items-start"
            >
              { navLinks.map(link=>(
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                    ? 'text-white'
                    : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(toggle=>!toggle)
                    setActive(link.title)
                  }}
                >
                  <a href={`#${link.id}`}>{ link.title }</a>
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