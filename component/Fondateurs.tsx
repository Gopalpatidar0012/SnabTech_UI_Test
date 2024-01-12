"use client";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import React from "react";
import image1 from "../public/Rectangle 97 (2).png";
import image2 from "../public/Rectangle 97 (3).png";

const Fondateurs = () => {
  const { isMobile } = useIsMobile();
  return (
    <div
      className={`${
        isMobile
          ? "pt-[70px] px-7 gap-[50px]"
          : "pt-[242px] px-[52px] gap-[102px]"
      } flex flex-col justify-start items-start w-full h-screen`}
    >
      <div
        className={`text-[#1F1F1F] font-medium ${
          !isMobile ? "text-4xl" : "text-xl w-full"
        } break-words `}
      >
        Les fondateurs
      </div>
      <div className="flex flex-col md:flex-row w-full h-full max-h-[600px]">
        <div className="flex w-full gap-8">
          <div className="flex flex-col justify-start gap-4">
            <Image src={image1} alt="image" />
            <div className="flex flex-col text-[13px] font-bold text-[#1F1F1F] ">
              Co-fondateur PANDA:{" "}
              <span className="text-[13px] font-bold text-[#A95454] ">
                Sarah Walu Onya
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-start gap-4">
            <Image src={image2} alt="image" />
            <div className="flex flex-col text-[13px] font-bold text-[#1F1F1F] ">
              Co-fondateur PANDA:{" "}
              <span className="text-[13px] font-bold text-[#A95454] ">
                Abdoulaye Ba
              </span>
            </div>
          </div>
        </div>
        {isMobile ? (
          <div className="flex gap-2 pt-[28px] w-full">
            <div className="text-[14px] font-normal text-[#1F1F1F] border rounded-t-full border-[#CECBC8] pt-20 pb-2 px-6 w-full">
              “<span className="text-[#A95454]"> Sarah et Abdoulaye</span> sont
              tous deux consultants et managers dans un groupe international de
              conseil en stratégie et management. Ils se sont rencontrés au
              Luxembourg et ont beaucoup échangé sur leur pour l'entrepreneuriat
              et leur amour de l'Afrique, le continent dont ils sont tous deux
              originaires. “
            </div>
            <div className="text-[14px] font-normal text-[#1F1F1F] border rounded-t-full border-[#CECBC8] pt-20 pb-2 w-full px-6">
              Ils sont alors convaincus qu'ils peuvent répondre à un besoin
              critique en Afrique et avoir un réel impact en réunissant des
              experts de premier plan du monde entier pour collaborer avec des
              acteurs africains sur des projets visant à faire croître
              l'écosystème de l'innovation en{" "}
              <span className="text-[#A95454]">Afrique.</span>
            </div>
          </div>
        ) : (
          <div className="w-1/3 flex-col flex gap-[27px] h-full border rounded-t-full border-[#CECBC8] pt-24 pb-4 px-6 ">
            <div className="text-[14px] font-normal text-[#1F1F1F] ">
              “ <span className="text-[#A95454]"> Sarah et Abdoulaye</span> sont
              tous deux consultants et managers dans un groupe international de
              conseil en stratégie et management. Ils se sont rencontrés au
              Luxembourg et ont beaucoup échangé sur leur expérience commune
              dans l'entrepreneuriat. Tout au long de leurs discussions, une
              chose très claire est vite apparue : leur passion pour
              l'entrepreneuriat et leur amour de l'Afrique, le continent dont
              ils sont tous deux originaires. “
            </div>
            <div className="text-[14px] font-normal text-[#1F1F1F] ">
              Ils sont alors convaincus qu'ils peuvent répondre à un besoin
              critique en Afrique et avoir un réel impact en réunissant des
              experts de premier plan du monde entier pour collaborer avec des
              acteurs africains sur des projets visant à faire croître
              l'écosystème de l'innovation en{" "}
              <span className="text-[#A95454]">Afrique.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Fondateurs;
