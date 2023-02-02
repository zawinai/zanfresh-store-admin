export type cartTypes = {
  img: string;
  name: string;
  price: number;
  quantity: number;
};
export type orderTypes = {
  id: string;
  customer: string;
  grandTotal: number;
  city: string;
  date: string;
  cart: cartTypes[];
};

export type productTypes = {
  createdAt: string;
  description: string;
  imgUrl: string;
  name: string;
  price: number;
};

export type customerTypes = {
  id: string;
  name: string;
  email: string;
  imgUrl: string;
  joined: string;
  orders: number;
  spent: number;
  city: string;
};
