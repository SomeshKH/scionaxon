import { motion } from 'motion/react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import type { KpiCard } from '../../../domain/types/dashboard';

interface Props {
  cards: KpiCard[];
}

export default function KpiCardsGrid({ cards }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
      {cards.map((card, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 relative overflow-hidden group cursor-pointer"
        >
          <div
            className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${card.gradient} opacity-10 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-300`}
          ></div>

          <div className="relative z-10">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{card.title}</p>
            <div className="flex items-end justify-between mb-3">
              <h3 className="text-3xl font-bold dark:text-white">{card.value}</h3>
              <div className={`flex items-center gap-1 text-sm ${card.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                {card.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                <span className="font-semibold">{card.change}</span>
              </div>
            </div>

            <div className="flex items-end gap-1 h-8">
              {card.sparkline.map((value, i) => (
                <div
                  key={i}
                  className={`flex-1 bg-gradient-to-t ${card.gradient} rounded-t opacity-30 group-hover:opacity-60 transition-opacity`}
                  style={{ height: `${(value / 80) * 100}%` }}
                ></div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
