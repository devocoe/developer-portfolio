import Link from "next/link";
import { useTheme } from "next-themes";
import { MdClose, MdDarkMode, MdLightMode, MdMenu } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";

const NavLink = ({ text, link, closeNav }) => {
  return (
    <li
      onClick={closeNav}
      className="text-lg  font-medium sm:ml-8 ml-6 sm:mb-0 mb-4 sm:hover:text-primary"
    >
      <Link href={link}>{text}</Link>
    </li>
  );
};

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className="py-6 lg:py-10  flex justify-between items-center">
      {/* logo  */}
      <Link href="/">
        <a className="flex items-center text-primary  mb-4 sm:mb-0 ">
          <Image src={"/img/logo.svg"} alt="logo" width={45} height={45} />
          <p className="hidden text-2xl font-bold ml-2  lg:block">Devocoe</p>
        </a>
      </Link>
      {/* menu links  */}

      <div className="sm:hidden block ">
        <button
          onClick={() => {
            setIsNavOpen(!isNavOpen);
          }}
          aria-label="navbar toggle button"
        >
          {isNavOpen ? (
            <MdClose
              className="absolute text-white  right-3 top-9 z-20"
              size={26}
            />
          ) : (
            <MdMenu className="absolute right-3 top-9 z-20" size={26} />
          )}
        </button>
      </div>
      <ul
        className={`flex sm:items-center sm:right-0 sm:justify-center items-start sm:relative absolute flex-col sm:flex-row bg-primary sm:bg-transparent  sm:w-auto w-full sm:text-inherit text-white sm:h-auto h-screen z-10 transition-all sm:pt-0 pt-8 top-0 ${
          isNavOpen ? "right-0 " : "right-full"
        }`}
      >
        <li
          onClick={closeNav}
          className="text-lg font-medium sm:mb-0 mb-4 ml-6 sm:ml-0  sm:hover:text-primary"
        >
          <Link href={"/#about"}>About</Link>
        </li>

        <NavLink closeNav={closeNav} text={"Blog"} link="/blog" />
        <NavLink closeNav={closeNav} text={"Projects"} link="/#projects" />
        <NavLink closeNav={closeNav} text={"Contact"} link="/contact" />
        {/* dark mode toggle button  */}
        <li className="grid place-items-center">
          <button
            aria-label="dark mode toggle button"
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
              closeNav();
            }}
          >
            {theme === "dark" ? (
              <MdLightMode size={24} className="ml-8" />
            ) : (
              <MdDarkMode size={24} className="ml-8" />
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
