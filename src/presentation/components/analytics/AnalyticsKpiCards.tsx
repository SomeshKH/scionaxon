import { motion } from 'motion/react';
import { Package, Weight, DollarSign, TrendingUp } from 'lucide-react';
import { Badge } from '../../../ui/badge';
import type { AnalyticsTotals } from '../../../domain/types/analytics';

interface Props {
  totals: AnalyticsTotals;
}

export default function AnalyticsKpiCards({ totals }: Props) {
  const cards = [
    { title: 'Total Shipments', value: totals.shipments, icon: Package, gradient: 'from-blue-500 to-blue-600', change: '+12.5%' },
    { title: 'Total Boxes', value: totals.boxes.toLocaleString(), icon: Package, gradient: 'from-[#0F7B6C] to-teal-500', change: '+8.3%' },
    { title: 'Total Weight', value: `${(totals.weight / 1000).toFixed(1)}T`, icon: Weight, gradient: 'from-purple-500 to-purple-600', change: '+15.2%' },
    { title: 'Total Revenue', value: `$${(totals.revenue / 1000).toFixed(0)}K`, icon: DollarSign, gradient: 'from-emerald-500 to-emerald-600', change: '+23.1%' },
    { title: 'Total Margin', value: `$${(totals.margin / 1000).toFixed(0)}K`, icon: TrendingUp, gradient: 'from-amber-500 to-amber-600', change: '+18.7%' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
      {cards.map((kpi, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.05 }}
          whileHover={{ y: -4, transition: { duration: 0.15 } }}
          className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden group cursor-pointer"
        >
          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${kpi.gradient} opacity-5 rounded-full -mr-12 -mt-12 group-hover:scale-125 transition-transform duration-300`}></div>
          <div className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b ${kpi.gradient}`}></div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <kpi.icon className="w-8 h-8 text-gray-400 dark:text-gray-500" />
              <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs">{kpi.change}</Badge>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{kpi.title}</p>
            <h3 className="text-3xl font-bold mb-3 dark:text-white">{kpi.value}</h3>
            <div className="flex items-end gap-1 h-8">
              {[40, 45, 42, 48, 50, 55, 58, 60].map((value, i) => (
                <div
                  key={i}
                  className={`flex-1 bg-gradient-to-t ${kpi.gradient} rounded-t opacity-20 group-hover:opacity-40 transition-opacity`}
                  style={{ height: `${(value / 60) * 100}%` }}
                ></div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
