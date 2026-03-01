export interface TradeRoute {
  from: string;
  to: string;
  volume: number;
  color: string;
}

export interface ProductDistributionItem {
  name: string;
  value: number;
  color: string;
}

export interface CountryExportItem {
  country: string;
  value: number;
}

export interface RevenueMarginDataPoint {
  month: string;
  revenue: number;
  margin: number;
}

export interface HeatmapRow {
  month: string;
  week1: number;
  week2: number;
  week3: number;
  week4: number;
}

export interface AnalyticsAiInsight {
  text: string;
  confidence: number;
  type: 'opportunity' | 'alert' | 'prediction';
}

export interface AnalyticsTotals {
  shipments: number;
  boxes: number;
  weight: number;
  revenue: number;
  margin: number;
}
