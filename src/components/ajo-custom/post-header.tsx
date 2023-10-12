import React from "react";

const PostHeader = () => {
  return (
    <div>
      <div className="w-72 h-80 p-5 rounded border border-purple-500 flex-col justify-start items-start gap-5 inline-flex">
        <UserPostHeader />
        <VerifiedUserPostHeader />
        <VerifiedHiredPostHeaders />
        <RegisteredBrand />
      </div>
    </div>
  );
};

export default PostHeader;
