"use client";

type AuthUserType = {
  email: string;
  password: string;
};

type entityType = {
  created_at?: Date;
  deleted_at?: Date;
  updated_at?: Date;
  objectId?: string;
};

type AjoUser = entityType & {
  email: string;
  fname: string;
  lname: string;
  phoneNumber: string;
  isVerified: boolean;
  followerCount: number;
  followingCount: number;
  photoRef?: string;
  productLiked?: string[];
  productInCart?: string[];
  purchased?: ProductPurchases[];
};

type AjoProduct = entityType & ProductType;

type ColorType = { name: string; hex: string };

type ProductType = {
  id: string;
  brand?: Brand;
  brandId: string;
  description?: string;
  imageSrc: string;
  colors?: ColorType[];
  otherImages?: string[];
  imageAlt: string;
  href: string;
  name: string;
  rating: AjoRatings[];
  reviewCount: number;
  price: number;
};

type TestimonialType = {
  id: string;
  attribution: string;
  quote: string;
  img?: string;
  name?: string;
};

type ProductReviewType = entityType & {
  id: string;
  by: string;
  byImgRef: string;
  quote: string;
  productId: string;
};

type AjoRatings = entityType & {
  by?: Owner;
  rate: number;
  productId: string;
};

type ProductPurchases = entityType & {
  productId: string;
  isReviewed: false;
  dialogCancleCount: number;
};

type Post = entityType & {
  media: Media[];
  caption: string;
  contentText: string;
  usersId: string;
  by: PostOwner;
  aliasesReferences: AliasReference[];
};

type AliasReference = {
  refName: string;
  refId: string;
  refType: EntityType;
};
type PostOwner = Owner & {};

type Brand = entityType & {
  brandName: string;
  description: string;
  followerCount: number;
  followingCount: number;
  owner: BrandOwner;
  associateOwners: BrandOwner[];
};

type Roles = "admin" | "ambassadors";

type BrandOwner = Owner & {
  role?: Roles;
};
type OwnersEntityType = "user" | "brand" | "product" | "post";

type Owner = entityType & {
  imageSrc: string;
  ownersName: string;
  ownersId: string;
  type: OwnersEntityType;
};

type Media = entityType & {
  url: string;
  thumbnail: string;
  type: "video" | "image";
};

type CommentType = entityType & {
  parentId: string;
  parent?: CommentType;
  childrenId: string[];
  childrens: CommentType[];
  media: Media;
  content: string;
  aliasesReferences: AliasReference[];
  reactions: UserAction[];
  reactionsId: string[];
};

type ActionOwner = Owner & {};

type UserAction = entityType & {
  actionBy?: ActionOwner;
  actionTo?: ActionOwner;
  actionById: string;
  actionToId: string;
  actionDate: Date;
  type: "like" | "comment" | "follow" | "Flag";
};
