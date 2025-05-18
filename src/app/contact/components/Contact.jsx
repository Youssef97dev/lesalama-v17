import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaMailBulk,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-5 px-5 lg:px-10 py-10 text-primary">
      <h1 className="text-[23px] lg:text-[40px] lg:leading-[48px] leading-[36px] font-azahra">
        {`Contact`}
      </h1>
      <div className="w-full flex lg:flex-row flex-col justify-start items-start gap-5">
        <div className="w-full flex flex-col justify-start items-start">
          <span className="mb-3 font-semibold tracking-widest text-[16px]">{`Location`}</span>
          <p className="text-[15px]">{`40 Rue des Banques, Marrakech 40000, Maroc`}</p>
        </div>
        <div className="w-full flex flex-col justify-start items-start">
          <span className="mb-3 font-semibold tracking-widest text-[16px]">{`Contact us`}</span>
          <p className="text-[15px]">{`PHONE : +212 6 75 48 00 18`}</p>
          <p className="text-[15px]">{`reservations@lesalamamarrakech.com`}</p>
        </div>
      </div>

      <div className="w-full flex lg:flex-row flex-col justify-start items-start gap-5">
        <div className="w-full flex flex-col justify-start items-start">
          <span className="mb-3 font-semibold tracking-widest text-[16px]">{`Opening hours`}</span>
          <p className="text-[15px]">{`Daily : 12.00 PM to 02.00 AM`}</p>
        </div>
        <div className="w-full flex flex-col justify-start items-start">
          <span className=" font-semibold tracking-widest text-[16px]">{`Social`}</span>
          <div className="w-full text-primary py-3 flex justify-start items-center gap-3">
            <Link href="http://wa.me/212675480018" target="_blank">
              <FaWhatsappSquare size={25} />
            </Link>
            <Link
              href="https://www.instagram.com/lesalamamarrakech/"
              target="_blank"
            >
              <FaInstagramSquare size={25} />
            </Link>
            <Link
              href="mailto:reservations@lesalamamarrakech.com"
              target="_blank"
            >
              <FaMailBulk size={25} />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/l2si8ubntyyvkmzpo9vk"
          alt="map le salama"
          height={1000}
          width={1000}
          className="object-cover w-full lg:w-2/3"
        />
      </div>
    </div>
  );
};

export default Contact;
