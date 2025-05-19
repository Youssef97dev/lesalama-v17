"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const Culinary = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col justify-start items-start gap-5 px-5 lg:px-10 text-primary">
      <b className="text-[23px] tracking-wider lg:text-[40px] lg:leading-[48px] leading-[36px] font-azahra">
        {t("culinary.title")}
      </b>
      <p className="text-[12px] lg:text-[15px] leading-[24.5px]">
        {t("culinary.content_1")}
        <br />
        <br />
        {t("culinary.content_2")}
      </p>
    </div>
  );
};

export default Culinary;
