"use client";
import FeedHome from "@/components/ajo-custom/Full components/FeedHome";
import { redirect } from "next/navigation";
import { useEffect, useMemo } from "react";
import "./globals.css";

export default function Home() {
  const pages = useMemo(() => {
    let pageMap = new Map();
    pageMap.set("Feed", {
      child: <FeedHome />,
      icon: null,
    });
    pageMap.set("Marketplace", {
      child: <>Marketplace</>,
      icon: null,
    });

    return pageMap;
  }, []);

  useEffect(() => {
    redirect("/main/user-home-feed");
  }, []);
  return null;
}

// import CreateBrand from "@/components/ajo-custom/Full components/CreateBrand";
// import MainLayout from "./layout/main-layout";
// import FeedHome from "@/components/ajo-custom/Full components/FeedHome";
// import Addproduct from "@/components/ajo-custom/Full components/addProduct";

// export default function Home() {
//   return (
//     <MainLayout>
//       {/* The Div below is for the full components */}
//       <div>
//         <FeedHome />
//       </div>
//       <div className=" flex flex-col gap-3">
//         {/* //Create Brand */}
//         <CreateBrand />

//         <hr className="border-2" />

//         {/* Add product*/}

//         <Addproduct />

//         <hr className="border-2" />
//       </div>
//     </MainLayout>
//   );

