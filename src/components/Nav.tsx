import { motion } from 'framer-motion';
import { useState } from 'react';
import avatar from '/avatar.jpeg';
import { useMediaQuery } from '../hooks/useMediaQuery';

const navMotion = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.05,
    },
  },
  hidden: {
    opacity: 0,
    y: 25,
  },
};

const itemMotion = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: {
    opacity: 0,
    x: -100,
  },
};

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery('(min-width: 1280px)');

  return (
    <nav className="bg-teal-50 relative z-50 select-none" aria-expanded={toggled}>
      <div className="mx-8 grid grid-cols-3 items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32">
        <svg
          className="absolute bottom-0 left-1/2 -translate-x-1/2 hidden sm:block"
          width="250"
          height={4}
          viewBox="0 0 250 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 2L428 2" stroke="#282828" strokeLinecap="round" strokeWidth={2} />
        </svg>
        <div>
          <img src={avatar} className="w-16 h-16 rounded-full" alt="profilbillede af Christian" />
        </div>

        <h1 className="text-lg font-bold text-center">
          <a href="/">Christian</a>
        </h1>

        {matches && (
          <div className="flex gap-12 justify-self-end">
            <a href="/#about">Home</a>
            <a href="/#projects">Projects</a>
            <a href="/#contact">Contact</a>
          </div>
        )}

        {!matches && (
          <button
            aria-checked={toggled}
            onClick={() => setToggled((prev) => !prev)}
            className="space-y-1.5 cursor-pointer z-50 justify-self-end [&[aria-checked='true']]:fixed"
          >
            <motion.span
              animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
              className="block h-0.5 w-8 bg-black"
            ></motion.span>
            <motion.span
              animate={{ width: toggled ? 0 : 24, opacity: toggled ? 0 : 1 }}
              className="block h-0.5 w-6 bg-black"
            ></motion.span>
            <motion.span
              animate={{
                rotateZ: toggled ? -45 : 0,
                y: toggled ? -8 : 0,
                width: toggled ? 32 : 16,
              }}
              className="block h-0.5 w-4 bg-black"
            ></motion.span>
          </button>
        )}

        {toggled && !matches && (
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 25 }}
            exit={{ opacity: 0, x: 25 }}
            className="fixed bg-white bottom-0 left-0 w-full h-screen flex items-center justify-center"
          >
            <motion.div
              variants={navMotion}
              animate="visible"
              initial="hidden"
              className="flex flex-col gap-24 text-lg"
            >
              <motion.a variants={itemMotion} onClick={() => setToggled(false)} href="/#about">
                Home
              </motion.a>
              <motion.a variants={itemMotion} onClick={() => setToggled(false)} href="/#projects">
                Projects
              </motion.a>
              <motion.a variants={itemMotion} onClick={() => setToggled(false)} href="/#contact">
                Contact
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
