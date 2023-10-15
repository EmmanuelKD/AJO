import { Share } from "next/font/google";
import React from "react";
import BookMark from "./book-mark";
import NotBookmark from "./not-bookmark";
import Unliked from "./Unliked";
import Liked from "./liked";
import CommentLogo from "./comment";
import ShareButton from "./share";

const PostReaction = () => {
  return (
    
      <div className="w-full justify-between items-center gap-20 inline-flex px-5">
        {/* <Unliked /> */}
        <Liked />
        <CommentLogo />
        <ShareButton />
        <BookMark />
        {/* <NotBookmark /> */}
      </div>
  );
};

export default PostReaction;
