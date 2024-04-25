import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import useMediaQuery from "@/hooks/useMediaQuery";

import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  const toggleMenu = () => {
    setIsMenuToggled(!isMenuToggled);
  };

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6  font-bold`}>
          <div className={`${flexBetween} w-full gap-16  `}>
            {/*  { Left Side}*/}
            <img className=" drop-shadow-3xl" alt="logo" src={Logo} />

            {/*  { Right Side}*/}
            {isAboveMediumScreens ? (
              <div className={`flex w-full justify-end gap-40`}>
                <div className={`${flexBetween} text-md min-w-[450px] gap-8`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="About Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Reviews"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Offers"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>

                <ActionButton setSelectedPage={setSelectedPage}>
                  Subscribe
                </ActionButton>
              </div>
            ) : (
              <button
                className="rounded-full   bg-primary-500 p-2 drop-shadow-3xl"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* Close Icon */}
          <div className="flex justify-end p-12">
            <button onClick={toggleMenu}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl font-bold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              onClick={toggleMenu}
            />
            <Link
              page="About Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              onClick={toggleMenu}
            />
            <Link
              page="Reviews"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              onClick={toggleMenu}
            />
            <Link
              page="Offers"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              onClick={toggleMenu}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              onClick={toggleMenu}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
