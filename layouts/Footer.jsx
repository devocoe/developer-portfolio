import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="flex flex-col items-center justify-between border-t border-grey-lighter py-10 sm:flex-row sm:py-12">
          {/* logo  */}
          <div className="sm:mr-auto flex flex-col items-center sm:flex-row ">
            <Link href="/" className="mr-auto sm:mr-6">
              <Image src={"/img/logo.svg"} alt="logo" width={45} height={45} />
            </Link>
            <p className="pt-5  font-light ml-2 sm:pt-0">©2022 devocoe.in</p>
          </div>
          {/* social media handles  */}
          <div className=" flex items-center pt-5 sm:mr-0 sm:pt-0">
            <a
              aria-label="github"
              href="https://github.com/piyush816"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-2xl  hover:text-primary transition-colors" />
            </a>

            <a
              aria-label="linkedin"
              className="ml-8"
              href="https://www.linkedin.com/in/piyush-kumar-a1b422240/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-2xl  hover:text-primary transition-colors" />
            </a>

            <a
              aria-label="instagarm"
              className="ml-8"
              href="https://www.instagram.com/piyus_kmr/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="text-2xl  hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
