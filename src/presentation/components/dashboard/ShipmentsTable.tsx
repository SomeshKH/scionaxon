import { motion } from 'motion/react';
import { Clock } from 'lucide-react';
import { Badge } from '../../../ui/badge';
import { Progress } from '../../../ui/progress';
import type { DashboardShipment } from '../../../domain/types/shipment';

interface Props {
  shipments: DashboardShipment[];
}

function getStatusColor(status: string): string {
  switch (status) {
    case 'delivered': return 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800';
    case 'in-transit': return 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800';
    case 'delayed': return 'bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800';
    case 'processing': return 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800';
    default: return 'bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600';
  }
}

export default function ShipmentsTable({ shipments }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
    >
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold dark:text-white">Live Shipments</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">Real-time tracking updates</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-900/50 sticky top-0">
            <tr>
              {['Tracking ID', 'Product', 'Destination', 'Status', 'Progress', 'ETA'].map((h) => (
                <th key={h} className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {shipments.map((shipment, idx) => (
              <motion.tr
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="border-b border-gray-100 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors cursor-pointer"
              >
                <td className="px-6 py-4">
                  <span className="font-mono text-sm font-semibold text-primary">{shipment.id}</span>
                </td>
                <td className="px-6 py-4 text-sm dark:text-gray-300">{shipment.product}</td>
                <td className="px-6 py-4 text-sm dark:text-gray-300">{shipment.destination}</td>
                <td className="px-6 py-4">
                  <Badge className={`${getStatusColor(shipment.status)} border capitalize`}>
                    {shipment.status.replace('-', ' ')}
                  </Badge>
                </td>
                <td className="px-6 py-4">
                  <div className="w-full max-w-[120px]">
                    <Progress value={shipment.progress} className="h-2" />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    {shipment.eta}
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
