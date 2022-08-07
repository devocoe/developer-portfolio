import Link from "next/link";
import { useTheme } from "next-themes";
import { IoMoon, IoSunny } from "react-icons/io5";

const NavLink = ({ text, link }) => {
  return (
    <li className="text-lg font-medium sm:ml-8 ml-6  hover:text-primary">
      <Link href={link}>{text}</Link>
    </li>
  );
};

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="py-6 lg:py-10 flex justify-between items-center  flex-col sm:flex-row ">
      {/* logo  */}
      <Link href="/">
        <a className="flex items-center mb-4 sm:mb-0 ">
          <span className="mr-2">
            <img src="/img/logo.svg" height={50} width={50} alt="logo" />
          </span>
          <p className="hidden text-2xl font-bold  lg:block">Devocoe</p>
        </a>
      </Link>
      {/* menu links  */}
      <ul className="flex items-center justify-center">
        <li className="text-lg font-medium   hover:text-primary">
          <Link href={"/#about"}>About</Link>
        </li>

        <NavLink text={"Blog"} link="/blog" />
        <NavLink text={"Projects"} link="/#projects" />
        <NavLink text={"Contact"} link="/contact" />
        {/* dark mode toggle button  */}
        <li className="grid place-items-center">
          <button
            aria-label="dark mode toggle button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "light" ? (
              <IoMoon size={24} className="ml-8" />
            ) : (
              <IoSunny size={24} className="ml-8" />
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
