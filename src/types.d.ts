
"use client"


type AuthUserType = {
    email: string,
    password: string
}

type entityType = {
    created_at?: Date;
    deleted_at?: Date;
    updated_at?: Date;
    objectId?: string;
};



type AppUser = entityType & {
    email: string;
    fname: string;
    lname: string;
    phoneNumber: string;
    isVerified: boolean;
    photoRef?: string;
    productLiked?:string[],
    productInCart?:string[],
    purchased?:ProductPurchases[],
};


type AppProduct = entityType & ProductType;

type ColorType={name:string,hex:string}

type ProductType = {
    id: string;
    brand: Brand;
    description?: string;
    imageSrc: string;
    colors?: ColorType[];
    otherImages?: string[];
    imageAlt: string;
    href: string;
    name: string;
    rating: AppRatings[];
    reviewCount: number;
    price: number;
    
  };

 type TestimonialType = {
    id: string;
    attribution: string;
    quote: string;
    img?: string;
    name?: string;
    // productId:string;
  };

  type ProductReviewType =entityType & {
    id: string;
    by: string;
    byImgRef: string;
    quote: string;
    productId:string;
  };
  
  
  type AppRatings =entityType & {
    id: string;
    by: string;
    rate: number; 
    productId:string;
  };
  
  type ProductPurchases=entityType&{
    productId:string;
    isReviewed:false;
    dialogCancleCount:number;
  };

  type Post =entityType & {
      media: string[],
      caption: string,
      userId: string,
  };

  type Brand =entityType & {
      brandName: string, 
      description: string,
      followerCount: number,
      followingCount: number,
      profile: string,
  };

  type brandowner  = {
    id: string,
    profile: string, 
  };

  type media =entityType & {
    url: string,
    thumbnail: string,

  };

