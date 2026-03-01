export type ShipmentStatus = 'delivered' | 'in-transit' | 'delayed' | 'processing';

export interface DashboardShipment {
  id: string;
  product: string;
  destination: string;
  status: ShipmentStatus;
  progress: number;
  eta: string;
}

export interface AnalyticsShipment {
  id: number;
  origin: string;
  product: string;
  supplier: string;
  customer: string;
  country: string;
  boxes: number;
  weight: number;
  invoiceAmount: number;
  margin: number;
  invoiceDate: string;
  status: ShipmentStatus;
}
