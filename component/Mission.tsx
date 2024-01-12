"use client";
import useIsMobile from "@/hooks/useIsMobile";
import React from "react";

const Mission = () => {
  const data = [
    {
      id: "1",
      title: "Networking",
      count: "01",
      desc: "Faciliter la mise en réseau “networking” entre les organisations situées en Afrique et les experts et entrepreneurs africains et internationaux.",
    },
    {
      id: "2",
      title: "Partage",
      count: "02",
      desc: "Promouvoir le partage de connaissances et d’expertises. ",
    },
    {
      id: "3",
      title: "Evénements",
      count: "03",
      desc: "Augmenter la visibilité des offres d’emploi en Afrique et faciliter le recrutement de professionnels  qualifiés.",
    },
    {
      id: "4",
      title: "Collaborations",
      count: "04",
      desc: " Créer des opportunités de collaborations en Afrique.",
    },
    {
      id: "5",
      title: "Recrutement",
      count: "05",
      desc: "Augmenter la visibilité des évenements autour du “Business in Africa”.",
    },
  ];
  const { isMobile } = useIsMobile();
  return (
    <div
      className={`${
        isMobile ? "pt-[70px] px-7" : "pt-[185px] px-[52px]"
      } flex flex-col justify-start items-start`}
    >
      <div
        className={`text-[#1F1F1F] text-center ${
          !isMobile ? "text-6xl" : "text-xl"
        } font-medium `}
      >
        Missions de PANDA
      </div>

      <div
        className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 ${
          isMobile ? "pt-[24px]" : "pt-[57px]"
        }`}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col rounded-t-full border-[#A95454] border w-full justify-center items-center flex-wrap gap-8 overflow-hidden pb-2"
          >
            <span className="pt-20">{item.count}</span>
            <div className="flex flex-col gap-5 w-full">
              <div
                className={`text-[#1F1F1F] font-medium ${
                  !isMobile ? "text-4xl" : "text-base"
                } text-center break-words`}
              >
                {item.title}
              </div>
              <div className="text-[#1F1F1F] font-normal text-sm text-center h-full max-h-[154px] pb-2">
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mission;
