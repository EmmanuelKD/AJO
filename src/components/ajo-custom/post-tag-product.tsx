import React from 'react'
import ProductImage from './product-image'
import Rating from './rating'

function PostTag_A_Product() {
    return (
        <div className="relative w-full h-full bg-pink-700 bg-opacity-10 rounded-lg shadow justify-start items-center gap-2.5 inline-flex">
            <div className="p-2.5 justify-start items-start gap-2.5 flex">
                {/* <img className="" src="https://via.placeholder.com/40x40" /> */}
                <ProductImage />
            </div>
            <div className="h-10 flex-col justify-center items-start inline-flex">
                <div className="text-black text-sm font-normal font-['Montserrat'] leading-tight">Ray Ban RB4184 Square Sunglasses</div>
                <div className="self-stretch justify-start items-center gap-3 inline-flex">
                    <div className="text-black text-xs font-light font-['League Spartan'] leading-none">SLL 1,280</div>
                    <div className="text-pink-800 text-xs font-medium font-['League Spartan'] leading-none">TeeCee’s Fashion</div>
                    <div className="justify-start items-start flex">
                        <div className="w-3 h-3 relative"><Rating /></div>
                        <div className="w-3 h-3 relative"><Rating /></div>
                        <div className="w-3 h-3 relative"><Rating /></div>
                        <div className="w-3 h-3 relative"><Rating /></div>

                    </div>
                </div>
            </div>
            <a href="">
                <div className="w-6 h-6 left-[802px] top-[18px] absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M16.4911 0.860753C16.2268 0.86699 15.9758 0.977587 15.7928 1.16837L8.99984 7.96134L2.20687 1.16837C2.11357 1.07246 2.00197 0.996245 1.87867 0.944244C1.75538 0.892244 1.62291 0.865513 1.4891 0.865636C1.29025 0.865882 1.09599 0.925401 0.931128 1.03659C0.766268 1.14778 0.638297 1.30559 0.563561 1.48986C0.488825 1.67413 0.470718 1.8765 0.511553 2.07111C0.552387 2.26572 0.65031 2.44374 0.792811 2.58243L7.58578 9.3754L0.792811 16.1684C0.696837 16.2605 0.620214 16.3709 0.567428 16.493C0.514643 16.6151 0.486757 16.7466 0.485403 16.8796C0.48405 17.0127 0.509255 17.1446 0.559544 17.2678C0.609834 17.391 0.684195 17.5029 0.778274 17.597C0.872353 17.691 0.984258 17.7654 1.10744 17.8157C1.23061 17.866 1.36259 17.8912 1.49563 17.8898C1.62867 17.8885 1.7601 17.8606 1.88223 17.8078C2.00436 17.755 2.11473 17.6784 2.20687 17.5824L8.99984 10.7895L15.7928 17.5824C15.885 17.6784 15.9953 17.755 16.1175 17.8078C16.2396 17.8606 16.371 17.8885 16.5041 17.8898C16.6371 17.8912 16.7691 17.866 16.8923 17.8157C17.0154 17.7654 17.1273 17.6911 17.2214 17.597C17.3155 17.5029 17.3899 17.391 17.4401 17.2678C17.4904 17.1446 17.5156 17.0127 17.5143 16.8796C17.5129 16.7466 17.485 16.6151 17.4323 16.493C17.3795 16.3709 17.3029 16.2605 17.2069 16.1684L10.4139 9.3754L17.2069 2.58243C17.3524 2.4429 17.4523 2.26265 17.4936 2.06531C17.5349 1.86798 17.5156 1.66278 17.4382 1.47663C17.3608 1.29047 17.2289 1.13206 17.0599 1.02215C16.8909 0.912247 16.6926 0.855989 16.4911 0.860753Z" fill="#B21575" />
                    </svg>
                </div>
            </a>
        </div>
    )
}

export default PostTag_A_Product