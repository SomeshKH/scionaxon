import { useState } from 'react';
import { menuItems, kpiCards, revenueData, tradeData, shipments, alerts, aiInsights } from '../../application/data/dashboardData';
import DashboardTopBar from '../../presentation/components/dashboard/DashboardTopBar';
import DashboardSidebar from '../../presentation/components/dashboard/DashboardSidebar';
import AnalyticsBanner from '../../presentation/components/dashboard/AnalyticsBanner';
import KpiCardsGrid from '../../presentation/components/dashboard/KpiCardsGrid';
import RevenueChart from '../../presentation/components/dashboard/RevenueChart';
import TradeDistributionChart from '../../presentation/components/dashboard/TradeDistributionChart';
import ShipmentsTable from '../../presentation/components/dashboard/ShipmentsTable';
import QuickActions from '../../presentation/components/dashboard/QuickActions';
import SmartAlerts from '../../presentation/components/dashboard/SmartAlerts';
import AiInsightsWidget from '../../presentation/components/dashboard/AiInsightsWidget';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('Dashboard');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <DashboardTopBar
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <DashboardSidebar
        sidebarOpen={sidebarOpen}
        activeMenu={activeMenu}
        menuItems={menuItems}
        onMenuClick={setActiveMenu}
      />

      <main className={`pt-24 transition-all ${sidebarOpen ? 'lg:pl-64' : 'pl-0'} p-6`}>
        <AnalyticsBanner />
        <KpiCardsGrid cards={kpiCards} />

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <RevenueChart data={revenueData} />
          <TradeDistributionChart data={tradeData} />
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <ShipmentsTable shipments={shipments} />
          <div className="space-y-6">
            <QuickActions />
            <SmartAlerts alerts={alerts} />
          </div>
        </div>

        <AiInsightsWidget insights={aiInsights} />
      </main>
    </div>
  );
}
