"use client";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import useIsMobile from "../hooks/useIsMobile";
import Image from "next/image";
import headerImage from "../public/Welcome_to_PANDA.png";
import star from "../public/north-star-24.png";

const Header = () => {
  const data = [
    { id: "1", title: " Missions de PANDA" },
    { id: "2", title: " Fonctionnalités" },
    { id: "3", title: "experts" },
    { id: "4", title: "Organisations  en Afrique" },
    { id: "5", title: "Offres d’emploi" },
    { id: "6", title: "Evénements à venir" },
    { id: "7", title: " Témoignages" },
    { id: "8", title: "Fondateurs" },
  ];
  const [showNavList, setShowNavList] = useState(false);
  const { isMobile } = useIsMobile();
  return (
    <nav>
      <div
        className={
          isMobile
            ? "flex w-full h-[52px] items-center justify-between px-2"
            : "flex w-full items-center justify-between flex-col py-8 px-14 text-center gap-16"
        }
      >
        <div className="flex w-full  h-[52px] items-center justify-between px-2">
          <div>EN-FR</div>
          {isMobile ? (
            <div className="text-center font-KyivTypeSans text-xl font-normal text-[#1F1F1F] leading-7">
              Bienvenue sur PANDA
            </div>
          ) : (
            <>
              <Image src={headerImage} alt="Welcome to PANDA" />
              <div className="flex  justify-center items-center gap-6">
                <div className="text-base font-normal text-[#1F1F1F] underline">
                  Créer un compte
                </div>
                <div className="text-base font-normal underline">
                  Se connecter
                </div>
              </div>
            </>
          )}
          {isMobile ? (
            <FontAwesomeIcon
              icon={showNavList ? faXmark : faBars}
              size="lg"
              className="cursor-pointer text-darkBlue"
              onClick={() => setShowNavList(!showNavList)}
              fixedWidth
            />
          ) : null}
        </div>

        {!isMobile ? (
          <div className="flex justify-center items-center gap-10 flex-wrap text-center w-full">
            {data.map((item) => (
              <span key={item.id}>{item.title}</span>
            ))}
          </div>
        ) : null}
      </div>
      {isMobile && showNavList ? (
        <div className="flex  flex-col py-4 px-2 h-[calc(100vh-52px)] fixed w-full z-[1000] bg-white">
          <div className="flex h-screen flex-col justify-start items-center border-2 border-black rounded-t-full gap-6 ">
            <div className="pt-16 flex flex-col justify-center items-center gap-6">
              <div className="text-base font-normal text-[#1F1F1F] underline">
                Créer un compte
              </div>
              <div className="text-base font-normal underline">
                Se connecter
              </div>
            </div>
            <div className="">
              <Image src={star} alt="star" />
            </div>
            <div className="flex flex-col justify-center items-center gap-10 flex-wrap">
              {data.map((item) => (
                <span key={item.id}>{item.title}</span>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Header;
