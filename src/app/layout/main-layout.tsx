"use client";
import Varient_2 from "@/components/ajo-custom/Varient_2";
import HolderIcon from "@/icons/holder";
import routes from "@/routes";
import {
  AddFill,
  AddLine,
  Compass2Fill,
  Compass2Line,
  Compasses2Fill,
  Home2Fill,
  Home2Line,
  Message2Fill,
  Message2Line,
  QuestionFill,
  QuestionLine,
} from "@fluent-ui/icons";
import Link from "next/link";
import { ReactNode, useState } from "react";

const navigation = [
  {
    name: "Home",
    href: routes.main.home,
    Icon: Home2Fill,
    current: false,
  },
  {
    name: "Explore",
    href: routes.main.explore,
    Icon: Compasses2Fill,

    current: true,
  },
  {
    name: "Activity",
    href: routes.main.activitiy,
    Icon: HolderIcon,

    current: false,
  },
  {
    name: "Create",
    href: routes.main.create,
    Icon: AddFill,

    current: false,
  },
  {
    name: "Message",
    href: routes.main.messages,
    Icon: HolderIcon,

    current: false,
  },
  {
    name: "Help & Support",
    href: routes.main.helpAndSupport,
    Icon: QuestionFill,

    current: false,
  },
];

const teams = [
  {
    id: 1,
    name: "Add Brand",
    href: routes.main.addBrand,
    initial: "+",
    current: false,
  },
];

export default function MainLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="relative flex flex-row flex-nowrap  justify-evenly gap-[19px]   ml-[9px]  mr-[9px]">
      <Drawer setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      <ContentWrapper setSidebarOpen={setSidebarOpen}>
        {children}
      </ContentWrapper>
    </div>
  );
}

function Drawer({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: (_: boolean) => void;
}) {
  return (
    <div className="w-full max-w-[318px] relative bg-white flex-col">
      <div className="flex grow flex-col gap-y-5 w-full">
        <div className="flex flex-col items-center h-[96px]">
          <img
            className=" max-w-[100px] bg-red-500 items-center"
            src="asset/img/ajo.png"
            alt="Ajo"
          />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-4 items-center">
            <li className="space-y-1 w-full p-[8px]">
              <ul role="list" className=" space-y-1 ">
                {navigation.map(({ name, href, current, Icon }) => (
                  <li key={name} className="w-full">
                    <Link
                      href={href}
                      className={`${
                        current
                          ? "bg-HoverColor text-white w-full text-center"
                          : "text-gray-400 hover:text-white hover:bg-HoverColor"
                      } group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold`}
                    >
                      <Icon
                        color={current ? "#fff" : "#000"}
                        variant={current ? "solid" : "light"}
                      />
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="space-y-1 w-full p-[8px]">
              <div className=" text-xs font-semibold  text-gray-400">
                Add Brand
              </div>
              <ul role="list" className="-mx-2 mt-2 space-y-1">
                {teams.map(({ name, href, current, initial }) => (
                  <li key={name}>
                    <a
                      href={href}
                      className={`${
                        current
                          ? "bg-HoverColor text-white"
                          : "text-gray-400 hover:text-white hover:bg-HoverColor"
                      } group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold w-full`}
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-HoverColor bg-HoverColor text-[0.625rem] font-medium text-white group-hover:text-white">
                        {initial}
                      </span>
                      <span className="truncate">{name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

function ContentWrapper({
  children,
  setSidebarOpen,
}: {
  children: ReactNode;
  setSidebarOpen: (_: boolean) => void;
}) {
  // max-w-[928px]
  return (
    <div className="w-full  bg-white rounded-sm p-[30px] pt-[12px] pb-[12px]">
      <Varient_2 />
      <main className="pb-[10px]">{children}</main>
    </div>
  );
}
