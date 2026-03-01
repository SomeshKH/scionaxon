export interface KpiCard {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  sparkline: number[];
  gradient: string;
}

export type AlertType = 'warning' | 'danger' | 'info';

export interface Alert {
  type: AlertType;
  title: string;
  message: string;
  time: string;
}

export interface AiInsight {
  title: string;
  insight: string;
  confidence: number;
  action: string;
}

export interface RevenueDataPoint {
  month: string;
  revenue: number;
}

export interface TradeDataPoint {
  name: string;
  value: number;
  color: string;
}

export interface MenuItemData {
  label: string;
  badge?: string;
}
