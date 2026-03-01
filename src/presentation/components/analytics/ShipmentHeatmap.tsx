import { motion } from 'motion/react';
import type { HeatmapRow } from '../../../domain/types/analytics';

interface Props {
  data: HeatmapRow[];
}

export default function ShipmentHeatmap({ data }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
    >
      <h3 className="text-xl font-bold mb-2 dark:text-white">Monthly Shipment Heatmap</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Weekly intensity visualization</p>

      <div className="space-y-3">
        {data.map((row, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span className="text-sm font-medium w-12 dark:text-gray-300">{row.month}</span>
            <div className="flex-1 grid grid-cols-4 gap-2">
              {[row.week1, row.week2, row.week3, row.week4].map((value, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="h-12 rounded-lg cursor-pointer flex items-center justify-center text-white font-bold text-sm relative group"
                  style={{ backgroundColor: `rgba(15, 123, 108, ${value / 100})` }}
                >
                  {value}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 dark:bg-gray-700 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10">
                    {value} shipments
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <span className="text-xs text-gray-500 dark:text-gray-400">Less</span>
        <div className="flex gap-1">
          {[20, 40, 60, 80, 100].map((opacity, i) => (
            <div
              key={i}
              className="w-6 h-6 rounded"
              style={{ backgroundColor: `rgba(15, 123, 108, ${opacity / 100})` }}
            ></div>
          ))}
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400">More</span>
      </div>
    </motion.div>
  );
}
