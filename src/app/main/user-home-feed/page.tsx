import MainLayout from "@/layout/main-layout";
import TabsLayout from "@/layout/tabs-layout";
import FeedHome from "@/components/ajo-custom/Full components/FeedHome";
import { useMemo } from "react";

function switchTabIndex(tab: string) {
  switch (tab) {
    case "profile":
      return 0;
    case "listing":
      return 1;
    case "setting":
      return 2;
  }
  return 0;
}

export default function Page() {
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

  return <TabsLayout pannels={pages} currentTabIndex={0} />;
}
