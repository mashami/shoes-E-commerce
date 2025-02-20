"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import LovedSheet from "./LovedSheet";
import MyCartDialog from "./MyCartDialog";
import TooltipComp from "../TooltipComp/TooltipComp";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useAppContext } from "@/utils/context/AppContext";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const [openSheet, setOpenSheet] = useState<boolean>(false);
  const [isMycartDialogOpen, setIsMyCartDialogOpen] = useState<boolean>(false);
  const router = useRouter();
  const { handleSearch, setSearchValue, searchValue } = useAppContext();

  return (
    <>
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center space-x-1 text-[20px] font-bold text-black">
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

          <p>Shoe</p>
        </div>

        <div className="flex items-center space-x-5">
          <form className="flex items-center space-x-3 py-2 px-4 rounded-full border border-black/20">
            <svg
              width={14}
              height={14}
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0206 10.078L13.876 12.9326L12.9326 13.876L10.078 11.0206C9.01581 11.8721 7.69465 12.3353 6.33331 12.3333C3.02131 12.3333 0.333313 9.64531 0.333313 6.33331C0.333313 3.02131 3.02131 0.333313 6.33331 0.333313C9.64531 0.333313 12.3333 3.02131 12.3333 6.33331C12.3353 7.69465 11.8721 9.01581 11.0206 10.078ZM9.68331 9.58331C10.5294 8.71324 11.0019 7.54693 11 6.33331C11 3.75465 8.91131 1.66665 6.33331 1.66665C3.75465 1.66665 1.66665 3.75465 1.66665 6.33331C1.66665 8.91131 3.75465 11 6.33331 11C7.54693 11.0019 8.71324 10.5294 9.58331 9.68331L9.68331 9.58331V9.58331Z"
                fill="#5B5B5B"
              />
            </svg>
            <input
              value={searchValue}
              onChange={(e) => {
                handleSearch(e.target.value);
                setSearchValue(e.target.value);
              }}
              type="text"
              placeholder="Search category of shoes"
              className="outline-none md:min-w-[220px] min-w-[100px]"
            />
          </form>

          <div
            onClick={() => setIsMyCartDialogOpen(true)}
            className="lg:flex hidden items-center space-x-3 py-2 px-4  rounded-full border border-black/20 cursor-pointer select-none"
          >
            <svg
              width={22}
              height={20}
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.77835 20C6.18299 20 5.67333 19.8042 5.24936 19.4125C4.82539 19.0208 4.61341 18.55 4.61341 18C4.61341 17.45 4.82539 16.9792 5.24936 16.5875C5.67333 16.1958 6.18299 16 6.77835 16C7.37371 16 7.88338 16.1958 8.30735 16.5875C8.73132 16.9792 8.9433 17.45 8.9433 18C8.9433 18.55 8.73132 19.0208 8.30735 19.4125C7.88338 19.8042 7.37371 20 6.77835 20ZM17.6031 20C17.0077 20 16.4981 19.8042 16.0741 19.4125C15.6501 19.0208 15.4381 18.55 15.4381 18C15.4381 17.45 15.6501 16.9792 16.0741 16.5875C16.4981 16.1958 17.0077 16 17.6031 16C18.1985 16 18.7081 16.1958 19.1321 16.5875C19.5561 16.9792 19.768 17.45 19.768 18C19.768 18.55 19.5561 19.0208 19.1321 19.4125C18.7081 19.8042 18.1985 20 17.6031 20ZM5.85825 4L8.45619 9H16.0335L19.0103 4H5.85825ZM4.8299 2H20.7964C21.2113 2 21.5271 2.17083 21.7436 2.5125C21.9601 2.85417 21.9691 3.2 21.7706 3.55L17.9278 9.95C17.7294 10.2833 17.4633 10.5417 17.1295 10.725C16.7957 10.9083 16.4304 11 16.0335 11H7.96908L6.77835 13H19.768V15H6.77835C5.9665 15 5.3531 14.6708 4.93815 14.0125C4.5232 13.3542 4.50516 12.7 4.88402 12.05L6.34536 9.6L2.44846 2H0.283508V0H3.80155L4.8299 2Z"
                fill="#E8EAED"
              />
              <path
                d="M5.85825 3.5H5.03499L5.41457 4.23053L8.01251 9.23053L8.15252 9.5H8.45619H16.0335H16.3177L16.4631 9.25578L19.4399 4.25578L19.8899 3.5H19.0103H5.85825ZM4.38524 2.22864L4.52477 2.5H4.8299H20.7964C21.0454 2.5 21.1992 2.58763 21.3212 2.78012L21.7436 2.5125L21.3212 2.78012C21.3894 2.88772 21.4111 2.97285 21.4129 3.04116C21.4146 3.10831 21.398 3.19186 21.3384 3.29859L17.4992 9.69261L17.4982 9.69422C17.3444 9.95249 17.1429 10.1472 16.8888 10.2868C16.632 10.4278 16.35 10.5 16.0335 10.5H7.96908H7.68485L7.53945 10.7442L6.34873 12.7442L5.89877 13.5H6.77835H19.268V14.5H6.77835C6.12923 14.5 5.67983 14.2515 5.36114 13.7459C5.19238 13.4781 5.11933 13.2361 5.11322 13.0143C5.10715 12.7942 5.16599 12.5599 5.31479 12.3039L6.77478 9.85613L6.91664 9.61829L6.79029 9.37187L2.89338 1.77187L2.75398 1.5H2.44846H0.783508V0.5H3.49641L4.38524 2.22864ZM6.77835 19.5C6.30438 19.5 5.91707 19.3486 5.58864 19.0452C5.26142 18.7429 5.11341 18.4029 5.11341 18C5.11341 17.5971 5.26142 17.2571 5.58864 16.9548C5.91707 16.6514 6.30438 16.5 6.77835 16.5C7.25232 16.5 7.63963 16.6514 7.96806 16.9548C8.29529 17.2571 8.4433 17.5971 8.4433 18C8.4433 18.4029 8.29529 18.7429 7.96806 19.0452C7.63963 19.3486 7.25232 19.5 6.77835 19.5ZM17.6031 19.5C17.1291 19.5 16.7418 19.3486 16.4134 19.0452C16.0862 18.7429 15.9381 18.4029 15.9381 18C15.9381 17.5971 16.0862 17.2571 16.4134 16.9548C16.7418 16.6514 17.1291 16.5 17.6031 16.5C18.0771 16.5 18.4644 16.6514 18.7928 16.9548C19.12 17.2571 19.268 17.5971 19.268 18C19.268 18.4029 19.12 18.7429 18.7928 19.0452C18.4644 19.3486 18.0771 19.5 17.6031 19.5Z"
                stroke="black"
                strokeOpacity="0.4"
              />
            </svg>

            <p className="font-bold font-bricolage">My cart</p>
          </div>

          <TooltipComp
            content="My favorates"
            onClick={() => setOpenSheet(true)}
          >
            <div className="p-2 rounded-full border border-black/20 cursor-pointer lg:block hidden">
              <svg
                width={25}
                height={25}
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width={16} height={15} fill="url(#pattern0_120_734)" />
                <defs>
                  <pattern
                    id="pattern0_120_734"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                  >
                    <use
                      xlinkHref="#image0_120_734"
                      transform="matrix(0.03125 0 0 0.0333333 0.03125 0)"
                    />
                  </pattern>
                  <image
                    id="image0_120_734"
                    width={30}
                    height={30}
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABSUlEQVR4nO2Vu0oDQRSGv0JEm9hE0VLBSrCx0crCxiDYSVTIG1hZChEs9SUEK9/AWCtqZeOlN7EUBcEr3jhwimU5s5nZrIMQfzgwLP9/Pmbn7A50q86Ab60bYCUW+DQBlvoAxomsPYXXY4MXFSxvIar6gWfgExiKDT/QXddig9dSw1ZUHbcDj/4SuOWz6ytH+A6oAgPABHAINHQtz5bVY2V3fcA7jvBSyterlVTVkV31Ac86wiWPbMnIffl+JT3Ag9FAzr+dxozcOQHaNxpseuS2jNx2CLhmNHgFJjMyMmQvRm4uBFzWCyPdRCZ+0PDLGV4b/iegj0CdOIbsAhhO+GR96fA2yKGNjB9CE5jRamb41vOAR4DHDv5W93pkuTSt1+R7APANOAKm8kK7VwvArd4wlQJ83mqlprlT398HV7SpNJsvwPcvougHZdfgoPxJIjEAAAAASUVORK5CYII="
                  />
                </defs>
              </svg>

              {/* <svg
                width={16}
                height={15}
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.2714 12.7714C14.1797 13.8632 12.7951 15.1651 11.1157 16.6782C11.1156 16.6783 11.1155 16.6784 11.1153 16.6785L10 17.6785L8.88469 16.6785C8.88454 16.6784 8.8844 16.6783 8.88426 16.6782C7.20494 15.1651 5.82026 13.8632 4.72855 12.7714C3.63918 11.6821 2.78211 10.7134 2.15137 9.86434C1.52024 9.01474 1.09558 8.25518 0.859094 7.58387C0.619291 6.90314 0.5 6.20927 0.5 5.5C0.5 4.05783 0.977907 2.8792 1.92855 1.92855C2.8792 0.977907 4.05783 0.5 5.5 0.5C6.29356 0.5 7.04619 0.667301 7.76303 1.00285C8.48066 1.33876 9.09824 1.81113 9.61903 2.42382L10 2.87202L10.381 2.42382C10.9018 1.81113 11.5193 1.33876 12.237 1.00285C12.9538 0.667301 13.7064 0.5 14.5 0.5C15.9422 0.5 17.1208 0.977907 18.0714 1.92855C19.0221 2.8792 19.5 4.05783 19.5 5.5C19.5 6.20927 19.3807 6.90314 19.1409 7.58387C18.9044 8.25518 18.4798 9.01474 17.8486 9.86434C17.2179 10.7134 16.3608 11.6821 15.2714 12.7714ZM9.66638 16.0224L10 16.3213L10.3336 16.0224C11.9373 14.5858 13.2607 13.3505 14.3021 12.3175C15.3433 11.2847 16.1752 10.3775 16.7921 9.59774C17.4085 8.81875 17.857 8.10039 18.1151 7.44593C18.3694 6.80115 18.5 6.15158 18.5 5.5C18.5 4.37632 18.1201 3.41301 17.3536 2.64645C16.587 1.87988 15.6237 1.5 14.5 1.5C13.6163 1.5 12.7956 1.75097 12.0489 2.24568C11.4082 2.6701 10.9257 3.2051 10.6182 3.85H9.38175C9.07431 3.2051 8.59179 2.6701 7.95115 2.24568C7.20442 1.75097 6.38371 1.5 5.5 1.5C4.37632 1.5 3.41301 1.87988 2.64645 2.64645C1.87988 3.41301 1.5 4.37632 1.5 5.5C1.5 6.15158 1.63058 6.80115 1.88486 7.44593C2.14296 8.10039 2.59154 8.81875 3.20789 9.59774C3.82483 10.3775 4.65666 11.2847 5.69788 12.3175C6.73932 13.3505 8.06272 14.5858 9.66638 16.0224Z"
                  fill="#E8EAED"
                  stroke="black"
                />
              </svg> */}
            </div>
          </TooltipComp>
        </div>

        <div className="lg:flex hidden items-center space-x-2 ">
          <Button
            onClick={() => router.push("/signin")}
            text="Sign in"
            className="text-white bg-[#8155FF] hover:bg-[#8155FF]/80 transition ease-in-out duration-300"
          />

          <Button
            onClick={() => router.push("/signup")}
            variant={"ghost"}
            text="Sign up"
            className="text-black  transition duration-300 ease-in-out space-x-2 flex items-center"
            svg={
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_36_41)">
                  <path
                    d="M9.33332 9.50135V10.8947C8.72994 10.6814 8.08417 10.6159 7.45026 10.7039C6.81634 10.7918 6.21279 11.0306 5.69028 11.4002C5.16777 11.7697 4.74155 12.2592 4.44743 12.8276C4.15331 13.396 3.99987 14.0267 3.99999 14.6667L2.66666 14.666C2.66645 13.8519 2.8526 13.0486 3.21086 12.3176C3.56911 11.5866 4.08995 10.9473 4.73347 10.4487C5.37699 9.95011 6.12611 9.60544 6.92343 9.44112C7.72074 9.27679 8.5451 9.29717 9.33332 9.50069V9.50135ZM7.99999 8.66669C5.78999 8.66669 3.99999 6.87669 3.99999 4.66669C3.99999 2.45669 5.78999 0.666687 7.99999 0.666687C10.21 0.666687 12 2.45669 12 4.66669C12 6.87669 10.21 8.66669 7.99999 8.66669ZM7.99999 7.33335C9.47332 7.33335 10.6667 6.14002 10.6667 4.66669C10.6667 3.19335 9.47332 2.00002 7.99999 2.00002C6.52666 2.00002 5.33332 3.19335 5.33332 4.66669C5.33332 6.14002 6.52666 7.33335 7.99999 7.33335ZM12.9453 11.3334H15.336V12.6667H12.9453L14.1647 13.8854L13.222 14.8287L10.3933 12L13.222 9.17135L14.1647 10.1147L12.9453 11.3334Z"
                    fill="#5B5B5B"
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
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="lg:hidden block outline-none">
            <svg
              width={37}
              height={28}
              viewBox="0 0 27 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width={27} height={18} fill="url(#pattern0_105_731)" />
              <defs>
                <pattern
                  id="pattern0_105_731"
                  patternContentUnits="objectBoundingBox"
                  width={1}
                  height={1}
                >
                  <use
                    xlinkHref="#image0_105_731"
                    transform="matrix(0.0222222 0 0 0.0333333 0.166667 0)"
                  />
                </pattern>
                <image
                  id="image0_105_731"
                  width={30}
                  height={30}
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVR4nO3VsQkAMAwDwd9/rGiwZIIUAYs0f6DaIBAGSQUBdjn5dXg1GpOunJM0Jn4nSTw4Ff6YkoE1i0QAAAAASUVORK5CYII="
                />
              </defs>
            </svg>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="absolute top-4 -right-4 w-[170px]">
            <DropdownMenuItem>
              <div
                onClick={() => router.push("/signin")}
                className="flex items-center justify-between space-x-3 p-2  rounded-xl w-full border border-black/20 cursor-pointer select-none bg-[#8155FF]"
              >
                <p className="font-bold font-bricolage text-white">Sign in</p>

                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect width={30} height={30} fill="url(#pattern0_109_736)" />
                  <defs>
                    <pattern
                      id="pattern0_109_736"
                      patternContentUnits="objectBoundingBox"
                      width={1}
                      height={1}
                    >
                      <use
                        xlinkHref="#image0_109_736"
                        transform="scale(0.0333333)"
                      />
                    </pattern>
                    <image
                      id="image0_109_736"
                      width={30}
                      height={30}
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAjUlEQVR4nO3WTQqAIBBAYY/Tola1qwNU144uklDUJV4ILvsbE4XybW38YKBIqVTsgB7QuGdmOxdY877JBfZSgm/zs+iPrLoGKmANDZf2PH+C+4Q3oLDPZMAcChbhV8AoGji+o3KBhyjwWchWvYSAt6foZ16nJtYHRFSCb/vlqnWsn73ODL5BgVYMp5TndnyOZgYIV7JsAAAAAElFTkSuQmCC"
                    />
                  </defs>
                </svg>
              </div>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <div
                onClick={() => router.push("/signup")}
                className="flex items-center justify-between space-x-3 p-2  rounded-xl w-full border border-black/20 cursor-pointer select-none"
              >
                <p className="font-bold font-bricolage">Sign up</p>

                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_36_41)">
                    <path
                      d="M9.33332 9.50135V10.8947C8.72994 10.6814 8.08417 10.6159 7.45026 10.7039C6.81634 10.7918 6.21279 11.0306 5.69028 11.4002C5.16777 11.7697 4.74155 12.2592 4.44743 12.8276C4.15331 13.396 3.99987 14.0267 3.99999 14.6667L2.66666 14.666C2.66645 13.8519 2.8526 13.0486 3.21086 12.3176C3.56911 11.5866 4.08995 10.9473 4.73347 10.4487C5.37699 9.95011 6.12611 9.60544 6.92343 9.44112C7.72074 9.27679 8.5451 9.29717 9.33332 9.50069V9.50135ZM7.99999 8.66669C5.78999 8.66669 3.99999 6.87669 3.99999 4.66669C3.99999 2.45669 5.78999 0.666687 7.99999 0.666687C10.21 0.666687 12 2.45669 12 4.66669C12 6.87669 10.21 8.66669 7.99999 8.66669ZM7.99999 7.33335C9.47332 7.33335 10.6667 6.14002 10.6667 4.66669C10.6667 3.19335 9.47332 2.00002 7.99999 2.00002C6.52666 2.00002 5.33332 3.19335 5.33332 4.66669C5.33332 6.14002 6.52666 7.33335 7.99999 7.33335ZM12.9453 11.3334H15.336V12.6667H12.9453L14.1647 13.8854L13.222 14.8287L10.3933 12L13.222 9.17135L14.1647 10.1147L12.9453 11.3334Z"
                      fill="#5B5B5B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_36_41">
                      <rect width={16} height={16} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <div
                onClick={() => setOpenSheet(true)}
                className="rounded-xl border border-black/20 cursor-pointer flex items-center justify-between space-x-2 p-2 w-full"
              >
                <p className="font-bold font-bricolage">My favorates</p>

                <svg
                  width={16}
                  height={15}
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.2714 12.7714C14.1797 13.8632 12.7951 15.1651 11.1157 16.6782C11.1156 16.6783 11.1155 16.6784 11.1153 16.6785L10 17.6785L8.88469 16.6785C8.88454 16.6784 8.8844 16.6783 8.88426 16.6782C7.20494 15.1651 5.82026 13.8632 4.72855 12.7714C3.63918 11.6821 2.78211 10.7134 2.15137 9.86434C1.52024 9.01474 1.09558 8.25518 0.859094 7.58387C0.619291 6.90314 0.5 6.20927 0.5 5.5C0.5 4.05783 0.977907 2.8792 1.92855 1.92855C2.8792 0.977907 4.05783 0.5 5.5 0.5C6.29356 0.5 7.04619 0.667301 7.76303 1.00285C8.48066 1.33876 9.09824 1.81113 9.61903 2.42382L10 2.87202L10.381 2.42382C10.9018 1.81113 11.5193 1.33876 12.237 1.00285C12.9538 0.667301 13.7064 0.5 14.5 0.5C15.9422 0.5 17.1208 0.977907 18.0714 1.92855C19.0221 2.8792 19.5 4.05783 19.5 5.5C19.5 6.20927 19.3807 6.90314 19.1409 7.58387C18.9044 8.25518 18.4798 9.01474 17.8486 9.86434C17.2179 10.7134 16.3608 11.6821 15.2714 12.7714ZM9.66638 16.0224L10 16.3213L10.3336 16.0224C11.9373 14.5858 13.2607 13.3505 14.3021 12.3175C15.3433 11.2847 16.1752 10.3775 16.7921 9.59774C17.4085 8.81875 17.857 8.10039 18.1151 7.44593C18.3694 6.80115 18.5 6.15158 18.5 5.5C18.5 4.37632 18.1201 3.41301 17.3536 2.64645C16.587 1.87988 15.6237 1.5 14.5 1.5C13.6163 1.5 12.7956 1.75097 12.0489 2.24568C11.4082 2.6701 10.9257 3.2051 10.6182 3.85H9.38175C9.07431 3.2051 8.59179 2.6701 7.95115 2.24568C7.20442 1.75097 6.38371 1.5 5.5 1.5C4.37632 1.5 3.41301 1.87988 2.64645 2.64645C1.87988 3.41301 1.5 4.37632 1.5 5.5C1.5 6.15158 1.63058 6.80115 1.88486 7.44593C2.14296 8.10039 2.59154 8.81875 3.20789 9.59774C3.82483 10.3775 4.65666 11.2847 5.69788 12.3175C6.73932 13.3505 8.06272 14.5858 9.66638 16.0224Z"
                    fill="#E8EAED"
                    stroke="black"
                  />
                </svg>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div
                onClick={() => setIsMyCartDialogOpen(true)}
                className="flex items-center justify-between space-x-3 p-2  rounded-xl w-full border border-black/20 cursor-pointer select-none"
              >
                <p className="font-bold font-bricolage">My cart</p>

                <svg
                  width={22}
                  height={20}
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.77835 20C6.18299 20 5.67333 19.8042 5.24936 19.4125C4.82539 19.0208 4.61341 18.55 4.61341 18C4.61341 17.45 4.82539 16.9792 5.24936 16.5875C5.67333 16.1958 6.18299 16 6.77835 16C7.37371 16 7.88338 16.1958 8.30735 16.5875C8.73132 16.9792 8.9433 17.45 8.9433 18C8.9433 18.55 8.73132 19.0208 8.30735 19.4125C7.88338 19.8042 7.37371 20 6.77835 20ZM17.6031 20C17.0077 20 16.4981 19.8042 16.0741 19.4125C15.6501 19.0208 15.4381 18.55 15.4381 18C15.4381 17.45 15.6501 16.9792 16.0741 16.5875C16.4981 16.1958 17.0077 16 17.6031 16C18.1985 16 18.7081 16.1958 19.1321 16.5875C19.5561 16.9792 19.768 17.45 19.768 18C19.768 18.55 19.5561 19.0208 19.1321 19.4125C18.7081 19.8042 18.1985 20 17.6031 20ZM5.85825 4L8.45619 9H16.0335L19.0103 4H5.85825ZM4.8299 2H20.7964C21.2113 2 21.5271 2.17083 21.7436 2.5125C21.9601 2.85417 21.9691 3.2 21.7706 3.55L17.9278 9.95C17.7294 10.2833 17.4633 10.5417 17.1295 10.725C16.7957 10.9083 16.4304 11 16.0335 11H7.96908L6.77835 13H19.768V15H6.77835C5.9665 15 5.3531 14.6708 4.93815 14.0125C4.5232 13.3542 4.50516 12.7 4.88402 12.05L6.34536 9.6L2.44846 2H0.283508V0H3.80155L4.8299 2Z"
                    fill="#E8EAED"
                  />
                  <path
                    d="M5.85825 3.5H5.03499L5.41457 4.23053L8.01251 9.23053L8.15252 9.5H8.45619H16.0335H16.3177L16.4631 9.25578L19.4399 4.25578L19.8899 3.5H19.0103H5.85825ZM4.38524 2.22864L4.52477 2.5H4.8299H20.7964C21.0454 2.5 21.1992 2.58763 21.3212 2.78012L21.7436 2.5125L21.3212 2.78012C21.3894 2.88772 21.4111 2.97285 21.4129 3.04116C21.4146 3.10831 21.398 3.19186 21.3384 3.29859L17.4992 9.69261L17.4982 9.69422C17.3444 9.95249 17.1429 10.1472 16.8888 10.2868C16.632 10.4278 16.35 10.5 16.0335 10.5H7.96908H7.68485L7.53945 10.7442L6.34873 12.7442L5.89877 13.5H6.77835H19.268V14.5H6.77835C6.12923 14.5 5.67983 14.2515 5.36114 13.7459C5.19238 13.4781 5.11933 13.2361 5.11322 13.0143C5.10715 12.7942 5.16599 12.5599 5.31479 12.3039L6.77478 9.85613L6.91664 9.61829L6.79029 9.37187L2.89338 1.77187L2.75398 1.5H2.44846H0.783508V0.5H3.49641L4.38524 2.22864ZM6.77835 19.5C6.30438 19.5 5.91707 19.3486 5.58864 19.0452C5.26142 18.7429 5.11341 18.4029 5.11341 18C5.11341 17.5971 5.26142 17.2571 5.58864 16.9548C5.91707 16.6514 6.30438 16.5 6.77835 16.5C7.25232 16.5 7.63963 16.6514 7.96806 16.9548C8.29529 17.2571 8.4433 17.5971 8.4433 18C8.4433 18.4029 8.29529 18.7429 7.96806 19.0452C7.63963 19.3486 7.25232 19.5 6.77835 19.5ZM17.6031 19.5C17.1291 19.5 16.7418 19.3486 16.4134 19.0452C16.0862 18.7429 15.9381 18.4029 15.9381 18C15.9381 17.5971 16.0862 17.2571 16.4134 16.9548C16.7418 16.6514 17.1291 16.5 17.6031 16.5C18.0771 16.5 18.4644 16.6514 18.7928 16.9548C19.12 17.2571 19.268 17.5971 19.268 18C19.268 18.4029 19.12 18.7429 18.7928 19.0452C18.4644 19.3486 18.0771 19.5 17.6031 19.5Z"
                    stroke="black"
                    strokeOpacity="0.4"
                  />
                </svg>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <LovedSheet isSheetOpen={openSheet} setIsSheetOpen={setOpenSheet} />

      <MyCartDialog open={isMycartDialogOpen} setOpen={setIsMyCartDialogOpen} />

      {/* <TestDialog openTest={open} setOpenDialog={setOpen} /> */}
    </>
  );
};

export default NavBar;
