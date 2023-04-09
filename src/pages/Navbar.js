import Link from "next/link";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Hamburger from "hamburger-react";
import GithubCorner from "react-github-corner";
 



const Navbar = () => {
  const router = useRouter();
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [showMedia, setShowMedia] = useState(false);

  useEffect(() => setMounted(true), []);

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return <SunIcon className="h-8 w-8" onClick={() => setTheme("light")} />;
    } else {
      return <MoonIcon className="h-8 w-8" onClick={() => setTheme("dark")} />;
    }
  };

  return (
    <div className=" absolute  w-full h-16  shadow-md  top-0 flex  items-center z-100  dark:bg-[#242526]  ">
      {/*  Hamburger Menu */}

      <div className=" invisible xl:visible    ml-2 mr-10">
        <Hamburger toggled={isOpen} toggle={setOpen} />

        {isOpen ? (
          <div className="absolute  pl-4 pt-3    mt-3 -ml-2 bg-white w-96 h-40  shadow-md  flex   dark:bg-[#242526]  ">
            <ul className=" table-column   bg-black-100 ">
              <li
                className={` text-2xl ${
                  router.pathname == "/"
                    ? "text-indigo-600"
                    : "text-brand-darkblue"
                }  `}
              >
                <Link href="/">Love Babbar&apos;s 450</Link>
              </li>
              <li
                className={` py-5 text-2xl ${
                  router.pathname == "/StriverDSA"
                    ? "text-indigo-600"
                    : "text-brand-darkblue"
                }`}
              >
                <Link href="/StriverDSA">Striver DSA Sheet</Link>
              </li>
              <li
                className={`text-2xl ${
                  router.pathname == "/StriverSDE"
                    ? "text-indigo-600"
                    : "text-brand-darkblue"
                }`}
              >
                <Link href="/StriverSDE">Striver SDE Sheet</Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>

      {/* Website Name */}

      <p
        className=" absolute text-3xl    font-semibold text-[#000000] ml-20   dark:text-white  
     	 w-60 	  "
      >
        Coding Journey 
      </p>
     

      {/* Menu Starts from here */}
      <div className="  h-8   w-[32em]  mx-auto  text-[#000000]    dark:text-white  xl:invisible   ">
        <ul className="  absolute flex  bg-black-100 mx-auto  ">
          <li
            className={`    text-lg ${
              router.pathname == "/" ? "text-indigo-600" : "text-brand-darkblue"
            }  `}
          >
            <Link href="/"   >Love Babbar&apos;s 450</Link>
          </li>
          <li
            className={`px-8 text-lg ${
              router.pathname == "/StriverDSA"
                ? "text-indigo-600"
                : "text-brand-darkblue"
            }`}
          >
            <Link href="/StriverDSA">Striver DSA Sheet</Link>
          </li>
          <li
            className={`text-lg ${
              router.pathname == "/StriverSDE"
                ? "text-indigo-600"
                : "text-brand-darkblue"
            }`}
          >
            <Link href="/StriverSDE">Striver SDE Sheet</Link>
          </li>
        </ul>
      </div>

      {/* Dark Mode Here */}

      <div className="w-[10rem]     ">{renderThemeChanger()}</div>

      {/* Github Corner */}
      <div  className="xl:invisible" >
        <GithubCorner
          size={63}
          href="https://github.com/anandamar72/lop/tree/master"
          target="__blank"
        />
      </div>
    </div>
  );
};

export default Navbar;
