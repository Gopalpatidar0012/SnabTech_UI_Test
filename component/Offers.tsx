"use client";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import React from "react";
import alex from "../public/alex-perri.png";
import alex1 from "../public/alex-perri-At__EKm5PGE-unsplash(1).png";
import alex2 from "../public/alex-perri-At__EKm5PGE-unsplash(2).png";
import alex3 from "../public/alex-perri-At__EKm5PGE-unsplash(3).png";
const Offers = () => {
  const data = [
    {
      id: "1",
      title: "Risk Analyst",
      city: "Madagascar ",
      image: alex,
      name: "Tubik Studio",
    },
    {
      id: "2",
      title: "Risk Analyst",
      city: "Madagascar ",
      image: alex1,
      name: "Bubba Gump",
    },
    {
      id: "3",
      title: "Financial Analyst",
      city: "Madagascar ",
      image: alex2,
      name: "SP-holding",
    },
    {
      id: "4",
      title: "Data Engineer",
      city: "Madagascar",
      image: alex3,
      name: "Vehement Capital Partners",
    },
  ];
  const { isMobile } = useIsMobile();
  return (
    <div
      className={`${
        isMobile ? "pt-[70px] px-7" : "pt-[242px] px-[52px]"
      } flex flex-col md:flex-row justify-start items-start h-screen w-full gap-[37px] md:gap-[80px]`}
    >
      <div
        className={`flex flex-col md:justify-between gap-5 items-start w-full max-w-1/2 h-full`}
      >
        <div
          className={`text-[#1F1F1F] font-medium ${
            !isMobile ? "text-4xl w-1/3 pt-[60px]" : "text-base w-full"
          } break-words `}
        >
          Offres d'emploi
        </div>
        <div className="flex flex-col justify-start items-start w-full gap-[36px]">
          <div className="md:w-[291px]">
            Publiez les offres d'emploi au sein de votre organisation auprès de
            notre communauté d'experts! Expert à la recherche d'un emploi en
            Afrique? Trouvez le job de vos rêves!
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
      <div className="grid grid-cols-2 place-self-center w-full md:gap-[15px] gap-5 h-full">
        {data.map((item) => (
          <div
            className={`px-[19px] py-[25px] w-full gap-[14px] md:gap-[55px] flex flex-col rounded-[200px] border-gary-300 border-2 p-4`}
            key={item.id}
          >
            <div className="flex flex-col gap-[21px] w-full">
              <div className="flex flex-col justify-center items-center gap-[6px] w-full">
                <div
                  className={`text-center text-[#1F1F1F] ${
                    !isMobile ? "text-3xl" : "text-sm"
                  } font-medium w-full h-full max-h-[30px]`}
                >
                  {item.title}
                </div>
                <div className="text-[#A95454] text-base font-normal">
                  {item.city}
                </div>
              </div>
              <div className="flex justify-end items-end w-full gap-4">
                <div className="flex flex-col justify-end items-start w-full">
                  <div className="text-[#A95454] text-base font-medium">
                    Full-time
                  </div>
                  <div className="text-[#1F1F1F] text-base font-medium underline w-full">
                    + Favorites
                  </div>
                </div>
                {!isMobile && (
                  <div className="w-full flex flex-col justify-center items-center gap-4">
                    <Image
                      src={item.image}
                      alt="alex"
                      width={79}
                      height={77}
                      className=""
                    />
                    <span className="w-full text-[#1F1F1F] text-sm font-bold text-center h-[36px]">
                      {item.name}
                    </span>
                  </div>
                )}
                <div className="w-full flex flex-col justify-center items-center md:pb-[30px]">
                  1 day ago
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <div
                className={`px-10 ${
                  !isMobile ? "py-5" : "py-[18px]"
                } border border-[#1F1F1F] rounded-full w-full text-center `}
              >
                <span className="text-base font-normal text-[#1F1F1F]">
                  Voir
                </span>
              </div>
            </div>
          </div>
        ))}
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

export default Offers;
