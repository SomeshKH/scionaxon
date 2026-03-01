import { motion } from 'motion/react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import type { TradeDataPoint } from '../../../domain/types/dashboard';

interface Props {
  data: TradeDataPoint[];
}

export default function TradeDistributionChart({ data }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
    >
      <h3 className="text-xl font-bold mb-2 dark:text-white">Import vs Export</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Trade distribution</p>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              color: 'var(--card-foreground)',
            }}
          />
        </PieChart>
      </ResponsiveContainer>

      <div className="flex justify-center gap-6 mt-4">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
            <span className="text-sm font-medium dark:text-gray-300">{item.name}: {item.value}%</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
