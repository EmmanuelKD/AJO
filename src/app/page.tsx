import HomeTabs from "@/components/ajo-custom/home-tabs";
import MainLayout from "./layout/main-layout";
import FeedHome from "@/components/ajo-custom/Full components/FeedHome";


export default function Home() {
  return (
    <MainLayout >
      {/* The Div below is for the full components */}
      <div>
        <FeedHome />
      </div>
    </MainLayout>

  );
}
