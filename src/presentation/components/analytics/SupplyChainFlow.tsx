import { motion } from 'motion/react';
import { MapPin, Building2, Package, Users, DollarSign, ArrowRight } from 'lucide-react';

const flowNodes = [
  { icon: MapPin, label: 'Origin', value: 'India', color: 'from-blue-500 to-blue-600' },
  { icon: Building2, label: 'Supplier', value: 'AgriCorp', color: 'from-[#0F7B6C] to-teal-500' },
  { icon: Package, label: 'Shipment', value: '500 boxes', color: 'from-purple-500 to-purple-600' },
  { icon: Users, label: 'Customer', value: 'Dubai Imports', color: 'from-pink-500 to-pink-600' },
  { icon: DollarSign, label: 'Revenue', value: '$45K', color: 'from-emerald-500 to-emerald-600' },
];

export default function SupplyChainFlow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white rounded-3xl p-8 mb-8 shadow-lg border border-gray-200"
    >
      <h3 className="text-2xl font-bold mb-2">Supply Chain Flow</h3>
      <p className="text-gray-600 mb-8">End-to-end trade journey visualization</p>

      <div className="flex items-center justify-between relative">
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-[#0F7B6C] via-[#1F3A5F] to-[#0F7B6C] -translate-y-1/2 -z-10"></div>

        {flowNodes.map((node, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + idx * 0.1 }}
            whileHover={{ scale: 1.1, y: -8 }}
            className="flex flex-col items-center cursor-pointer relative group"
          >
            <div className={`w-20 h-20 bg-gradient-to-br ${node.color} rounded-2xl flex items-center justify-center mb-3 shadow-lg group-hover:shadow-2xl transition-shadow`}>
              <node.icon className="w-10 h-10 text-white" />
            </div>
            <p className="font-semibold text-sm text-gray-900">{node.label}</p>
            <p className="text-xs text-gray-600">{node.value}</p>

            {idx < flowNodes.length - 1 && (
              <motion.div
                className="absolute -right-12 top-8"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRight className="w-6 h-6 text-[#0F7B6C]" />
              </motion.div>
            )}

            <div className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap">
              Click for details
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
