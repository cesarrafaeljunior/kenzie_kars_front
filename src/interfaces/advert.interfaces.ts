export interface iAdvert {
  id: string;
  title: string;
  mileage: number;
  price: string;
  year: number;
  model: string;
  description: string;
  cover_image: string;
  location: string;
  created_at: string;
  updated_at: string;
  is_avaliable: boolean;
  galery: iSellerGalery[];
}

export interface iSellerGalery {
  id: number;
  image: string;
}
