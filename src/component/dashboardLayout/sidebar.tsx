import React, { ReactNode } from "react";
import home from "../../assets/icons/House_01.svg";
import user from "../../assets/icons/Users_Group.svg";
import calender from "../../assets/icons/Calendar_Check.svg";
import share from "../../assets/icons/Share_Android.svg";
import file from "../../assets/icons/File_Document.svg";
import note from "../../assets/icons/Notebook.svg";
import fave from "../../assets/icons/Heart_01.svg";
import arrow from "../../assets/icons/Chevron_Right_MD.svg";

type SidebarItemType = {
  name: string;
  icon: ReactNode;
  // route: string;
};

const Sidebar = () => {
  const SideBarMenu: SidebarItemType[] = [
    {
      name: "Dashboard",
      icon: <img alt="/" src={home} />,
      // route: "/",
    },
    {
      name: "People",
      icon: <img alt="/" src={user} />,
      // route: "/",
    },
    {
      name: "Calender",
      icon: <img alt="/" src={calender} />,
      // route: "/",
    },
    {
      name: "Share",
      icon: <img alt="/" src={share} />,
      // route: "/",
    },
    {
      name: "File",
      icon: <img alt="/" src={file} />,
      // route: "/",
    },
    {
      name: "Note",
      icon: <img alt="/" src={note} />,
      // route: "/",
    },
    {
      name: "Favourite",
      icon: <img alt="/" src={fave} />,
      // route: "/",
    },
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="pt-[27px] flex flex-col gap-[32px] justify-center items-center">
        <div className="h-[32px] w-[32px] rounded-[30px] bg-[#D9D9D9]" />

        <div className="flex flex-col gap-[24px]">
          {SideBarMenu.map(({ name, icon }) => (
            <div
              className="h-[48px] w-[48px] rounded-[8px] flex justify-center items-center"
              key={name}
            >
              <div className=" hover:text-[#1D4C41]">{icon}</div>
            </div>
          ))}

          <div className="flex justify-center items-center pb-5">
            <img alt="/" src={arrow} />,
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
