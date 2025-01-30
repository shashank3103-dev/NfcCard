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
}
export interface Product {
  title?: string;
  image?: string;
  service?: number;
  description?: string;
  IsPremium?: boolean;
}
