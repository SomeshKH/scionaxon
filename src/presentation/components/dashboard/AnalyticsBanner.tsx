import { motion } from 'motion/react';
import { BarChart3, Sparkles, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '../../../ui/button';

const GRID_BG = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+";

export default function AnalyticsBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 bg-gradient-to-r from-sidebar to-primary rounded-2xl p-6 shadow-lg relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{ backgroundImage: `url('${GRID_BG}')` }}
      ></div>

      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Advanced Analytics Dashboard</h3>
            <p className="text-white/70 text-sm">
              Explore interactive global trade maps, heatmaps, and AI-powered insights
            </p>
          </div>
        </div>

        <Link to="/analytics">
          <Button className="bg-white hover:bg-white/90 text-sidebar shadow-lg hover:shadow-xl transition-all">
            <Sparkles className="w-4 h-4 mr-2" />
            View Analytics
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
