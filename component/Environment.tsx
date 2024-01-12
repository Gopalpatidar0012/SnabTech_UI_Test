"use client";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import React from "react";
import image75 from "../public/image75.png";
import profile from "../public/alex-perri-At__EKm5PGE-unsplash (4).png";

const Environment = () => {
  const { isMobile } = useIsMobile();
  return (
    <div
      className={`${
        isMobile ? "pt-[70px] px-7" : "pt-[242px] px-[52px]"
      } flex flex-col justify-start items-start h-full w-full gap-[40px]`}
    >
      <div className="flex md:gap-[40px] gap-[10px] justify-start items-start w-full">
        <div className="flex flex-col  gap-[36px] w-1/2">
          <div className="flex gap-2">
            <div className="border-2 border-t-black w-16"></div>
            <div className="border-2 border-t-gray w-16"></div>
            <div className="border-2 border-t-gray w-16"></div>
          </div>
          <div className={`flex flex-col gap-5 md:w-[230px] w-full `}>
            <div
              className={`text-[#1F1F1F] font-medium ${
                !isMobile ? "text-4xl" : "text-xl w-full"
              } break-words `}
            >
              Evénements à venir
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span>Publié par: Pablo Diahuno</span>
            <Image src={profile} alt="profile" className="rounded-full" />
          </div>
          <div className="flex flex-col gap-[29px]">
            <div className="text-base font-normal text-[#1F1F1F] line-clamp-6">
              Sortez votre carnet d'adresses! Restez informés de tous les
              événements à venir autour du business en Afrique organisés en
              Afrique ou à l'étranger.
            </div>
            {!isMobile && (
              <div className="w-full flex justify-center items-center">
                <div className="px-10 py-5 border border-[#1F1F1F] rounded-full w-full text-center ">
                  <span className="text-base font-normal text-[#1F1F1F]">
                    Publier ou postuler à une offre d'emploi
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-[20px] md:gap-[40px]">
          <div className="w-full flex flex-col justify-center items-center">
            <Image src={image75} alt="image75" className="rounded-full" />
          </div>
          <div className="max-w-[248px] w-full">
            <div className="text-base font-normal">
              L'événement:
              <span className="text-[#A95454] text-sm font-bold">
                The Nancy party’s
              </span>
            </div>
            <div className="text-base font-normal">
              Date:
              <span className="text-[#A95454] text-sm font-bold">10/07/22</span>
            </div>
            <div className="text-base font-normal">
              Lieu:
              <span className="text-[#A95454] text-sm font-bold">Senegal</span>
            </div>
          </div>
        </div>
      </div>
      {isMobile && (
        <div className="w-full flex justify-center items-center">
          <div className="px-10 py-5 border border-[#1F1F1F] rounded-full w-full text-center ">
            <span className="text-base font-normal text-[#1F1F1F]">
              Publier ou postuler à une offre d'emploi
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Environment;
