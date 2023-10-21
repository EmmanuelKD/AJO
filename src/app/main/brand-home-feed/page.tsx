'use client'
import Varient_2 from "@/components/ajo-custom/Varient_2";
import MenuSection from "@/components/ajo-custom/menu-section";
import MenuSection_2 from "@/components/ajo-custom/menu-section_2";

export default function BrandHomeFeed() {
    return (
        <div>
            <div className="pl-20">
                <MenuSection />
            </div>

            <div className="pl-20 pt-5">
                <MenuSection_2 />
            </div>

            <Varient_2 />


        </div>
    );
}
