import React from "react";
import FollowBrand from "./follow-brand";
import Followers from "./followers";
import Following from "./following";

const Social_Counter = () => {
  return (
    <div>
      <div className="w-36 h-36 flex flex-col justify-center items-left p-5 rounded border border-purple-500">
        <Followers />
        <Following />
        <FollowBrand />
      </div>
    </div>
  );
};

export default Social_Counter;
