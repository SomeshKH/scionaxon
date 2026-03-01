import { useState, useMemo } from "react";
import { Filter } from "lucide-react";
import { Button } from "../../ui/button";
import {
  mockShipments,
  revenueMarginData,
  productDistribution,
  countryExports,
  heatmapData,
  analyticsAiInsights,
} from "../../application/data/analyticsData";
import AnalyticsTopBar from "../../presentation/components/analytics/AnalyticsTopBar";
import FiltersPanel from "../../presentation/components/analytics/FiltersPanel";
import AnalyticsKpiCards from "../../presentation/components/analytics/AnalyticsKpiCards";
import GlobalTradeMap from "../../presentation/components/analytics/GlobalTradeMap";
import SupplyChainFlow from "../../presentation/components/analytics/SupplyChainFlow";
import AiInsightSpotlight from "../../presentation/components/analytics/AiInsightSpotlight";
import RevenueMarginChart from "../../presentation/components/analytics/RevenueMarginChart";
import ProductDistributionChart from "../../presentation/components/analytics/ProductDistributionChart";
import CountryExportsChart from "../../presentation/components/analytics/CountryExportsChart";
import ShipmentHeatmap from "../../presentation/components/analytics/ShipmentHeatmap";
import ShipmentAnalyticsTable from "../../presentation/components/analytics/ShipmentAnalyticsTable";

export default function AnalyticsDashboard() {
  const [filterOpen, setFilterOpen] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState("30d");
  const [invoiceRange, setInvoiceRange] = useState([0, 150000]);
  const [marginRange, setMarginRange] = useState([0, 50000]);
  const [highMarginOnly, setHighMarginOnly] = useState(false);
  const [topCustomersOnly, setTopCustomersOnly] = useState(false);
  const [recentShipments, setRecentShipments] = useState(false);

  const totals = useMemo(() => {
    let filtered = [...mockShipments];
    if (selectedCountry)
      filtered = filtered.filter((s) => s.country === selectedCountry);
    if (highMarginOnly) filtered = filtered.filter((s) => s.margin > 10000);
    return {
      shipments: filtered.length,
      boxes: filtered.reduce((sum, s) => sum + s.boxes, 0),
      weight: filtered.reduce((sum, s) => sum + s.weight, 0),
      revenue: filtered.reduce((sum, s) => sum + s.invoiceAmount, 0),
      margin: filtered.reduce((sum, s) => sum + s.margin, 0),
    };
  }, [selectedCountry, highMarginOnly]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <AnalyticsTopBar onToggleFilter={() => setFilterOpen(!filterOpen)} />

      <div className="flex pt-16">
        <FiltersPanel
          filterOpen={filterOpen}
          onClose={() => setFilterOpen(false)}
          dateRange={dateRange}
          onDateRangeChange={setDateRange}
          invoiceRange={invoiceRange}
          onInvoiceRangeChange={setInvoiceRange}
          marginRange={marginRange}
          onMarginRangeChange={setMarginRange}
          highMarginOnly={highMarginOnly}
          onHighMarginChange={setHighMarginOnly}
          topCustomersOnly={topCustomersOnly}
          onTopCustomersChange={setTopCustomersOnly}
          recentShipments={recentShipments}
          onRecentShipmentsChange={setRecentShipments}
        />

        <main
          className={`flex-1 p-6 transition-all ${filterOpen ? "ml-80" : "ml-0"}`}
        >
          {!filterOpen && (
            <Button
              onClick={() => setFilterOpen(true)}
              className="mb-6 bg-primary hover:bg-primary-hover"
            >
              <Filter className="w-4 h-4 mr-2" />
              Show Filters
            </Button>
          )}

          <AnalyticsKpiCards totals={totals} />
          <GlobalTradeMap
            selectedCountry={selectedCountry}
            onCountrySelect={setSelectedCountry}
          />
          <SupplyChainFlow />
          <AiInsightSpotlight insights={analyticsAiInsights} />

          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <RevenueMarginChart data={revenueMarginData} />
            <ProductDistributionChart data={productDistribution} />
            <CountryExportsChart data={countryExports} />
            <ShipmentHeatmap data={heatmapData} />
          </div>

          <ShipmentAnalyticsTable shipments={mockShipments} />
        </main>
      </div>
    </div>
  );
}
