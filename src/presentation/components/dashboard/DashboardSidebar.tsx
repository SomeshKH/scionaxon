import { motion } from 'motion/react';
import { Badge } from '../../../ui/badge';
import type { MenuItem } from '../../../application/data/dashboardData';

interface Props {
  sidebarOpen: boolean;
  activeMenu: string;
  menuItems: MenuItem[];
  onMenuClick: (label: string) => void;
}

export default function DashboardSidebar({ sidebarOpen, activeMenu, menuItems, onMenuClick }: Props) {
  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: sidebarOpen ? 0 : -300 }}
      className={`fixed left-0 top-16 bottom-0 w-64 bg-sidebar z-30 overflow-y-auto transition-all lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <button
                onClick={() => onMenuClick(item.label)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all group ${
                  activeMenu === item.label
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-lg shadow-sidebar-primary/30'
                    : 'text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <Badge className="bg-secondary text-secondary-foreground text-xs">{item.badge}</Badge>
                )}
                {activeMenu === item.label && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="w-1 h-6 bg-white rounded-full"
                  />
                )}
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.aside>
  );
}
