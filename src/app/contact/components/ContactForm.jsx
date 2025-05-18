"use client";
import React from "react";
import PhoneInput from "react-phone-input-2";
import { useTranslation } from "react-i18next";
import "react-phone-input-2/lib/style.css";

const ContactForm = () => {
  const { t } = useTranslation();
  return (
    <form className="w-full flex flex-col justify-center items-center gap-4 text-[15.08px] leading-[21.12px] text-primary py-10 px-11  lg:px-28">
      <h1 className="text-[23px] lg:text-[40px] lg:leading-[48px] leading-[36px] font-azahra">
        {t("contact.title")}
      </h1>
      <div className="w-full flex lg:flex-row flex-col justify-center items-center gap-3">
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label htmlFor="firstName">{t("contact.firstname")}</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="w-full rounded-md p-2 focus:outline-none"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label htmlFor="lastName">{t("contact.lastname")}</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="w-full rounded-md p-2 focus:outline-none"
          />
        </div>
      </div>
      <div className="w-full flex lg:flex-row flex-col justify-center items-center gap-3">
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label htmlFor="email">{t("contact.email")}</label>
          <input
            type="text"
            name="email"
            id="email"
            className="w-full rounded-md p-2 focus:outline-none"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label htmlFor="phone">{t("contact.phone")}</label>
          <PhoneInput
            id="phone"
            country={"ma"}
            inputClass="w-full"
            //value={this.state.phone}
            //onChange={(phone) => this.setState({ phone })}
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-start gap-1">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          className="w-full rounded-md p-2 focus:outline-none"
          rows={4}
        />
      </div>
      <button className="py-4 px-6 border border-primary mr-auto cursor-pointer uppercase">
        {t("contact.send")}
      </button>
    </form>
  );
};

export default ContactForm;
