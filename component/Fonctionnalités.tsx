"use client";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import React from "react";
import star from "../public/north-star-24 (1).png";
import fonctionImage from "../public/Rectangle11.png";

const Fonctionnalités = () => {
  const data = [
    {
      id: "1",
      title: "Sélection de profils",
      count: false,
      desc: "Sélectionnez les meilleurs profils d'experts ou organisations qui vous intéressent et entrez en contact avec eux! ",
    },
    {
      id: "2",
      title: " Publication",
      count: false,
      desc: "Offres d’emploi, annonces, collaborations, événements, etc. Publiez du contenu exclusif sur votre page privée !",
    },
    {
      id: "3",
      title: "TRAVEL MAP",
      count: false,
      desc: "Rencontrez-vous grâce à notre Travel Map! Cette fonctionnalité permet aux experts de notifier leurs déplacements sur le continent africain. Il ne reste plus qu'à planifier la rencontre! ",
    },
    {
      id: "4",
      title: "Filtres & recherche avancée",
      count: true,
      desc: " Ciblez vos recherches par secteur d'activité, pays et plus encore. ",
    },
    {
      id: "5",
      title: "NOTIFICATIONS",
      count: true,
      desc: "Soyez directement avertis des nouvelles publications et mises à jour grâce aux notifications.",
    },
  ];
  const { isMobile } = useIsMobile();
  return (
    <div
      className={`${
        isMobile ? "pt-[70px] px-7" : "pt-[242px] px-[52px]"
      } flex flex-col justify-start items-start`}
    >
      <div
        className={`text-[#1F1F1F] font-medium ${
          !isMobile ? "text-4xl" : "text-base"
        } text-center break-words`}
      >
        Fonctionnalités
      </div>
      <div
        className={`flex ${
          !isMobile ? "gap-[118px]" : "gap-[60px]"
        } w-full justify-center items-center flex-col md:flex-row`}
      >
        <div
          className={`grid grid-cols-2  lg:grid-cols-3 gap-5 w-full ${
            isMobile ? "pt-[24px]" : "pt-[57px]"
          }`}
        >
          {data.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col ${
                item.count
                  ? "rounded-b-full border-[#A95454] border-t-0 border-l-0 border-r-0 border"
                  : "rounded-t-full border-[#A95454] border-b-0 border-l-0 border-r-0 border"
              } w-full justify-center items-center flex-wrap gap-8`}
            >
              <span className="pt-10">
                <Image src={star} alt="star" />
              </span>
              <div className="flex flex-col gap-7 w-full">
                <div
                  className={`text-[#1F1F1F] font-medium ${
                    !isMobile ? "text-lg" : "text-xs"
                  } text-center break-words`}
                >
                  {item.title}
                </div>
                <div className="text-[#1F1F1F] font-normal text-sm text-center line-clamp-6 h-[144px] pb-2">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`flex flex-col justify-center items-center ${
            !isMobile ? "gap-[69px] w-1/2" : "gap-[58px]"
          }`}
        >
          <div className="w-full">
            <Image src={fonctionImage} alt="fonctionImage" />
          </div>

          <div className="px-10 py-5 border border-[#1F1F1F] rounded-full w-full text-center">
            <span className="text-base font-normal text-[#1F1F1F]">
              Explorer la Travel Map
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fonctionnalités;
