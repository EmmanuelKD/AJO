import Disconnect from "./Disconnect.tsx";
import sisconnect from "./Disconnect.tsx";
import headerAvater from "./HeaderAvater.tsx";
import lAvater from "./LAvater.tsx";
import SAvater from "./SAvater.tsx";
import savater from "./SAvater.tsx";
import XsAvater from "./XsAvater.tsx";

import React from "react";
import LAvater from "./l-avater.jsx";
import HeaderAvater from "./header-avater.jsx";

const Avater = () => {
  return (
    <div>
      <div className="w-44 px-3.5 py-4 rounded border border-purple-500 flex-col justify-start items-center gap-5 inline-flex">
        <XsAvater />
        <SAvater />
        <HeaderAvater />
        <Disconnect />
        <LAvater />
      </div>
    </div>
  );
};

export default Avater;
