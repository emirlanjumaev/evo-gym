import { useState } from "react";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { LinksEnum } from "@/shared";
import useeMediaQuery from "@/hooks/useeMediaQuery";
import Hamburger from "hamburger-react";
import ActionButton from "../buttons/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { convertLink } from "@/services";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useLinkContext } from "@/context/LinkContext";

export default function Navbar() {
  const [menuToggled, setMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreen = useeMediaQuery("(min-width: 960px)");
  const { selectedPage, setSelectedPage } = useLinkContext();

  const hideHeader = useScrollDirection();
  console.log(hideHeader);

  return (
    <nav
      className={`fixed bg-primary-300  z-50 w-full duration-500 transition-all ${
        hideHeader ? "-top-[200px]" : "top-0"
      }`}
    >
      <div className="container">
        <div className="flexBetweenCenter py-2 sm:py-6">
          <div className="logo-wrapp">
            <img src={Logo} alt="Logo" className="logo" />
          </div>
          {/* RIGHT SIDE */}
          {isAboveMediumScreen ? (
            <div className="flexBetweenCenter gap-x-16">
              <div className="links-wrapp">
                <ul className="links flexBetweenCenter gap-x-4">
                  <li>
                    <Link
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                      page={LinksEnum.Home}
                    />
                  </li>
                  <li>
                    <Link
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                      page={LinksEnum.Benefits}
                    />
                  </li>
                  <li>
                    <Link
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                      page={LinksEnum.OurClasses}
                    />
                  </li>
                  <li>
                    <Link
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                      page={LinksEnum.OurContact}
                    />
                  </li>
                </ul>
              </div>
              <div className="flexBetweenCenter gap-x-6">
                <a href="sign-in">Sign in</a>
                <ActionButton
                  setSelectedPage={setSelectedPage}
                  href={LinksEnum.Benefits}
                  className="bg-secondary-500"
                >
                  Become a Member
                </ActionButton>
              </div>
            </div>
          ) : (
            <button className="bg-secondary-400 rounded-full">
              <Hamburger
                toggled={menuToggled}
                onToggle={() => setMenuToggled(!menuToggled)}
                size={18}
              />
            </button>
          )}
        </div>
      </div>
      <div
        className={`fixed z-40 flex items-end flex-col top-0 right-0  bg-primary-300   transition-all duration-1000 ${
          menuToggled
            ? `w-[100%] h-[100%] rounded-none`
            : `w-[0%] h-[0%] rounded-bl-full`
        }`}
      >
        {menuToggled ? (
          <>
            <Hamburger
              toggled={menuToggled}
              onToggle={() => setMenuToggled(!menuToggled)}
              color="black"
              size={18}
            />
            <div className="flex flex-col w-full items-center justify-center h-full gap-3">
              {Object.values(LinksEnum).map((item) => {
                const a = convertLink(item);
                console.log(a);

                return (
                  <div>
                    <ul>
                      <li>
                        <AnchorLink
                          className={`${
                            selectedPage === a
                              ? "border-slate-500 text-slate-500 text-[20px]"
                              : "border-transparent  text-white"
                          }  duration-100 transition-all border-b-2 text-lg`}
                          href={`#${a}`}
                          offset={100}
                          onClick={() => {
                            setSelectedPage(a);
                            setMenuToggled(false);
                          }}
                        >
                          {item}
                        </AnchorLink>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </>
        ) : null}
      </div>
    </nav>
  );
}
