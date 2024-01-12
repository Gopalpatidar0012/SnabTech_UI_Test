"use client";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import React from "react";
import image from "../public/agri.png";
import star from "../public/north-star-24 (1).png";

const Domaines = () => {
  const data = [
    { id: "1", title: "Les énergies renouvelables" },
    { id: "2", title: "L'agro-alimentaire" },
    { id: "3", title: "Les technologies" },
    { id: "4", title: "Le e-commerce" },
    { id: "5", title: "Les solutions de paiement" },
  ];
  const { isMobile } = useIsMobile();
  return (
    <div
      className={`${
        isMobile
          ? "pt-[70px] px-7 gap-[50px]"
          : "pt-[242px] px-[52px] gap-[64px]"
      } flex flex-col justify-start items-start w-full h-full`}
    >
      <div className="flex flex-col justify-start items-start w-full h-full">
        <div className="text-[#1F1F1F] text-[20px] md:text-[65px] font-medium max-w-[900px] w-full">
          Top 5 des domaines d’activités porteurs en Afrique
        </div>

        <div className="flex justify-between w-full">
          <div className="w-1/3 flex flex-col justify-center items-center">
            <Image src={image} alt="image" className="rounded-full" />
          </div>
          <div className="flex flex-col gap-[69px]">
            <div className="flex gap-2">
              <div className="border-2 border-t-black w-16"></div>
              <div className="border-2 border-t-gray w-16"></div>
              <div className="border-2 border-t-gray w-16"></div>
            </div>
            <div className="flex flex-col gap-[30px] w-full">
              {data.map((item, index) => (
                <div
                  className="flex justify-start items-center gap-2"
                  key={item.id}
                >
                  <Image src={star} alt="star" className="w-4 h-4" />
                  <div
                    className={`${
                      index === 1 ? "text-[#A95454]" : "text-[#1F1F1F]"
                    } tex-[15px] md:text-[40px] font-medium w-full`}
                  >
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
            {!isMobile && (
              <div className="w-full flex justify-start items-center">
                <div className="px-10 py-5 border border-[#1F1F1F] rounded-full text-center ">
                  <span className="text-base font-normal text-[#1F1F1F]">
                    Suivant
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {isMobile && (
        <div className="w-full flex justify-center items-center">
          <div className="px-10 py-5 border border-[#1F1F1F] rounded-full text-center ">
            <span className="text-base font-normal text-[#1F1F1F]">
              Suivant
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Domaines;
