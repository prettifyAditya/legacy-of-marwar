export interface ProductItem {
  linkHref: string;
  imgSrc: string;
  title: string;
  sp: string;
  mrp?: string;
}

export interface Category {
  label: string;
  productItem: ProductItem[];
}
