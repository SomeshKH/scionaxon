import { motion } from 'motion/react';
import { MapPin, Download, Target } from 'lucide-react';
import { Button } from '../../../ui/button';
import { Badge } from '../../../ui/badge';
import { Progress } from '../../../ui/progress';
import type { AnalyticsShipment } from '../../../domain/types/shipment';

interface Props {
  shipments: AnalyticsShipment[];
}

const countryCodes: Record<string, string> = {
  'UAE': 'ae',
  'Germany': 'de',
  'USA': 'us',
  'UK': 'gb',
  'Japan': 'jp',
  'Netherlands': 'nl',
  'India': 'in',
  'China': 'cn',
  'Vietnam': 'vn',
  'Thailand': 'th',
  'Brazil': 'br',
  'France': 'fr',
  'Italy': 'it',
  'Spain': 'es',
  'Canada': 'ca',
  'Australia': 'au',
  'Singapore': 'sg',
  'South Korea': 'kr',
  'Malaysia': 'my',
  'Indonesia': 'id',
};

interface FlagProps {
  country: string;
  size?: 'sm' | 'md';
}

function FlagImage({ country, size = 'sm' }: FlagProps) {
  const code = countryCodes[country];
  if (!code) return null;
  const dimensions = size === 'sm' ? { w: 20, h: 15 } : { w: 24, h: 18 };
  return (
    <img
      src={`https://flagcdn.com/${dimensions.w}x${dimensions.h}/${code}.png`}
      srcSet={`https://flagcdn.com/${dimensions.w * 2}x${dimensions.h * 2}/${code}.png 2x`}
      width={dimensions.w}
      height={dimensions.h}
      alt={country}
      className="rounded-sm object-cover shrink-0 shadow-sm"
    />
  );
}

function getStatusColor(status: string): string {
  switch (status) {
    case 'delivered': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
    case 'in-transit': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400';
    default: return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
  }
}

export default function ShipmentAnalyticsTable({ shipments }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
    >
      <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold dark:text-white">Shipment Analytics Table</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Detailed trade intelligence</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="dark:border-gray-600 dark:text-gray-300">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm" className="border-[#0F7B6C] text-[#0F7B6C] dark:border-teal-500 dark:text-teal-400">
            <Target className="w-4 h-4 mr-2" />
            Filter by Map
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-900/50 sticky top-0 z-10">
            <tr>
              {['Origin', 'Product', 'Supplier', 'Customer', 'Country', 'Boxes', 'Weight', 'Invoice', 'Margin', 'Status'].map((h) => (
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
                transition={{ delay: idx * 0.05 }}
                className="border-b border-gray-100 dark:border-gray-700/50 hover:bg-gradient-to-r hover:from-[#0F7B6C]/5 hover:to-transparent dark:hover:from-teal-500/10 transition-all cursor-pointer"
              >
                {/* Origin */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#0F7B6C] dark:text-teal-400 shrink-0" />
                    <FlagImage country={shipment.origin} />
                    <span className="text-sm font-medium dark:text-gray-300">{shipment.origin}</span>
                  </div>
                </td>

                <td className="px-6 py-4 text-sm dark:text-gray-300">{shipment.product}</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{shipment.supplier}</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{shipment.customer}</td>

                {/* Destination country with flag image */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <FlagImage country={shipment.country} size="md" />
                    <span className="text-sm font-medium dark:text-gray-300">{shipment.country}</span>
                  </div>
                </td>

                <td className="px-6 py-4 text-sm font-semibold dark:text-gray-300">{shipment.boxes}</td>
                <td className="px-6 py-4 text-sm dark:text-gray-300">{(shipment.weight / 1000).toFixed(1)}T</td>
                <td className="px-6 py-4 text-sm font-semibold text-green-600 dark:text-green-400">
                  ${shipment.invoiceAmount.toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-[#0F7B6C] dark:text-teal-400">
                      ${shipment.margin.toLocaleString()}
                    </div>
                    <Progress value={(shipment.margin / shipment.invoiceAmount) * 100} className="h-1" />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <Badge className={getStatusColor(shipment.status)}>{shipment.status}</Badge>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
