export interface Juice {
  id: string;
  name: string;
  localName?: string;
  emoji: string;
  color: string;
  badgeColor: string;
  description: string;
  flavorProfile: string;
  healthBenefits: string;
  image?: string;
}

export interface CartItem {
  id: string; // "pack-6" or "extra-juice-id"
  name: string;
  price: number;
  quantity: number;
  isPack: boolean;
  packContentsCustomization?: Record<string, number>; // How many of each juice inside the pack of 6 (defaults to 1 each)
}

export interface DakarNeighborhood {
  name: string;
  deliveryFee: number;
  estimatedTime: string;
}

export interface Order {
  id: string;
  customerName: string;
  phone: string;
  neighborhood: string;
  deliveryAddress: string;
  items: CartItem[];
  totalAmount: number;
  status: 'pending' | 'preparing' | 'transit' | 'delivered';
  createdAt: string;
}
