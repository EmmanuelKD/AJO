import React from "react";
import HomeTabs from "./home-tabs";
import ProfileTabs from "./profile-tabs";
import Tabs from "./Tabs";

const TabsGroup = () => {
  return (
    <div>
      <div className="p-5 rounded border border-purple-500 flex-col items-center gap-2.5 inline-flex">
        <HomeTabs />
        <ProfileTabs />
        <Tabs />
      </div>
    </div>
  );
};

export default TabsGroup;
