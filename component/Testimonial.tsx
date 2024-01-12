"use client";
import useIsMobile from "@/hooks/useIsMobile";
import React from "react";

const Testimonial = () => {
  const { isMobile } = useIsMobile();
  return (
    <div
      className={`${
        isMobile
          ? "pt-[100px] px-7 gap-[17px]"
          : "pt-[242px] px-[52px] gap-[32px]"
      } flex flex-col justify-center items-center w-full`}
    >
      <div className="text-[#1F1F1F] text-[15px] md:text-[40px] font-medium text-center w-full h-full">
        “ Notre objectif est de capturer et partager les connaissances, les
        expertises et les réseaux afin de créer des opportunités illimitées, que
        ce soit pour les acteurs africains à la recherche des meilleures talents
        pour développer leurs activités ou pour les experts du monde entier qui
        souhaitent lancer des projets innovants en Afrique. “
      </div>
      <div className="text-[#A95454] text-[13px] font-bold flex flex-col justify-center items-center md:justify-end md:items-end w-full">
        Sarah et Abdoulaye
      </div>
    </div>
  );
};

export default Testimonial;
