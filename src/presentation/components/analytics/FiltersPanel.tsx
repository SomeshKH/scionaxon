import { motion, AnimatePresence } from 'motion/react';
import { Filter, X, Calendar, MapPin, Package, Users, DollarSign, Percent, Zap } from 'lucide-react';
import { Button } from '../../../ui/button';
import { Input } from '../../../ui/input';
import { Slider } from '../../../ui/slider';
import { Switch } from '../../../ui/switch';

interface Props {
  filterOpen: boolean;
  onClose: () => void;
  dateRange: string;
  onDateRangeChange: (v: string) => void;
  invoiceRange: number[];
  onInvoiceRangeChange: (v: number[]) => void;
  marginRange: number[];
  onMarginRangeChange: (v: number[]) => void;
  highMarginOnly: boolean;
  onHighMarginChange: (v: boolean) => void;
  topCustomersOnly: boolean;
  onTopCustomersChange: (v: boolean) => void;
  recentShipments: boolean;
  onRecentShipmentsChange: (v: boolean) => void;
}

const PRODUCTS = ['Basmati Rice', 'Electronics', 'Textiles', 'Spices'];
const DATE_RANGES = ['7d', '30d', '90d'];

export default function FiltersPanel({
  filterOpen,
  onClose,
  dateRange,
  onDateRangeChange,
  invoiceRange,
  onInvoiceRangeChange,
  marginRange,
  onMarginRangeChange,
  highMarginOnly,
  onHighMarginChange,
  topCustomersOnly,
  onTopCustomersChange,
  recentShipments,
  onRecentShipmentsChange,
}: Props) {
  return (
    <AnimatePresence>
      {filterOpen && (
        <motion.aside
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          exit={{ x: -400 }}
          className="fixed left-0 top-16 bottom-0 w-80 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 overflow-y-auto z-40 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold flex items-center gap-2 dark:text-white">
              <Filter className="w-5 h-5 text-[#0F7B6C]" />
              Smart Filters
            </h3>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="mb-6">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 block">
              <Calendar className="w-4 h-4 inline mr-2" />
              Date Range
            </label>
            <div className="grid grid-cols-3 gap-2">
              {DATE_RANGES.map((range) => (
                <Button
                  key={range}
                  variant={dateRange === range ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => onDateRangeChange(range)}
                  className={dateRange === range ? 'bg-[#0F7B6C] hover:bg-[#0F7B6C]/90' : ''}
                >
                  {range}
                </Button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 block">
              <MapPin className="w-4 h-4 inline mr-2" />
              Geography
            </label>
            <div className="space-y-2">
              <Input placeholder="Origin country" className="rounded-lg dark:bg-gray-800 dark:border-gray-700" />
              <Input placeholder="Destination country" className="rounded-lg dark:bg-gray-800 dark:border-gray-700" />
            </div>
          </div>

          <div className="mb-6">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 block">
              <Package className="w-4 h-4 inline mr-2" />
              Products
            </label>
            <div className="space-y-2">
              {PRODUCTS.map((product) => (
                <div key={product} className="flex items-center gap-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 dark:border-gray-600" />
                  <span className="text-sm dark:text-gray-300">{product}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 block">
              <Users className="w-4 h-4 inline mr-2" />
              Parties
            </label>
            <div className="space-y-2">
              <Input placeholder="Search supplier..." className="rounded-lg dark:bg-gray-800 dark:border-gray-700" />
              <Input placeholder="Search customer..." className="rounded-lg dark:bg-gray-800 dark:border-gray-700" />
            </div>
          </div>

          <div className="mb-6">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 block">
              <DollarSign className="w-4 h-4 inline mr-2" />
              Invoice Amount
            </label>
            <Slider
              value={invoiceRange}
              onValueChange={onInvoiceRangeChange}
              max={150000}
              step={1000}
              className="mb-2"
            />
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>${invoiceRange[0].toLocaleString()}</span>
              <span>${invoiceRange[1].toLocaleString()}</span>
            </div>
          </div>

          <div className="mb-6">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 block">
              <Percent className="w-4 h-4 inline mr-2" />
              Margin
            </label>
            <Slider
              value={marginRange}
              onValueChange={onMarginRangeChange}
              max={50000}
              step={500}
              className="mb-2"
            />
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>${marginRange[0].toLocaleString()}</span>
              <span>${marginRange[1].toLocaleString()}</span>
            </div>
          </div>

          <div className="border-t dark:border-gray-700 pt-6">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 block">
              <Zap className="w-4 h-4 inline mr-2" />
              Smart Toggles
            </label>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm dark:text-gray-300">High margin only</span>
                <Switch checked={highMarginOnly} onCheckedChange={onHighMarginChange} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm dark:text-gray-300">Top customers</span>
                <Switch checked={topCustomersOnly} onCheckedChange={onTopCustomersChange} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm dark:text-gray-300">Recent shipments</span>
                <Switch checked={recentShipments} onCheckedChange={onRecentShipmentsChange} />
              </div>
            </div>
          </div>

          <Button className="w-full mt-6 bg-gradient-to-r from-[#0F7B6C] to-teal-500">
            Apply Filters
          </Button>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
