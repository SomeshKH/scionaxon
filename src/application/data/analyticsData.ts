import type { AnalyticsShipment } from '../../domain/types/shipment';
import type {
  TradeRoute,
  ProductDistributionItem,
  CountryExportItem,
  RevenueMarginDataPoint,
  HeatmapRow,
  AnalyticsAiInsight,
} from '../../domain/types/analytics';

export const mockShipments: AnalyticsShipment[] = [
  {
    id: 1,
    origin: 'India',
    product: 'Basmati Rice',
    supplier: 'AgriCorp Ltd',
    customer: 'Dubai Imports',
    country: 'UAE',
    boxes: 500,
    weight: 12500,
    invoiceAmount: 45000,
    margin: 8500,
    invoiceDate: '2024-02-15',
    status: 'delivered',
  },
  {
    id: 2,
    origin: 'China',
    product: 'Electronics',
    supplier: 'TechFlow Supply',
    customer: 'Euro Electronics',
    country: 'Germany',
    boxes: 300,
    weight: 4500,
    invoiceAmount: 125000,
    margin: 32000,
    invoiceDate: '2024-02-18',
    status: 'in-transit',
  },
  {
    id: 3,
    origin: 'Vietnam',
    product: 'Textiles',
    supplier: 'VN Fabrics Co',
    customer: 'Fashion USA',
    country: 'USA',
    boxes: 800,
    weight: 8000,
    invoiceAmount: 67000,
    margin: 12000,
    invoiceDate: '2024-02-20',
    status: 'delivered',
  },
  {
    id: 4,
    origin: 'India',
    product: 'Spices',
    supplier: 'Spice Traders',
    customer: 'UK Wholesale',
    country: 'UK',
    boxes: 200,
    weight: 2000,
    invoiceAmount: 28000,
    margin: 5600,
    invoiceDate: '2024-02-22',
    status: 'processing',
  },
  {
    id: 5,
    origin: 'Thailand',
    product: 'Auto Parts',
    supplier: 'Thai Motors',
    customer: 'Japan Auto',
    country: 'Japan',
    boxes: 150,
    weight: 3200,
    invoiceAmount: 89000,
    margin: 18000,
    invoiceDate: '2024-02-23',
    status: 'in-transit',
  },
  {
    id: 6,
    origin: 'Brazil',
    product: 'Coffee Beans',
    supplier: 'Brazil Coffee Co',
    customer: 'EU Coffee',
    country: 'Netherlands',
    boxes: 600,
    weight: 18000,
    invoiceAmount: 54000,
    margin: 9800,
    invoiceDate: '2024-02-24',
    status: 'delivered',
  },
];

export const tradeRoutes: TradeRoute[] = [
  { from: 'India', to: 'UAE', volume: 500, color: '#0F7B6C' },
  { from: 'China', to: 'Germany', volume: 300, color: '#1F3A5F' },
  { from: 'Vietnam', to: 'USA', volume: 800, color: '#8B5CF6' },
  { from: 'India', to: 'UK', volume: 200, color: '#F59E0B' },
  { from: 'Thailand', to: 'Japan', volume: 150, color: '#EC4899' },
  { from: 'Brazil', to: 'Netherlands', volume: 600, color: '#10B981' },
];

export const productDistribution: ProductDistributionItem[] = [
  { name: 'Basmati Rice', value: 35, color: '#0F7B6C' },
  { name: 'Electronics', value: 25, color: '#1F3A5F' },
  { name: 'Textiles', value: 20, color: '#8B5CF6' },
  { name: 'Spices', value: 12, color: '#F59E0B' },
  { name: 'Others', value: 8, color: '#EC4899' },
];

export const countryExports: CountryExportItem[] = [
  { country: 'UAE', value: 45000 },
  { country: 'Germany', value: 125000 },
  { country: 'USA', value: 67000 },
  { country: 'UK', value: 28000 },
  { country: 'Japan', value: 89000 },
  { country: 'Netherlands', value: 54000 },
];

export const revenueMarginData: RevenueMarginDataPoint[] = [
  { month: 'Jan', revenue: 420000, margin: 75000 },
  { month: 'Feb', revenue: 480000, margin: 85800 },
  { month: 'Mar', revenue: 520000, margin: 95000 },
  { month: 'Apr', revenue: 580000, margin: 110000 },
  { month: 'May', revenue: 550000, margin: 98000 },
  { month: 'Jun', revenue: 640000, margin: 125000 },
  { month: 'Jul', revenue: 680000, margin: 138000 },
];

export const heatmapData: HeatmapRow[] = [
  { month: 'Jan', week1: 45, week2: 52, week3: 48, week4: 55 },
  { month: 'Feb', week1: 58, week2: 62, week3: 65, week4: 70 },
  { month: 'Mar', week1: 63, week2: 68, week3: 71, week4: 75 },
  { month: 'Apr', week1: 70, week2: 75, week3: 78, week4: 82 },
  { month: 'May', week1: 75, week2: 72, week3: 70, week4: 68 },
  { month: 'Jun', week1: 80, week2: 85, week3: 88, week4: 92 },
];

export const analyticsAiInsights: AnalyticsAiInsight[] = [
  {
    text: 'Rice exports to UAE rising 18% this quarter',
    confidence: 94,
    type: 'opportunity',
  },
  {
    text: 'High margin opportunity detected in Electronics',
    confidence: 87,
    type: 'alert',
  },
  {
    text: 'Demand spike expected for Textiles next month',
    confidence: 91,
    type: 'prediction',
  },
];
