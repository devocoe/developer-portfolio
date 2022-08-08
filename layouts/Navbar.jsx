import Link from "next/link";
import { useTheme } from "next-themes";
import { MdAllInclusive, MdDarkMode, MdLightMode } from "react-icons/md";

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
        <a className="flex items-center text-primary  mb-4 sm:mb-0 ">
          <MdAllInclusive className="mr-2 text-4xl" />
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
