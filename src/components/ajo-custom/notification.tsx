import React from "react";
import AllreadNotification from "./allread-notification";
import ActiveNotification from "./active-notification";

const Notification2 = () => {
  return (
    <div>
      <div className="w-48 h-16 p-5 rounded border border-purple-500 justify-start items-start gap-7 inline-flex">
        <div className="w-8 h-8 ">
          <AllreadNotification />
        </div>
        <div className="w-8 h-8 ">
          <ActiveNotification />
        </div>
        <div className="w-8 h-8 ">
          <AllreadNotification />
        </div>
      </div>
    </div>
  );
};

export default Notification2;
