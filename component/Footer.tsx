"use client";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import React from "react";
import logo from "../public/logo.png";
import social from "../public/Social.png";
import copyright from "../public/© 2019 APCOM. All Ri.png";

const Footer = () => {
  const data = [
    {
      id: "1",
      title: "Page d'accueil",
      points: [
        "Missions de PANDA",
        "Fonctionnalités",
        "Découvrez les experts",
        "Découvrez les organisations en Afrique",
        "Offres d'emploi",
        "Evénements à venir",
        "Témoignages",
        "Les fondateurs",
      ],
    },
    {
      id: "2",
      title: "pour les EXPERTS",
      points: [
        "Découvrez les organisations en Afrique",
        "Offres d'emploi",
        "Travel Map",
        "Evénements à venir",
      ],
    },
    {
      id: "3",
      title: "pour les organisations en Afrique",
      points: ["Découvrez les experts", "Travel Map", "Evénements à venir"],
    },
    { id: "4", title: "Contact ", points: ["Nous contacter"] },
  ];

  const { isMobile } = useIsMobile();
  return (
    <div
      className={`${
        isMobile ? "pt-[70px] px-7" : "pt-[242px] px-[52px]"
      } flex flex-col justify-center items-center h-full w-full gap-[54px] md:gap-[88px]`}
    >
      <div className="font-medium tex-[15px] md:text-[40px] md:px-[237px] pt-[101px] text-center">
        Rejoignez notre communauté et aidez-nous à construire la première
        plateforme de networking en ligne à destination du marché africain!
      </div>
      <div className="flex gap-2 w-full ">
        <div className="w-full flex justify-end items-center">
          <div className="px-10 py-5 border border-[#1F1F1F] rounded-full text-center ">
            <span className="text-base font-normal text-[#1F1F1F]">
              Se connecter
            </span>
          </div>
        </div>
        <div className="w-full flex justify-start items-center">
          <div className="px-10 py-5 border border-[#1F1F1F] rounded-full text-center ">
            <span className="text-base font-normal text-[#1F1F1F]">
              Créer un compte
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 place-content-center gap-[51px] px-5 w-full">
        {data.map((item) => (
          <div className="flex flex-col w-full gap-[21px]">
            <div className="flex flex-col justify-start items-start w-full gap-[197px] font-bold text-base text-[#1F1F1F]">
              {item.title}
            </div>
            <ul className="flex flex-col justify-start items-start w-full gap-5">
              {item.points.map((p) => (
                <li
                  key={p}
                  className="list-disc font-normal text-[13px] text-[#1F1F1F]"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {!isMobile && (
        <div className="flex justify-between w-full">
          <Image src={logo} alt="logo" className="" />
          <Image src={copyright} alt="logo" className="object-contain" />
          <Image
            src={social}
            alt="social"
            width={116}
            height={10}
            className="object-contain"
          />
        </div>
      )}
      {isMobile && (
        <div className="flex flex-col justify-center items-center w-full gap-[42px]">
          <div className="flex w-full">
            <Image src={logo} alt="logo" className="w-1/2" />
            <Image
              src={social}
              alt="social"
              width={116}
              height={10}
              className="object-contain w-1/3"
            />
          </div>
          <Image src={copyright} alt="logo" className="object-contain" />
        </div>
      )}
    </div>
  );
};

export default Footer;
