
export interface CurrencyRate {
  pair: string;
  rate: string;
  change: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price?: string;
  oldPrice?: string;
  image: string;
  isPopular?: boolean;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface Certificate {
  id: number;
  title: string;
  category: string;
  image: string;
}
