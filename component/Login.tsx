"use client";
import React from "react";
import image from "../public/group-afro-americans-working-together (1).png";
import Image from "next/image";
import star from "../public/north-star-24 (1).png";
import CBInput from "./Input";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      <div>
        <Image src={image} alt="image" />
      </div>
      <div>
        <div>
          <span>Join PANDA </span>
          <span>or</span>
          <span>Sign in</span>
        </div>
        <div>
          <Image src={star} alt="star" />
          <div>Forgot password</div>
          <CBInput
            type="text"
            placeholder="Email address"
            onChangeFunc={() => {}}
          />
          <div>
            Please enter your login email address to receive your password reset
            link.
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          <div className="px-10 py-5 border border-[#1F1F1F] rounded-full w-[160px] text-center ">
            <span className="text-base font-normal text-[#1F1F1F]">
              Voir tout
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
