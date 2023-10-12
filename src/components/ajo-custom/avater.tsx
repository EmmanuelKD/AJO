import sisconnect from "./Disconnect.tsx";
import headerAvater from "./HeaderAvater.tsx";
import lAvater from "./LAvater.tsx";
import savater from "./SAvater.tsx";
import XsAvater from "./XsAvater.tsx";

import React from "react";

const Avater = () => {
  return (
    <div>
      <div className="w-44 px-3.5 py-4 rounded border border-purple-500 flex-col justify-start items-center gap-5 inline-flex">
        <XsAvater />
        <savater />
        <header-avater />
        <Disconnect />
        <LAvater />
      </div>
    </div>
  );
};

export default Avater;
