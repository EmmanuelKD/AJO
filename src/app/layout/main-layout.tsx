"use client";
import { Fragment, ReactNode, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ChartBarSquareIcon,
  Cog6ToothIcon,
  FolderIcon,
  GlobeAltIcon,
  ServerIcon,
  SignalIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Varient_2 from "@/components/ajo-custom/Varient_2";
import {
  Home2Fill,
  Compass2Fill,
  AddFill,
  Message2Fill,
  QuestionFill,
} from "@fluent-ui/icons";

const navigation = [
  { name: "Home", href: "#", icon: Home2Fill, current: false },
  { name: "Explore", href: "#", icon: Compass2Fill, current: true },
  { name: "Activity", href: "#", icon: AddFill, current: false },
  { name: "Create", href: "#", icon: AddFill, current: false },
  { name: "Message", href: "#", icon: Message2Fill, current: false },
  { name: "Help & Support", href: "#", icon: QuestionFill, current: false },
];
const teams = [
  { id: 1, name: "Add Brand", href: "#", initial: "+", current: false },
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
    <div
      className="
  
    w-full max-w-[318px] relative bg-white flex-col"
    >
      <div className="flex grow flex-col gap-y-5">
        <div className="flex flex-col items-center">
          <img
            className="h-12 items-center"
            src="asset/img/ajo.png"
            alt="Ajo"
          />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-4 items-center">
            <li>
              <ul role="list" className=" space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={`${
                        item.current
                          ? "bg-HoverColor text-white"
                          : "text-gray-400 hover:text-white hover:bg-HoverColor"
                      } group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold`}
                    >
                      <item.icon
                        className="h-6 w-6 shrink-0 bg-HoverColor"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <div className="text-xs font-semibold  text-gray-400">
                Add Brand
              </div>
              <ul role="list" className="-mx-2 mt-2 space-y-1">
                {teams.map((team) => (
                  <li key={team.name}>
                    <a
                      href={team.href}
                      className={`${
                        team.current
                          ? "bg-HoverColor text-white"
                          : "text-gray-400 hover:text-white hover:bg-HoverColor"
                      } group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold`}
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-HoverColor bg-HoverColor text-[0.625rem] font-medium text-white group-hover:text-white">
                        {team.initial}
                      </span>
                      <span className="truncate">{team.name}</span>
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
      {/* <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 bg-gray-900 px-4 shadow-sm sm:px-6 lg:px-8">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-white xl:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <form className="flex flex-1" action="#" method="GET">
            <label htmlFor="search-field" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <MagnifyingGlassIcon
                className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-500"
                aria-hidden="true"
              />
              <input
                id="search-field"
                className="block h-full w-full border-0 bg-transparent py-0 pl-8 pr-0 text-white focus:ring-0 sm:text-sm"
                placeholder="Search..."
                type="search"
                name="search"
              />
            </div>
          </form>
        </div>
      </div> */}
      <Varient_2 />
      <main>{children}</main>
    </div>
  );
}
