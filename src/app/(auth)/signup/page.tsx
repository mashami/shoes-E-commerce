/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const signup = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [retypePassword, setRetypePassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="md:w-[400px] w-full bg-white p-7 rounded-3xl mx-auto my-auto drop-shadow-lg">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="p-2 rounded-full flex items-center justify-center bg-black/10 ">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 20.9997C20.5523 20.9997 21 20.552 21 19.9997V9.48882C21 9.18023 20.8575 8.88893 20.6139 8.69947L12.6139 2.47725C12.2528 2.19639 11.7472 2.19639 11.3861 2.47725L3.38606 8.69947C3.14247 8.88893 3 9.18023 3 9.48882V19.9997C3 20.552 3.44772 20.9997 4 20.9997H20ZM15.142 14.8036C15.5595 14.1496 15.8018 13.3723 15.8018 12.5397C15.8018 10.2131 13.9138 8.3252 11.5873 8.3252C9.26075 8.3252 7.3728 10.2131 7.3728 12.5397C7.3728 14.8662 9.26075 16.7542 11.5873 16.7542C12.4199 16.7542 13.1972 16.5119 13.8513 16.0944L15.673 17.9162L16.9638 16.6254L15.142 14.8036ZM13.3047 14.2008C13.721 13.7706 13.9763 13.1857 13.9763 12.5397C13.9763 11.2196 12.9073 10.1506 11.5873 10.1506C10.2672 10.1506 9.19824 11.2196 9.19824 12.5397C9.19824 13.8597 10.2672 14.9287 11.5873 14.9287C12.2333 14.9287 12.8182 14.6734 13.2484 14.2571L13.3047 14.2008Z"
                fill="black"
              />
            </svg>
          </div>
          <p className="text-[20px] font-bricolage uppercase font-semibold">
            Shoes Platform
          </p>
        </div>
        <h1 className="text-[20px] font-medium pt-5">Sign up</h1>
        <form action="" className="py-4 space-y-3">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="h-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="h-12 w-full px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md border border-gray-300"
            />
            {!showPassword ? (
              <IoEyeOutline
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              />
            ) : (
              <FaRegEyeSlash
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              />
            )}
          </div>

          <div className="relative">
            <Input
              type={showRetypePassword ? "text" : "password"}
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
              placeholder="Retype Password"
              className="h-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            />

            {!showRetypePassword ? (
              <IoEyeOutline
                onClick={() => setShowRetypePassword(!showRetypePassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              />
            ) : (
              <FaRegEyeSlash
                onClick={() => setShowRetypePassword(!showRetypePassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              />
            )}
          </div>

          <div className="pt-4 space-y-4">
            <Button
              text="Signup"
              disabled={!email || !password || !retypePassword}
              className="text-white rounded-md w-full h-12"
              svg={
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_36_41)">
                    <path
                      d="M9.33332 9.50135V10.8947C8.72994 10.6814 8.08417 10.6159 7.45026 10.7039C6.81634 10.7918 6.21279 11.0306 5.69028 11.4002C5.16777 11.7697 4.74155 12.2592 4.44743 12.8276C4.15331 13.396 3.99987 14.0267 3.99999 14.6667L2.66666 14.666C2.66645 13.8519 2.8526 13.0486 3.21086 12.3176C3.56911 11.5866 4.08995 10.9473 4.73347 10.4487C5.37699 9.95011 6.12611 9.60544 6.92343 9.44112C7.72074 9.27679 8.5451 9.29717 9.33332 9.50069V9.50135ZM7.99999 8.66669C5.78999 8.66669 3.99999 6.87669 3.99999 4.66669C3.99999 2.45669 5.78999 0.666687 7.99999 0.666687C10.21 0.666687 12 2.45669 12 4.66669C12 6.87669 10.21 8.66669 7.99999 8.66669ZM7.99999 7.33335C9.47332 7.33335 10.6667 6.14002 10.6667 4.66669C10.6667 3.19335 9.47332 2.00002 7.99999 2.00002C6.52666 2.00002 5.33332 3.19335 5.33332 4.66669C5.33332 6.14002 6.52666 7.33335 7.99999 7.33335ZM12.9453 11.3334H15.336V12.6667H12.9453L14.1647 13.8854L13.222 14.8287L10.3933 12L13.222 9.17135L14.1647 10.1147L12.9453 11.3334Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_36_41">
                      <rect width={16} height={16} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
            />

            <Button
              variant={"ghost"}
              text="Signup"
              position={"left"}
              className="rounded-md w-full h-12"
              svg={<FcGoogle />}
            />
          </div>
        </form>

        <span className="text-[15px] ">
          if you have alredy an acount click here
          <a href="/signin" className="text-primary pl-2">
            sign in
          </a>
        </span>
      </div>
    </div>
  );
};

export default signup;
