import React, { ReactNode, useState } from "react";
import { CandidatesArray } from "../../utilis/data";
import expand from "../../assets/icons/expand_more.svg";
import icons5 from "../../assets/icons/User_Voice.svg";
import icons1 from "../../assets/icons/CP Icons (tag)_Artboard 2 (1) 1.svg";
import icons2 from "../../assets/icons/User_Close.svg";
import icons3 from "../../assets/icons/User_Check.svg";
import icons4 from "../../assets/icons/Mail.svg";
import dropdown from "../../assets/icons/Caret_Down_MDS.svg";

type NavIconType = {
  icon: ReactNode;
};

type OpportunityArrayType = {
  name: string;
  num: string;
};

const Candidates = () => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };

  const NavIcons: NavIconType[] = [
    { icon: <img src={icons1} /> },
    { icon: <img src={icons2} /> },
    { icon: <img src={icons3} /> },
    { icon: <img src={icons4} /> },
    { icon: <img src={icons5} /> },
  ];

  const OpportunityArray: OpportunityArrayType[] = [
    { name: "Applied", num: "1745" },
    { name: "Shortlisted", num: "453" },
    { name: "Technical Interview", num: "123" },
    { name: "Opportunity Browsing", num: "243" },
    { name: "Video Interview I", num: "25" },
    { name: "Video Interview II", num: "25" },
    { name: "Video Interview III", num: "25" },
    { name: "Offer", num: "25" },
    { name: "Withdrawn", num: "25" },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex justify-between gap-[8px]">
        <div className="flex flex-col relative">
          <div
            onClick={handleOpen}
            className="bg-white shadow cursor-pointer shadow-[#1d4ed80d] font-semibold text-[#1D4ED8] h-[40px] items-center w-[320px] rounded-[14px] flex justify-between px-3"
          >
            <p className="text-[14px] xl:text-[16px]">Opportunity Browsing</p>

            <div className="h-[24px] w-[24px] flex justify-center items-center">
              <img src={dropdown} />
            </div>
          </div>

          {open ? (
            ""
          ) : (
            <div className="bg-white rounded-b-[14px] w-full h-72 overflow-y-scroll z-[999] absolute top-[34px] shadow shadow-[#1d4ed80d] border-t">
              {OpportunityArray.map(({ name, num }) => (
                <div className="flex justify-between p-[16px] border-b border-[#1d4ed80d]">
                  <p>{name}</p>
                  <p className="bg-[#F8F8F8] rounded-[16px] px-[20px] text-[14px] flex justify-center items-center">
                    {num}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex gap-[14px] xl:gap-[8px] flex-col xl:flex-row">
          <div className="flex gap-[8px] items-center justify-center">
            {NavIcons.map(({ icon }) => (
              <div className="bg-white h-[40px] w-[40px] rounded-[8px] shadow shadow-[#8d8d8d0d] flex justify-center items-center">
                {icon}
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <div className="w-[180px] flex justify-center border-r items-center bg-[#1D4ED8]  rounded-l-[8px] h-[40px] text-[13px] text-white">
              <p className="text-[12px] lg:text-[14px]">
                Move To Video Interview I
              </p>
            </div>
            <div className="bg-[#1D4ED8] rounded-r-[8px] w-[34px] flex justify-center items-center">
              <img src={expand} />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[32px]">
        <div className="w-full bg-white shadow shadow-[#bdc5d9a8] rounded-[16px]">
          <div className="flex border-b justify-between py-[16px] px-[16px]">
            <div className="flex gap-[32px]">
              <input type="checkbox" />
              <p className="text-[#1D4ED8] font-bold text-[13px] sm:text-[14px] lg:text-[16px]">
                247 Candidates
              </p>
            </div>

            <div className="text-[12px] lg:text-[14px] font-semibold">
              <div className="flex gap-3 lg:gap-4">
                <p className="text-[#1D4ED8]">Qualified</p>
                <p className="flex border-x px-2 lg:px-4 gap-2">
                  Task{" "}
                  <div className="bg-[#F7F8FD] h-[20px] lg:h-[25px] w-[20px] lg:w-[25px] rounded-[40px] text-[10px] flex justify-center items-center font-bold">
                    {"25"}
                  </div>
                </p>
                <p className="flex gap-2">
                  Disqualified{" "}
                  <div className="bg-[#F7F8FD] h-[20px] lg:h-[25px] w-[20px] lg:w-[25px] rounded-[40px] text-[10px] flex justify-center items-center font-bold">
                    {"78"}
                  </div>
                </p>
              </div>
            </div>
          </div>

          {CandidatesArray.map(({ name, cities, degree, location, tags }) => (
            <div className="flex items-center border-b py-[16px] px-[16px] gap-[32px]">
              <div className="">
                <input type="checkbox" />
              </div>

              <div className="flex items-center gap-[24px]">
                <div className="w-[56px] flex justify-center items-center font-bold text-[#D0E1FF] h-[56px] rounded-[80px] bg-[#EDF4FF]">
                  {"AS"}
                </div>

                <div className="flex flex-col gap-[8px] text-[10px]">
                  <p className="text-[14px] font-semibold">{name}</p>
                  <p className="font-semibold">{location}</p>
                  <p>{degree}</p>
                  <div className="flex gap-[8px] text-[#1D4ED8]">
                    {tags.map((items) => (
                      <p>#{items}</p>
                    ))}
                  </div>
                  <div className="flex gap-[8px]">
                    {cities.map((items) => (
                      <p className="bg-[#F3FAFC] text-[#037092] p-[2px] font-semibold px-3 rounded-[16px]">
                        #{items}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Candidates;
