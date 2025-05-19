"use client";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import i18next from "../../i18n";

const Navbar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const changeLanguage = (lang) => {
    localStorage.removeItem("lang");
    i18next.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  useEffect(() => {
    i18next.changeLanguage(i18next.language);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsClient(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    isClient && (
      <nav
        className={`fixed z-50 w-full transition-colors duration-300 py-4 lg:py-2 bg-primary text-secondary shadow-md`}
      >
        <div className="w-full flex justify-between items-center mx-auto px-5 lg:px-14">
          <div className="w-full flex justify-start items-center gap-10">
            <div
              className={`pb-1 cursor-pointer ${
                scrolled ? "text-secondary" : "text-white"
              }`}
              onClick={() => setIsOpen(true)}
            >
              <IoIosMenu size={25} />
            </div>
            <div
              className="relative hidden lg:block"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <button
                className={`font-light tracking-widest flex justify-center items-center gap-2 pb-1 ${
                  scrolled ? "text-secondary" : "text-white"
                }`}
              >
                <span>{t("navbar.lang_text")}</span>
                <div className="">
                  <RiArrowDownSLine size={18} />
                </div>
              </button>
              {isDropdownOpen && (
                <ul className="absolute rounded top-8 -left-9 bg-background mt-2 py-2 w-32 shadow-lg flex justify-center items-center">
                  <li
                    className="px-4 py-2 rounded-lg cursor-pointer"
                    onClick={() => changeLanguage("en")}
                  >
                    <Image
                      src="/english.png"
                      width={100}
                      height={100}
                      alt="le salama restaurant"
                      className="w-6 h-6 md:w-7 md:h-7"
                    />
                  </li>
                  <li
                    className="px-4 py-2 rounded-lg cursor-pointer"
                    onClick={() => changeLanguage("fr")}
                  >
                    <Image
                      src="/france.png"
                      width={100}
                      height={100}
                      alt="le salama restaurant"
                      className="w-6 h-6 md:w-7 md:h-7"
                    />
                  </li>
                </ul>
              )}
            </div>
          </div>
          {/*<div className="w-full flex justify-center items-center pb-2">
            <Image
              src={
                scrolled ? "/logo-salama-insta.png" : "/logo-salama-white.png"
              }
              width={300}
              height={300}
              alt="Logo Le Salama"
              className={`mt-2 w-28 lg:w-36`}
            />
          </div>*/}
          <div className="w-full lg:flex hidden justify-end items-center  text-white cursor-pointer">
            <Link
              href="https://www.sevenrooms.com/explore/lesalamamarrakech/reservations/create/search/"
              target="_blank"
              className={`tracking-[0.2em] font-light text-[14px] leading-[34px] py-2 px-4  rounded ${
                scrolled
                  ? "text-secondary bg-transparent border border-secondary hover:bg-secondary hover:text-white"
                  : "text-background bg-transparent hover:bg-background hover:text-primary border border-background"
              }`}
            >
              Réservations
            </Link>
          </div>
          <div
            className="w-full flex justify-end items-center relative lg:hidden"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <button
              className={`font-light tracking-widest flex justify-center items-center gap-2  text-[12px] ${
                scrolled ? "text-secondary" : "text-white"
              }`}
            >
              <span>{t("navbar.lang_text")}</span>
              <div className="">
                <RiArrowDownSLine size={18} />
              </div>
            </button>
            {isDropdownOpen && (
              <ul className="absolute rounded top-8 left-10 bg-background mt-2 py-2 w-32 shadow-lg flex justify-center items-center">
                <li
                  className="px-4 py-2 rounded-lg cursor-pointer"
                  onClick={() => changeLanguage("en")}
                >
                  <Image
                    src="/english.png"
                    width={100}
                    height={100}
                    alt="le salama restaurant"
                    className="w-6 h-6 md:w-7 md:h-7"
                  />
                </li>
                <li
                  className="px-4 py-2 rounded-lg cursor-pointer"
                  onClick={() => changeLanguage("fr")}
                >
                  <Image
                    src="/france.png"
                    width={100}
                    height={100}
                    alt="le salama restaurant"
                    className="w-6 h-6 md:w-7 md:h-7"
                  />
                </li>
              </ul>
            )}
          </div>

          {/* Full-screen mobile menu */}
          <Transition
            show={isOpen}
            enter="transition ease-out duration-700"
            enterFrom="transform -translate-x-full opacity-0"
            enterTo="transform -translate-x-0 opacity-100"
            leave="transition ease-in duration-500"
            leaveFrom="transform -translate-x-0 opacity-100"
            leaveTo="transform -translate-x-full opacity-0"
          >
            <div className="fixed top-0 left-0 z-10 w-full lg:w-[25%] h-screen bg-primary flex flex-col items-left justify-start lg:justify-center gap-16  py-14 px-20">
              <div className="text-secondary" onClick={() => setIsOpen(false)}>
                <IoMdClose size={14} />
              </div>
              <ul
                onClick={() => setIsOpen(false)}
                className="space-y-8 text-secondary leading-[25px] text-[14px] font-light"
              >
                <li className="pb-3 border-b border-bg_navbar">
                  <Link href="/">{t("navbar.home")}</Link>
                </li>
                <li className="pb-3 border-b border-bg_navbar">
                  <Link href="/restaurant">{t("navbar.restaurant")}</Link>
                </li>

                <li className="pb-3 border-b border-bg_navbar">
                  <Link href="/shows">{t("navbar.shows")}</Link>
                </li>
                <li className="pb-3 border-b border-bg_navbar">
                  <Link href="/culinary">{t("navbar.culinary")}</Link>
                </li>
                <li className="pb-3 border-b border-bg_navbar hidden lg:block">
                  <Link
                    href="https://www.lesalamamarrakech.com/menu/"
                    target="_blank"
                  >
                    {t("navbar.cart")}
                  </Link>
                </li>
                <li className="pb-3 border-b border-bg_navbar">
                  <Link href="/contact">{t("navbar.contact")}</Link>
                </li>
                <li className="pb-3 border-b border-bg_navbar">
                  <Link href="/gallery">{t("navbar.gallery")}</Link>
                </li>
              </ul>
            </div>
          </Transition>
        </div>
      </nav>
    )
  );
};

export default Navbar;
