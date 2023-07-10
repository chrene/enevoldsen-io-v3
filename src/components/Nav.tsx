import { useState } from 'react';
import avatar from '/avatar.jpeg';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useCurrentPage } from '../hooks/useCurrentPage';
import clsx from 'clsx';

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery('(min-width: 1280px)');
  const page = useCurrentPage();

  return (
    <nav className="bg-blue-50 relative z-50 select-none" aria-expanded={toggled}>
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
          <div className="flex gap-12 justify-self-end fixed backdrop-blur-lg p-4 px-6 -mx-6 bg-white/70 rounded-xl">
            <a
              aria-current={page === 'intro'}
              className="[&[aria-current='true']]:text-blue-500"
              href="/#intro"
            >
              Hjem
            </a>
            <a
              aria-current={page === 'arbejde'}
              className="[&[aria-current='true']]:text-blue-500"
              href="/#arbejde"
            >
              Arbejde
            </a>
            <a
              aria-current={page === 'erfaring'}
              className="[&[aria-current='true']]:text-blue-500"
              href="/#erfaring"
            >
              Erfaring
            </a>
            <a
              aria-current={page === 'om'}
              className="[&[aria-current='true']]:text-blue-500"
              href="/#om"
            >
              Om
            </a>
            {/* <a
              aria-current={page === 'services'}
              className="[&[aria-current='true']]:text-blue-500"
              href="/#services"
            >
              Services
            </a> */}
            <a
              aria-current={page === 'kontakt'}
              className="[&[aria-current='true']]:text-blue-500"
              href="/#kontakt"
            >
              Kontakt
            </a>
          </div>
        )}

        {!matches && (
          <button
            aria-checked={toggled}
            onClick={() => setToggled((prev) => !prev)}
            className="space-y-1.5 cursor-pointer z-50 justify-self-end right-8 fixed backdrop-blur-lg p-4 -mx-4 bg-white/70 rounded-xl"
          >
            <span
              className={clsx('block h-0.5 w-8 bg-black transition-all transform duration-300', {
                'rotate-45 translate-y-[8px]': toggled,
                'rotate-0 translate-y-[0px]': !toggled,
              })}
            ></span>
            <span
              className={clsx('block h-0.5 w-6 bg-black transition-all  transform duration-300', {
                'opacity-0 w-0': toggled,
                'w-4 opacity-100': !toggled,
              })}
            ></span>
            <span
              className={clsx('block h-0.5 w-4 bg-black transition-all transform duration-300', {
                '-rotate-45 -translate-y-[8px] w-[32px]': toggled,
                'rotate-0 translate-y-[0px] w-[16px]': !toggled,
              })}
            ></span>
          </button>
        )}

        {!matches && (
          <div
            className={clsx(
              'fixed pointer-events-none bg-white bottom-0 left-0 w-full h-screen flex items-center justify-center transform transition-all duration-300',
              {
                'opacity-100 pointer-events-auto': toggled,
                'opacity-0': !toggled,
              }
            )}
          >
            <div className="flex flex-col gap-8 text-lg">
              <a
                onClick={() => setToggled(false)}
                href="/#intro"
                className={clsx('transform transition-all duration-300 delay-0', {
                  'translate-x-0 opacity-100': toggled,
                  'translate-x-[-100%] opacity-0': !toggled,
                })}
              >
                Hjem
              </a>
              <a
                onClick={() => setToggled(false)}
                href="/#arbejde"
                className={clsx('transform transition-all duration-300 delay-75', {
                  'translate-x-0 opacity-100': toggled,
                  'translate-x-[-100%] opacity-0': !toggled,
                })}
              >
                Arbejde
              </a>
              {/* <a  onClick={() => setToggled(false)} href="/#services">
                Services
              </a> */}
              <a
                onClick={() => setToggled(false)}
                href="/#erfaring"
                className={clsx('transform transition-all duration-300 delay-150', {
                  'translate-x-0 opacity-100': toggled,
                  'translate-x-[-100%] opacity-0': !toggled,
                })}
              >
                Erfaring
              </a>
              <a
                onClick={() => setToggled(false)}
                href="/#om"
                className={clsx('transform transition-all duration-300 delay-200', {
                  'translate-x-0 opacity-100': toggled,
                  'translate-x-[-100%] opacity-0': !toggled,
                })}
              >
                Om
              </a>
              <a
                onClick={() => setToggled(false)}
                href="/#kontakt"
                className={clsx('transform transition-all duration-300 delay-300', {
                  'translate-x-0 opacity-100': toggled,
                  'translate-x-[-100%] opacity-0': !toggled,
                })}
              >
                Kontakt
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
