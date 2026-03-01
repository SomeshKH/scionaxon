import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Ship,
  Users,
  DollarSign,
  FileText,
  Sparkles,
  Settings,
  Building2,
  type LucideIcon,
} from 'lucide-react';
import type { MenuItemData, KpiCard, Alert, AiInsight, RevenueDataPoint, TradeDataPoint } from '../../domain/types/dashboard';
import type { DashboardShipment } from '../../domain/types/shipment';

export interface MenuItem extends MenuItemData {
  icon: LucideIcon;
  label: string;
  badge?: string;
}

export const menuItems: MenuItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: Package, label: 'Products' },
  { icon: ShoppingCart, label: 'Orders' },
  { icon: Ship, label: 'Shipments' },
  { icon: Building2, label: 'Suppliers' },
  { icon: Users, label: 'Buyers' },
  { icon: DollarSign, label: 'Finance' },
  { icon: FileText, label: 'Reports' },
  { icon: Sparkles, label: 'AI Insights', badge: 'New' },
  { icon: Settings, label: 'Settings' },
];

export const kpiCards: KpiCard[] = [
  {
    title: 'Total Orders',
    value: '2,543',
    change: '+12.5%',
    trend: 'up',
    sparkline: [40, 45, 42, 48, 50, 55, 58],
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Active Shipments',
    value: '847',
    change: '+8.3%',
    trend: 'up',
    sparkline: [30, 35, 38, 40, 42, 45, 47],
    gradient: 'from-[#0F7B6C] to-teal-500',
  },
  {
    title: 'Revenue',
    value: '$1.2M',
    change: '+23.1%',
    trend: 'up',
    sparkline: [50, 55, 52, 60, 65, 70, 75],
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Pending Payments',
    value: '$84.5K',
    change: '-5.2%',
    trend: 'down',
    sparkline: [60, 58, 55, 52, 50, 48, 45],
    gradient: 'from-orange-500 to-orange-600',
  },
  {
    title: 'Total Products',
    value: '1,234',
    change: '+4.7%',
    trend: 'up',
    sparkline: [35, 38, 40, 42, 45, 48, 50],
    gradient: 'from-pink-500 to-pink-600',
  },
];

export const revenueData: RevenueDataPoint[] = [
  { month: 'Jan', revenue: 45000 },
  { month: 'Feb', revenue: 52000 },
  { month: 'Mar', revenue: 48000 },
  { month: 'Apr', revenue: 61000 },
  { month: 'May', revenue: 55000 },
  { month: 'Jun', revenue: 67000 },
  { month: 'Jul', revenue: 72000 },
];

export const tradeData: TradeDataPoint[] = [
  { name: 'Import', value: 58, color: '#0F7B6C' },
  { name: 'Export', value: 42, color: '#1F3A5F' },
];

export const shipments: DashboardShipment[] = [
  {
    id: 'SCA-2024-001',
    product: 'Electronics Components',
    destination: 'Singapore',
    status: 'delivered',
    progress: 100,
    eta: 'Delivered',
  },
  {
    id: 'SCA-2024-002',
    product: 'Textile Materials',
    destination: 'United States',
    status: 'in-transit',
    progress: 65,
    eta: '2 days',
  },
  {
    id: 'SCA-2024-003',
    product: 'Medical Equipment',
    destination: 'Germany',
    status: 'delayed',
    progress: 45,
    eta: '5 days',
  },
  {
    id: 'SCA-2024-004',
    product: 'Automotive Parts',
    destination: 'Japan',
    status: 'processing',
    progress: 20,
    eta: '7 days',
  },
  {
    id: 'SCA-2024-005',
    product: 'Food Products',
    destination: 'Australia',
    status: 'in-transit',
    progress: 80,
    eta: '1 day',
  },
];

export const alerts: Alert[] = [
  {
    type: 'warning',
    title: 'Delayed Shipment',
    message: 'SCA-2024-003 experiencing customs delay',
    time: '2 hours ago',
  },
  {
    type: 'danger',
    title: 'Overdue Payment',
    message: 'Invoice #INV-2024-056 is 3 days overdue',
    time: '5 hours ago',
  },
  {
    type: 'info',
    title: 'Low Stock Alert',
    message: 'SKU-7834 inventory below threshold',
    time: '1 day ago',
  },
];

export const aiInsights: AiInsight[] = [
  {
    title: 'Demand Prediction',
    insight: 'Electronics demand expected to rise 34% in Q2',
    confidence: 94,
    action: 'Increase inventory',
  },
  {
    title: 'Price Trend Alert',
    insight: 'Shipping costs to Asia forecasted to drop 12%',
    confidence: 87,
    action: 'Plan bulk shipment',
  },
  {
    title: 'Market Opportunity',
    insight: 'High demand for medical supplies in Germany',
    confidence: 91,
    action: 'Explore export',
  },
];
