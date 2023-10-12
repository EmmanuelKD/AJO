import React from "react";
import AllreadNotification from "./allread-notification";

const notification = () => {
  return (
    <div>
      <div className="w-48 h-16 p-5 rounded border border-purple-500 justify-start items-start gap-7 inline-flex">
        <div className="w-8 h-8 ">
          <AllreadNotification />
        </div>
        <div className="w-8 h-8 ">
          <ActiveNotificatioin />
        </div>
        <div className="w-8 h-8 ">
          <AllreadNotification />
        </div>
      </div>
    </div>
  );
};

export default notification;
