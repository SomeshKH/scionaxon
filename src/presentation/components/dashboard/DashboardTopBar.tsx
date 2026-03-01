import { motion } from 'motion/react';
import { Menu, X, Package, Search, Bell } from 'lucide-react';
import { Button } from '../../../ui/button';
import { Input } from '../../../ui/input';
import { Avatar, AvatarFallback } from '../../../ui/avatar';
import ThemeToggle from '../shared/ThemeToggle';

interface Props {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export default function DashboardTopBar({ sidebarOpen, onToggleSidebar }: Props) {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 z-40 flex items-center px-4 sm:px-6"
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3 sm:gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleSidebar}
            className="lg:hidden"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>

          <div className="hidden lg:flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#0F7B6C] to-teal-500 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-[#0F7B6C] to-[#1F3A5F] bg-clip-text text-transparent">
              ScionAxon
            </span>
          </div>

          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search products, orders, shipments..."
              className="pl-10 w-64 lg:w-80 rounded-full border-gray-300 dark:border-gray-600 dark:bg-gray-800 focus:border-[#0F7B6C] focus:ring-[#0F7B6C]/20"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle compact />

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>

          <div className="flex items-center gap-2 sm:gap-3 pl-3 sm:pl-4 border-l border-gray-200 dark:border-gray-700">
            <Avatar>
              <AvatarFallback className="bg-gradient-to-br from-[#0F7B6C] to-teal-500 text-white">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="hidden md:block">
              <p className="text-sm font-semibold dark:text-white">John Doe</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
