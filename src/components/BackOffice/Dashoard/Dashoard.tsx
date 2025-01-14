"use client";

import { Statistic } from "@/components/Statistic";
import React from "react";
import RecentActivity from "../RecentActivity/RecentActivity";
import AreaChartComp from "../AreaChartComp";
import RadarChartComp from "../RadarChartComp";

const Dashoard = () => {
  return (
    <div className="grid grid-cols-10 items-start gap-7 pt-4">
      <div className="grid col-span-7 space-y-6">
        <div className="flex flex-wrap items-center gap-x-4 justify-between">
          <Statistic
            title="Sales"
            value="3210"
            svg={
              <svg
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.95487 21.8333C6.36912 21.8333 5.86769 21.6211 5.45057 21.1968C5.03345 20.7725 4.82489 20.2625 4.82489 19.6666C4.82489 19.0708 5.03345 18.5607 5.45057 18.1364C5.86769 17.7121 6.36912 17.5 6.95487 17.5C7.54061 17.5 8.04204 17.7121 8.45916 18.1364C8.87628 18.5607 9.08484 19.0708 9.08484 19.6666C9.08484 20.2625 8.87628 20.7725 8.45916 21.1968C8.04204 21.6211 7.54061 21.8333 6.95487 21.8333ZM17.6047 21.8333C17.019 21.8333 16.5176 21.6211 16.1004 21.1968C15.6833 20.7725 15.4748 20.2625 15.4748 19.6666C15.4748 19.0708 15.6833 18.5607 16.1004 18.1364C16.5176 17.7121 17.019 17.5 17.6047 17.5C18.1905 17.5 18.6919 17.7121 19.109 18.1364C19.5262 18.5607 19.7347 19.0708 19.7347 19.6666C19.7347 20.2625 19.5262 20.7725 19.109 21.1968C18.6919 21.6211 18.1905 21.8333 17.6047 21.8333ZM6.04963 4.49996L8.6056 9.91663H16.0605L18.9892 4.49996H6.04963ZM5.03789 2.33329H20.7465C21.1547 2.33329 21.4653 2.51836 21.6783 2.8885C21.8913 3.25864 21.9002 3.63329 21.7049 4.01246L17.9242 10.9458C17.729 11.3069 17.4672 11.5868 17.1388 11.7854C16.8104 11.984 16.451 12.0833 16.0605 12.0833H8.12635L6.95487 14.25H19.7347V16.4166H6.95487C6.15613 16.4166 5.55263 16.06 5.14439 15.3468C4.73614 14.6336 4.71839 13.925 5.09114 13.2208L6.52887 10.5666L2.69492 2.33329H0.564941V0.166626H4.02615L5.03789 2.33329Z"
                  fill="#4154f1"
                />
              </svg>
            }
            backgroundColor="#f6f6fe"
            persentage="12"
            when="Today"
            ipprovement="Increasing"
          />

          <Statistic
            title="Revenue"
            value="$3,210"
            svg={
              <svg
                width={30}
                height={30}
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width={30} height={30} fill="url(#pattern0_124_729)" />
                <defs>
                  <pattern
                    id="pattern0_124_729"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                  >
                    <use
                      xlinkHref="#image0_124_729"
                      transform="scale(0.0333333)"
                    />
                  </pattern>
                  <image
                    id="image0_124_729"
                    width={30}
                    height={30}
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACMUlEQVR4nO2WPW8TQRCGT0BHTcGn8h/4AXQRCAgIybJnjlDRQEJAIDzjUFwBBQ1INKAQkCA3Y0uuoAikQxR09BikVFQggfjqCB8ac7EO7N29OyNBkZFWslZ7fnbefWd2o2gj/reg+9N7qN04w4IrrNBjhS/Z6GVzs5c69d1/DTh/78ROVlxgwTVW/OEbpPCNFbvUqU+MBW0pHCXBzyHg8IBPnMZTlaCkcDbLoCQ0l73gXPlM1Q9dXxuEF828mca7ishbBLwu+8V2Y0cQzAp3A1k8JMEjg/VpPGVzXrjgYrBk/O6Fy84NCyYe8Jop6QZbnbqhb5In+7ZkqpxnwQ+k8NGANlfr1jazwmunUoIzbrDgYw/4aS67V7lsvpPgNVa8yoqrHvCyD/zSc1arA7DiXlZQX4YjNt5zgvuF7zfWyaHNduoTnMbnSPBtyN1RVbDJyoIpp/HkhaXjW/PfmnlY8X0lMPml/vPMvrLic1I4lTv7m5WkJp+5BJ+ZgUjhztAmskuBBK9UMhcrzHp2/MDWJEmyiRWus+A763CkcMvmsoxXPN+fdoLtPnU1EOu71G4cdH3bEjzmO5amr4H05Roh5W9whdtmroFK7cb+fps147k9sRAVu/gD7i5xSVh3m0/j7VGRaAoeCL04ioAzhQ4Xgg7+UHBu3IeA9f5S0PyVV0T2UfKy4KFonGh1a9tI4UbWMMJZKiwVPtMSL5MZVnhEgi/6Nfxr2O9lq9NgyWxE9A/iJzZwA/aBf8cgAAAAAElFTkSuQmCC"
                  />
                </defs>
              </svg>
            }
            backgroundColor="#e0f8e9"
            persentage="8"
            when="This Month"
            ipprovement="Increasing"
          />

          <Statistic
            title="Customer"
            value="4210"
            svg={
              <svg
                width={30}
                height={30}
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width={30} height={30} fill="url(#pattern0_124_730)" />
                <defs>
                  <pattern
                    id="pattern0_124_730"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                  >
                    <use
                      xlinkHref="#image0_124_730"
                      transform="scale(0.0333333)"
                    />
                  </pattern>
                  <image
                    id="image0_124_730"
                    width={30}
                    height={30}
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACuklEQVR4nO2Vy2tTQRTGAz5QUFQEF7pw4aIiFARx4wPciP4BClY3daPUmpxzG6QLH5M5V1sF3eimUReC+CAoCqKg4GsjFJrMSVqpghBEqPi2LsQqtDI3CU1yZzLXRHHTgdncOXN+c775ztxYbGb8z6EkHGHCcSXxlZJwttDftSTq3mE/vkpJvKkI3jHBByY82nDDYF/3UkV4XUn4xoRTNVPC4IgQc50HPu6tKMNq9ivCNzkRX2Or8loIWLMZOl1gljhgzwG3Qxu0lIpgwgqVOKl82O8EEz6wgiW+N1SLGx3VHtZxj4WYnScERZBlCd8VwVv2MV7JUxRiHku4bzn8jxA4T7jDDsXhTGbnrKH0vjm2pEz4mn3oCqoWyWXamIbDjxok8nbZJYKekiqJg41UCaaf2BTEEl40gF+GpU7hHlcyJnjiBEscKOXz9hrWnxvAxsBgFkTP6rIPXrjBcLfkbtgWykOJdWEwQa8tWU4mtpblu+cEE54LPJOCjjpjPbW1QcbeSpByXkd5apOW1IHT1d+zonu5EazbIEfebiY8ryTeMVXB5CUjSF0yIkF/9XcjtH4EbVO1qfJUapMxwS9728GEErC2fC1Xa5RIQUdDqIYwQbpO6gtaEVMldffYF8QIWMyEX+rWJhXhjbzEzSGpFaGnH3OLhFcqTysTFg0xRQ10HY5LLXdZv4CxrJ9cqZu7UbA+Mfve9sCxBG1hU0FbAPVhC0v86Xa/l9R/lFuuwABMkK7qgpr16e9wKULLTTGh0tJ8agyFhzmZWF9JnievPVyx115Zz/nxDUzwyOH+r5GcPu0D6GQJY4ZEY/r1e3bGmx/7W2NEHFjAhL6S+DHClXxWBCdGTx1a2BJ06GTvouDfG+3eqns6q/c2DWZC8afQKvmPNQ1WEgrNghVhvpWKx1uoOLpzZ0bsH47fLpryOnRJ+EYAAAAASUVORK5CYII="
                  />
                </defs>
              </svg>
            }
            backgroundColor="#ffecdf"
            persentage="13"
            when="This Year"
            ipprovement="Descrising"
          />
        </div>

        <AreaChartComp />
      </div>

      <div className="grid col-span-3 space-y-6">
        <div className="bg-blue-50 p-4 rounded-xl">
          <RecentActivity />
        </div>

        <RadarChartComp />
      </div>
    </div>
  );
};

export default Dashoard;
