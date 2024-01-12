"use client";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import React from "react";
import africa from "../public/clout-africa-ic5A6FNjcns-unsplash.png";
import Rectangle from "../public/Rectangle97.png";
import Rectangle971 from "../public/Rectangle97(1).png";

const Organization = () => {
  const { isMobile } = useIsMobile();
  return (
    <div
      className={`${
        isMobile
          ? "pt-[70px] px-7 gap-[50px]"
          : "pt-[242px] px-[52px] gap-[102px]"
      } flex flex-col md:flex-row justify-start items-start h-[1070px]`}
    >
      <div className="w-full flex flex-col gap-16 md:gap-2">
        <div
          className={`text-[#1F1F1F] ${
            !isMobile ? "text-[40px]" : "text-base"
          } font-medium`}
        >
          “PANDA nous donne accès aux meilleurs talents dans leur domaine
          d'activité et à de réelles perspectives de collaboration! ”
        </div>
        <span className="text-[#A95454] text-sm font-bold flex">
          LGB Company
        </span>
        <div className="flex justify-start items-end">
          <div
            className={`${
              isMobile ? "h-0" : "h-[492px]"
            } flex flex-col justify-end`}
          >
            <Image
              src={Rectangle971}
              alt="developer"
              className="rounded-t-full"
            />
          </div>
          <div
            className={`${
              isMobile ? "h-0" : "h-[492px]"
            } flex flex-col justify-end`}
          >
            <Image
              src={Rectangle}
              alt="blackwoman"
              className="rounded-t-full"
            />
          </div>
          <div className="h-[300px] flex flex-col justify-end">
            <Image src={africa} alt="vertical" className="rounded-t-full" />
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
            Découvrez les organisations en Afrique
          </div>
        </div>
        <div className="flex flex-col gap-[66.57px]">
          <div className="text-[#1F1F1F] text-base font-normal">
            Trouvez les experts que vous recherchez, publiez vos offres d'emploi
            et d'autres contenus exclusifs sur votre organisation!
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
    </div>
  );
};

export default Organization;
