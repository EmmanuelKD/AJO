import React from "react";
import ActiveHome from "./ActiveHome.svelte";
import InActiveCreate from "./InActiveCreate.svelte";
import InActiveExplore from "./InActiveExplore.svelte";
import InActiveHelpSupport from "./InActiveHelp&Support.svelte";
import InActiveMessage from "./InActiveMessage.svelte";
import Logo from "./logo.svelte";
import { Menu } from "@headlessui/react";
// import Menu from "./menu.svelte";

const MenuSection = () => {
  return (
    <div>
      <div className="w-40 flex-col justify-start items-start gap-1 inline-flex">
        <div className="flex-col justify-start items-start gap-2.5 flex">
          {Logo}
        </div>
        <Logo />
        <div className="text-pink-700 text-sm font-bold font-['League Spartan'] leading-none">
          MAIN MENU
        </div>
        <Menu />
        <div className="relative flex flex-col w-40">
          <ActiveHome />
          <InActiveExplore />
          <InActiveCreate />
          <InActiveMessage />
          <InActiveHelpSupport />
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
