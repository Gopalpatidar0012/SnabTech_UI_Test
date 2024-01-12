"use client";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import React from "react";
import image751 from "../public/image 75 (1).png";

const Témoignages = () => {
  const { isMobile } = useIsMobile();
  return (
    <div
      className={`${
        isMobile
          ? "pt-[70px] px-7 gap-[50px]"
          : "pt-[242px] px-[52px] gap-[102px]"
      } flex  flex-col md:flex-row justify-start items-start h-full w-full`}
    >
      <div className="flex w-full">
        <div className="flex flex-col justify-start items-start w-full md:w-1/6 h-full gap-[38px] md:gap-[121px]">
          <div className="flex flex-col gap-[41px] md:gap-[56px]">
            <div className="flex gap-2">
              <div className="border-2 border-t-black w-16"></div>
              <div className="border-2 border-t-gray w-16"></div>
              <div className="border-2 border-t-gray w-16"></div>
            </div>
            <div
              className={`text-[#1F1F1F] font-medium ${
                !isMobile ? "text-4xl" : "text-xl w-full"
              } break-words `}
            >
              Témoignages
            </div>
            <div className="flex flex-col gap-5">
              <div className="text-base font-normal flex flex-col">
                Diaspora Member:
                <span className="text-[#A95454] text-sm font-bold">
                  Artur Luison
                </span>
              </div>
              <div className="text-base font-normal flex flex-col">
                Job Position:
                <span className="text-[#A95454] text-sm font-bold">
                  Manager
                </span>
              </div>
            </div>
          </div>
          <div className="text-base font-medium text-[#1F1F1F] line-clamp-6">
            “ Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget
            volutpat elementum cum turpis feugiat imperdiet auctor accumsan. Ut
            pulvinar orci. “
          </div>
        </div>
        <div className="w-full flex flex-col pt-8 md:pt-0 justify-start md:justify-center items-center">
          <Image src={image751} alt="image" className="rounded-full" />
        </div>
        {!isMobile && (
          <div className="flex flex-col gap-[99px]">
            <div className="flex gap-2">
              <div className="border-2 border-t-black w-16"></div>
              <div className="border-2 border-t-gray w-16"></div>
              <div className="border-2 border-t-gray w-16"></div>
            </div>
            <div className="flex flex-col gap-3 md:gap-[39px]">
              <div className="text-base font-bold text-[#1F1F1F]">
                Very Nice Atmosphere and experience with “Welcome to PANDA”
              </div>
              <div className="flex flex-col gap-3 md:gap-[56px]">
                <div className="text-base font-normal text-[#1F1F1F]">
                  Risus, sed venenatis sed morbi lectus nunc tincidunt quam.
                  Eget volutpat elementum cum turpis feugiat imperdiet auctor
                  accumsan. Ut pulvinar orci.
                </div>
                <div className="text-base font-normal text-[#1F1F1F]">
                  Risus, sed venenatis sed morbi lectus nunc tincidunt quam.
                  Eget volutpat elementum cum turpis feugiat imperdiet auctor
                  accumsan. Ut pulvinar orci.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {isMobile && (
        <div className="flex flex-col gap-[99px]">
          <div className="flex flex-col gap-[39px]">
            <div className="text-base font-bold text-[#1F1F1F]">
              Very Nice Atmosphere and experience with “Welcome to PANDA”
            </div>
            <div className="flex flex-col gap-[56px]">
              <div className="text-base font-normal text-[#1F1F1F]">
                Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget
                volutpat elementum cum turpis feugiat imperdiet auctor accumsan.
                Ut pulvinar orci.
              </div>
              <div className="text-base font-normal text-[#1F1F1F]">
                Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget
                volutpat elementum cum turpis feugiat imperdiet auctor accumsan.
                Ut pulvinar orci.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Témoignages;
