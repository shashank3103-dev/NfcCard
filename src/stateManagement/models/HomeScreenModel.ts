export interface Service {
  id?: number;
  type?: string;
  description?: string;
  price?: number;
  image?: string;
}
export interface Banner {
  id?: number;
  type?: string;
  image?: string;
  // style?:any;
}
export interface Product {
  product_id?:number,
  title?: string;
  image?: string;
  service_id?: string;
  description?: string;
  IsPremium?: boolean;
}
