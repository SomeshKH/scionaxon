import { motion } from 'motion/react';
import { Menu, Search, RefreshCw, Download, Bell, BarChart3 } from 'lucide-react';
import { Button } from '../../../ui/button';
import { Input } from '../../../ui/input';
import { Avatar, AvatarFallback } from '../../../ui/avatar';
import ThemeToggle from '../shared/ThemeToggle';

interface Props {
  onToggleFilter: () => void;
}

export default function AnalyticsTopBar({ onToggleFilter }: Props) {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 z-50 flex items-center px-4 sm:px-6"
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3 sm:gap-4">
          <Button variant="ghost" size="icon" onClick={onToggleFilter}>
            <Menu className="w-5 h-5" />
          </Button>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#0F7B6C] to-teal-500 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg font-bold bg-gradient-to-r from-[#0F7B6C] to-[#1F3A5F] bg-clip-text text-transparent">
                ScionAxon
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">Analytics</span>
            </div>
          </div>

          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search shipments, products, suppliers..."
              className="pl-10 w-64 lg:w-96 rounded-full border-gray-300 dark:border-gray-600 dark:bg-gray-800"
            />
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle compact />

          <Button variant="ghost" size="icon"><RefreshCw className="w-5 h-5" /></Button>
          <Button variant="ghost" size="icon" className="hidden sm:flex"><Download className="w-5 h-5" /></Button>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>
          <Avatar>
            <AvatarFallback className="bg-gradient-to-br from-[#0F7B6C] to-teal-500 text-white">
              JD
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </motion.div>
  );
}
