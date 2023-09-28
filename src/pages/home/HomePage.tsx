import React, { ReactNode } from "react";
import file from "../../assets/icons/File_Document.svg";
import dropdown from "../../assets/icons/Caret_Down_MD.svg";
import Candidates from "./candidates";
import warning from '../../assets/icons/Circle_Warning.svg'

const HomePage = () => {
  type FilterArrayType = {
    name: string;
    // route: string;
  };

  const FilterArray: FilterArrayType[] = [
    { name: "Personal Information" },
    { name: "Education" },
    { name: "Work Experience" },
    { name: "Activity Filter" },
    { name: "Advanced Filter" },
  ];

  return (
    <div className="flex flex-col gap-[32px] pt-[32px] ">
      <div className="flex px-[32px] gap-[20px]">
        <div className="w-[30%] hidden md:flex flex-col gap-[24px] text-[14px]">
          <div className="flex flex-col">
            <p className="text-[#1D4ED8] text-[18px] xl:text-[20px] font-semibold">
              London Internship Program
            </p>
            <p className="text-[12px]">London</p>
          </div>

          <div className="flex shadow shadow-[#adb4a378] rounded-[8px]">
            <input
              className="bg-white rounded-l-[8px] h-[42px] lg:h-[48px] w-full text-[12px] lg:text-[14px] p-[10px]"
              placeholder="Serach by name, edu, exp or #tag"
            />
            <div className="h-[42px] lg:h-[48px] w-[48px] bg-white rounded-r-[8px] flex justify-center items-center">
              <img src={warning}/>
            </div>
          </div>

          <div className="bg-white shadow shadow-[#bbc6ab90]">
            <div className="flex justify-between p-[16px] ">
              <p className="text-[14px] font-semibold">Filters</p>
              <p className="text-[12px] font-thin">
                <span>0</span> Selected
              </p>
            </div>

            <div>
              {FilterArray.map(({ name }) => (
                <div className="text-[12px] lg:text-[14px] flex justify-between px-[16px] items-center py-[18px] border-t border-[#F2F2F2]">
                  <div className="flex gap-2 items-center">
                    <img src={file} />
                    <p>{name}</p>
                  </div>

                  <img src={dropdown} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[100%] md:w-[70%]">
          <Candidates />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
