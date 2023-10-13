"use client";
import { Tab } from "@headlessui/react";
import { ReactNode, useMemo } from "react";

export type TapOptions = "Profile" | "Listing" | "Sales";
export type TapPannel = {
  child: ReactNode;
  icon: ReactNode;
};

export default function TabsLayout({
  pannels,
  currentTabIndex = 0,
}: {
  pannels: Map<string, TapPannel>;
  currentTabIndex: number;
}) {
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
  // console.log(currentTabIndex)

  const keys = useMemo(() => Array.from(pannels.keys()), [pannels]);
  return (
    <div>
      <div className="">
        <Tab.Group
          as="div"
          tabIndex={currentTabIndex}
          // @ts-ignore
          className={
            "w-full mx-auto lg:px-8  flex items-center justify-center flex-col flex-nowrap"
          }
        >
          <Tab.List
            className={"h-14  justify-center items-center gap-36 flex border-b-2 border-zinc-200 w-full"}
          >
            {keys.map((key) => (
              <Tab
                as="div"
                // @ts-ignore
                className={({ selected }: { selected: boolean }) => {
                  return classNames(
                    "py-3.5 cursor-pointer justify-center items-center gap-2.5 flex text-center",
                    selected && "border-b-2 border-zinc-900"
                  );
                }}
                key={key}
              >
                {pannels.get(key)?.icon}
                <span className=" text-zinc-900 text-base font-medium font-['League Spartan'] leading-none">{key}</span>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {keys.map((key) => (
              <Tab.Panel key={key}>{pannels.get(key)?.child}</Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
