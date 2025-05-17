import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Buttons = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex justify-between gap-3 items-center px-5">
      <Link
        target="_blank"
        href="https://lesalama-menu.vercel.app/"
        className="w-full rounded-lg bg-white hover:bg-primary hover:text-white py-2 text-center shadow-md text-[12px]"
      >
        {t("navbar.cart")}
      </Link>
      <Link
        target="_blank"
        href="https://www.sevenrooms.com/explore/lesalamamarrakech/reservations/create/search/"
        className="w-full rounded-lg bg-primary hover:bg-secondary text-white py-2 text-center shadow-md text-[12px]"
      >
        {t("navbar.reservation")}
      </Link>
    </div>
  );
};

export default Buttons;
