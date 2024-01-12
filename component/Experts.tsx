"use client";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import React from "react";
import developer from "../public/developer-working.png";
import blackwoman from "../public/black-woman-city1.png";
import vertical from "../public/vertical-close-up.png";

const Experts = () => {
  const { isMobile } = useIsMobile();
  return (
    <div
      className={`${
        isMobile
          ? "pt-[70px] px-7 gap-[50px]"
          : "pt-[242px] px-[52px] gap-[102px]"
      } flex flex-col md:flex-row justify-start items-start h-[1070px]`}
    >
      <div className="flex flex-col justify-between items-start w-full h-full gap-5">
        <div className="flex flex-col gap-[38px]">
          {!isMobile && (
            <div className="flex gap-2">
              <div className="border-2 border-t-black w-16"></div>
              <div className="border-2 border-t-gray w-16"></div>
              <div className="border-2 border-t-gray w-16"></div>
            </div>
          )}
          <div
            className={`text-[#1F1F1F] font-medium ${
              !isMobile ? "text-4xl" : "text-base"
            } text-center break-words`}
          >
            Découvrez les experts
          </div>
        </div>
        <div className="flex flex-col gap-[66.57px]">
          <div className="text-[#1F1F1F] text-base font-normal">
            Connectez-vous avec des organisations africaines, postulez au job de
            vos rêves en Afrique ou partagez votre expertise même à distance!
          </div>
          {isMobile ? (
            <div className="flex gap-2">
              <div className="border-2 border-t-black w-16"></div>
              <div className="border-2 border-t-gray w-16"></div>
              <div className="border-2 border-t-gray w-16"></div>
            </div>
          ) : (
            <div className="px-10 py-5 border border-[#1F1F1F] rounded-full w-full text-center">
              <span className="text-base font-normal text-[#1F1F1F]">
                Voir tout
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex flex-col gap-16 md:gap-2">
        <div
          className={`text-[#1F1F1F] ${
            !isMobile ? "text-[40px]" : "text-base"
          } line-clamp-6 font-medium`}
        >
          “ Mon rêve était d’aller vivre en Afrique. j'ai postulé à une offre
          d'emploi pour le poste de web developer publiée sur PANDA et le mois
          suivant je commençais à travailler à Dakar! ”
        </div>
        <span className="text-[#A95454] text-sm font-bold flex justify-end">
          Omar Ndiaye
        </span>
        <div className="flex justify-start items-end">
          <div
            className={`${
              isMobile ? "h-0" : "h-[492px]"
            } flex flex-col justify-end`}
          >
            <Image src={developer} alt="developer" className="rounded-t-full" />
          </div>
          <div
            className={`${
              isMobile ? "h-0" : "h-[492px]"
            } flex flex-col justify-end`}
          >
            <Image
              src={blackwoman}
              alt="blackwoman"
              className="rounded-t-full"
            />
          </div>
          <div className="h-[300px] flex flex-col justify-end">
            <Image src={vertical} alt="vertical" className="rounded-t-full" />
          </div>
        </div>
        {isMobile && (
          <div className="w-full flex justify-center items-center">
            <div className="px-10 py-5 border border-[#1F1F1F] rounded-full w-[160px] text-center ">
              <span className="text-base font-normal text-[#1F1F1F]">
                Voir tout
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experts;
