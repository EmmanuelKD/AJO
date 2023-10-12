import React from "react";

import { Menu } from "@headlessui/react";
import Logo from "../ajo-custom/logo";
import InActiveCreate from "./in-active-create";
import InActiveExplore from "./in-active-explore";
import InActiveHelpSupport from "./in-active-help-support";
import InActiveMessage from "./in-active-message";

const MenuSection = () => {
  return (
    <div>
      <div className="w-40 flex-col justify-start items-start gap-1 inline-flex">
        <div className="flex-col justify-start items-start gap-2.5 flex"></div>
        <div className="mb-5">
          <Logo />
        </div>

        <div className="text-pink-700 text-sm font-bold font-['League Spartan'] leading-none">
          MAIN MENU
        </div>
        <Menu />
        <div className="relative flex flex-col w-40">
          {/*<ActiveHome />*/}
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
