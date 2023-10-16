import React from "react";
import InActiveHome from "./in-active-home";
import InActiveBrand from "./in-active-brand";
import ActiveBrand from "./active-brand";
import InActiveCreate from "./in-active-create";
import ActiveCreate from "./active-create";
import InActiveExplore from "./in-active-explore";
import ActiveExplore from "./active-explore";
import InActiveHelpSupport from "./in-active-help-support";
import ActiveMessage from "./active-message";
import ActiveProfile from "./active-profile";
import InActiveMessage from "./in-active-message";
import InActiveProfile from "./in-active-profile";

const Menu = () => {
  return (
    <div>
      <div className="w-52 flex-col justify-start items-start inline-flex">
        <div className="w-52 relative flex flex-col left-[20px] top-[20px]">
          {/*<ActiveHome />*/}
          <InActiveHome />
          <ActiveMessage />
          <InActiveMessage />
          <ActiveProfile />
          <InActiveProfile />
          <InActiveHelpSupport />
          <InActiveHelpSupport />
          <ActiveExplore />
          <InActiveExplore />
          <ActiveCreate />
          <InActiveCreate />
          <ActiveBrand />
          <InActiveBrand />
        </div>
      </div>
    </div>
  );
};

export default Menu;
