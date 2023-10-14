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
