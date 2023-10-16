import CreateBrand from "@/components/ajo-custom/Full components/CreateBrand";
import MainLayout from "./layout/main-layout";
import Addproduct from "@/components/ajo-custom/Full components/addProduct";
import BrandProfile from "@/components/ajo-custom/Full components/BrandProfile";
import Post from "@/components/ajo-custom/post";
import Marketplace from "@/components/ajo-custom/marketplace";

 
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
{/* THIS IS THE BRAND PRODUCT PAGE */}
      <BrandProfile/>

      <hr  className="border-2"/>
      {/* THIS IS THE POST PAGE */}
      <Post/>
      <hr  className="border-2"/>

      {/* THIS IS THE Marketplace code below> */}
      <Marketplace/>


      </div>      
    </MainLayout>
 
  );
}
