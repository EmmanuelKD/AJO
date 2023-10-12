import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src="/asset/img/logo.png"
        alt="AJO Logo"
        width={70}
        height={70}
      />
    </div>
  );
};

export default Logo;
