import { motion } from 'motion/react';
import { AlertCircle } from 'lucide-react';
import type { Alert, AlertType } from '../../../domain/types/dashboard';

interface Props {
  alerts: Alert[];
}

function getAlertColor(type: AlertType): string {
  switch (type) {
    case 'warning': return 'border-l-amber-500 bg-amber-50 dark:bg-amber-900/20';
    case 'danger': return 'border-l-red-500 bg-red-50 dark:bg-red-900/20';
    case 'info': return 'border-l-blue-500 bg-blue-50 dark:bg-blue-900/20';
    default: return 'border-l-gray-500 bg-gray-50 dark:bg-gray-700/20';
  }
}

export default function SmartAlerts({ alerts }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
    >
      <h3 className="text-xl font-bold mb-4 dark:text-white">Smart Alerts</h3>
      <div className="space-y-3">
        {alerts.map((alert, idx) => (
          <div
            key={idx}
            className={`border-l-4 ${getAlertColor(alert.type)} p-4 rounded-r-lg`}
          >
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 dark:text-gray-300" />
              <div className="flex-1">
                <p className="font-semibold text-sm mb-1 dark:text-gray-200">{alert.title}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{alert.message}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500">{alert.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
