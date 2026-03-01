import { motion } from 'motion/react';
import { Search } from 'lucide-react';
import { Input } from '../../../ui/input';
import { Button } from '../../../ui/button';

export default function TrackingSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Track Your Shipment</h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8">
            Enter your tracking number for real-time updates
          </p>

          <div className="relative max-w-2xl mx-auto">
            <Input
              placeholder="Enter tracking number (e.g., SCA-2024-123456)"
              className="h-14 sm:h-16 pl-4 sm:pl-6 pr-28 sm:pr-40 text-base sm:text-lg rounded-2xl border-2 border-border focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all shadow-lg bg-input-background text-foreground placeholder-foreground-muted"
            />
            <Button className="absolute right-2 top-2 h-10 sm:h-12 bg-gradient-to-r from-[#0F7B6C] to-teal-500 hover:shadow-lg px-4 sm:px-8">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Track</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
