import { motion } from 'motion/react';
import { Plus, Ship, Upload, ShoppingCart } from 'lucide-react';
import { Button } from '../../../ui/button';

export default function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
    >
      <h3 className="text-xl font-bold mb-4 dark:text-white">Quick Actions</h3>
      <div className="space-y-3">
        <Button className="w-full justify-start bg-gradient-to-r from-[#0F7B6C] to-teal-500 hover:shadow-lg">
          <Plus className="w-5 h-5 mr-2" />
          Add Product
        </Button>
        <Button className="w-full justify-start bg-gradient-to-r from-[#1F3A5F] to-blue-600 hover:shadow-lg">
          <Ship className="w-5 h-5 mr-2" />
          Create Shipment
        </Button>
        <Button className="w-full justify-start bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg">
          <Upload className="w-5 h-5 mr-2" />
          Upload Excel
        </Button>
        <Button className="w-full justify-start bg-gradient-to-r from-orange-500 to-amber-500 hover:shadow-lg">
          <ShoppingCart className="w-5 h-5 mr-2" />
          Create Order
        </Button>
      </div>
    </motion.div>
  );
}
