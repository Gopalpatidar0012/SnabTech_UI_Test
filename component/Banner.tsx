"use client";
import useIsMobile from "@/hooks/useIsMobile";
import React from "react";
import imageMobile from "../public/company.png";
import imageDesktop from "../public/empty-floor-front.png";
import Image from "next/image";

const Banner = () => {
  const data = [
    {
      id: "1",
      title: " Organisations en Afrique",
      desription:
        "  Vous êtes une entreprise privée ou publique basée en Afrique etvous avez du mal à recruter des profils expérimentés? Vous êtes une start-up africaine et vous souhaitez faire appel aux services d'un prestataire externe? Vous recherchez une expertise spécifique pour réaliser un futur projet? Grâce à son réseau,PANDA vous aide à trouver les experts dont vous avez besoin",
    },
    {
      id: "2",
      title: "Experts ",
      desription:
        "Vous êtes un professionnel expérimenté et vous planifiez de partir travailler en Afrique? Vous vous rendez souvent sur le continent africain pour des raisons professionnelles et vous souhaitez étendre votre réseau? Vous souhaitez partager votre expertise avec des organisations africaines sans vous déplacer PANDA est la plateforme de networking des experts pour la réalisation de leurs projets professionnels sur le continent africain! ",
    },
  ];
  const { isMobile } = useIsMobile();
  return (
    <div
      className={`${
        !isMobile ? "px-14 py-8 gap-[84px]" : "py-7 gap-5"
      } flex flex-col w-full justify-center items-center`}
    >
      <div
        className={`text-[#1F1F1F] text-center ${
          !isMobile ? "text-6xl px-[73.08px]" : "text-xl px-7"
        } font-medium `}
      >
        Nous réunissons experts du monde entier et organisations en Afrique
      </div>

      <div className="flex flex-col justify-center items-center gap-5">
        <div>{isMobile ? <Image src={imageMobile} alt="company" /> : null}</div>
        <div
          className={`${
            isMobile ? "overflow-x-auto" : ""
          } md:overflow-x-auto flex gap-7  w-full`}
        >
          <div
            className={`flex flex-col justify-center items-center gap-5 px-4  ${
              isMobile ? "flex-shrink-0 min-w-full max-w-[300px]" : ""
            } `}
          >
            <div className="text-[#A95454] font-medium text-xl text-center">
              {data[0].title}
            </div>
            <div className="font-xs font-normal text-center px-8">
              {data[0].desription}
            </div>
          </div>

          {!isMobile ? (
            <Image
              src={imageDesktop}
              alt="empty-floor-front-modern-building"
              width={579}
              height={566}
            />
          ) : null}

          <div
            className={`flex flex-col justify-center items-center gap-5 px-4  ${
              isMobile ? "flex-shrink-0 min-w-full max-w-[300px]" : ""
            }`}
          >
            <div className="text-[#A95454] font-medium text-xl text-center">
              {data[1].title}
            </div>
            <div className="font-xs font-normal text-center px-8">
              {data[1].desription}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
