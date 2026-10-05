export interface ProductItem {
  linkHref: string;
  imgSrc: string;
  title: string;
  price: string;
}

export interface Category {
  label: string;
  productItem: ProductItem[];
}
