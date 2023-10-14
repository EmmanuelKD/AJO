import CreateBrand from "@/components/ajo-custom/Full components/CreateBrand";
import MainLayout from "./layout/main-layout";
import Addproduct from "@/components/ajo-custom/Full components/addProduct";
import BrandProfile from "@/components/ajo-custom/Full components/BrandProfile";

 
export default function Home() {
  return (
    <MainLayout >
      <div className=" flex flex-col gap-3">
         {/* //Create Brand */}
      <CreateBrand/>

      <hr  className="border-2"/>

      {/* Add product*/}

      <Addproduct/>

      <hr  className="border-2"/>

      <BrandProfile/>

      </div>      
    </MainLayout>
 
  );
}
