import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { CountryExportItem } from '../../../domain/types/analytics';

interface Props {
  data: CountryExportItem[];
}

export default function CountryExportsChart({ data }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
    >
      <h3 className="text-xl font-bold mb-2 dark:text-white">Country-wise Exports</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Top export destinations</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis type="number" stroke="var(--muted-foreground)" />
          <YAxis dataKey="country" type="category" stroke="var(--muted-foreground)" width={100} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              color: 'var(--card-foreground)',
            }}
          />
          <Bar dataKey="value" fill="var(--primary)" radius={[0, 8, 8, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
