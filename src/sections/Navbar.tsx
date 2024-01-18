import { useEffect, useState } from 'react';
import logoPrimary from '../assets/logo-primary.svg';
import logoDanger from '../assets/logo-red.svg';
import whiteSun from '../assets/sun-white.svg';
import blackSun from '../assets/sun-black.svg';
import { Fade as Hamburger } from 'hamburger-react';
import NavItem from '../components/NavItem';
import { NavbarProps } from '../types/myTypes';
function Navbar({ darkModeIsOn, setDarkModeIsOn }: NavbarProps<boolean>) {
  // hamburger icon is clicked
  const [isOpen, setOpen] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  // active Nav link
  const [active, setActive] = useState('1');

  // Is Navbar on top of the hero section
  const [isNavbarOnTop, setIsNavbarOnTop] = useState(true);

  // listen to every scroll event and set isNavbarOnTop
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY >= 20 ? setIsNavbarOnTop(false) : setIsNavbarOnTop(true);
    });
  }, []);

  let navStyles;
  let cvBtnStyles;
  if (darkModeIsOn) {
    navStyles = isNavbarOnTop ? 'bg-gray-dark  text-white' : ' bg-black  text-white';
    cvBtnStyles = isNavbarOnTop ? 'text-red-light' : 'text-red-light';
  } else {
    navStyles = isNavbarOnTop ? 'bg-secondary  text-black' : ' bg-blue-medium  text-black';
    cvBtnStyles = isNavbarOnTop ? 'text-red-dark' : 'text-blue-light';
  }

  const closeNavWindow = () => {
    if (isOpen && openNav) {
      setOpenNav(false);
      setOpen(false);
    }
  };

  return (
    <header className={`${navStyles} fixed top-0 z-50 w-full `}>
      <nav className={`container flex transition-all duration-300 ${isNavbarOnTop ? 'h-20' : 'h-14'}`}>
        {/* hamburger icon will be displayed on mobile screens */}
        <div className="relative z-50 flex w-full items-center justify-between ">
          <a href="#home" className="h-full">
            <img src={darkModeIsOn ? logoDanger : logoPrimary} alt="portfolio-logo" className="h-full" />
          </a>
          {/* hamburger Menu */}
          <div className="md-tab:hidden" id="hamburger">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              duration={0.3}
              color={darkModeIsOn ? 'white' : '#0E2431'}
              onToggle={(toggled) => {
                if (toggled) {
                  // open a menu
                  setOpenNav(true);
                } else {
                  // close a menu
                  setOpenNav(false);
                }
              }}
            />
          </div>
        </div>

        {/* Navbar items and cv button and darkMode button */}
        <div
          className={`fixed top-0 z-10 flex h-screen w-full max-w-lg flex-col items-center justify-evenly pt-10 font-poppins text-4xl font-semibold tracking-wide transition-[left] duration-300 md-tab:static md-tab:z-50 md-tab:h-full md-tab:max-w-none md-tab:flex-row md-tab:justify-end md-tab:p-0 md-tab:text-2xl md-tab:duration-0 lg-tab:text-3xl ${navStyles}  ${openNav ? ' left-0' : '-left-full'}`}
        >
          <ul className=" flex basis-1/2 flex-col justify-between text-center md-tab:absolute md-tab:left-1/2 md-tab:-translate-x-1/2 md-tab:flex-row md-tab:gap-3 md-tab:text-xl lg-tab:text-3xl lg-tab:gap-5 md-des:gap-10">
            <NavItem
              text="home"
              id="1"
              active={active}
              setActive={setActive}
              darkModeIsOn={darkModeIsOn}
              isNavbarOnTop={isNavbarOnTop}
              closeNavWindow={closeNavWindow}
            />
            <NavItem
              text="about"
              id="2"
              active={active}
              setActive={setActive}
              darkModeIsOn={darkModeIsOn}
              isNavbarOnTop={isNavbarOnTop}
              closeNavWindow={closeNavWindow}
            />
            <NavItem
              text="projects"
              id="3"
              active={active}
              setActive={setActive}
              darkModeIsOn={darkModeIsOn}
              isNavbarOnTop={isNavbarOnTop}
              closeNavWindow={closeNavWindow}
            />
            <NavItem
              text="contact"
              id="4"
              active={active}
              setActive={setActive}
              darkModeIsOn={darkModeIsOn}
              isNavbarOnTop={isNavbarOnTop}
              closeNavWindow={closeNavWindow}
            />
          </ul>

          <div className="flex w-full flex-wrap items-center justify-center gap-10 md-tab:max-w-40 md-tab:flex-row md-tab:flex-nowrap md-tab:justify-end md-tab:gap-2 lg-tab:gap-3">
            <a
              href="#cv"
              className={`rounded-full hover:scale-110 hover:transition-all hover:duration-200 active:scale-100 ${cvBtnStyles}`}
              onClick={() => closeNavWindow()}
            >
              CV
            </a>

            <button
              onClick={() => {
                setDarkModeIsOn((prev: boolean) => !prev);
                closeNavWindow();
              }}
            >
              <img
                src={darkModeIsOn ? whiteSun : blackSun}
                alt="dark-mode-button"
                className={`'w-11 md-tab:w-8 md-des:w-11'`}
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
