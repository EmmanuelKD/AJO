import { Share } from "next/font/google";
import React from "react";
import BookMark from "./book-mark";
import NotBookmark from "./not-bookmark";
import Unliked from "./Unliked";
import Liked from "./liked";
import CommentLogo from "./comment";
import ShareButton from "./share";

const reactions = () => {
  return (
    <div>
      <div className="w-80 h-8 py-1 justify-start items-center gap-7 flex flex-row">
        <Unliked />
        <Liked />
        <CommentLogo />
        <ShareButton />
        <BookMark />
        <NotBookmark />
      </div>
    </div>
  );
};

export default reactions;
