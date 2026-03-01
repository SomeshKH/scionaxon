import { motion } from 'motion/react';
import { Sparkles, ChevronRight } from 'lucide-react';
import { Button } from '../../../ui/button';
import { Badge } from '../../../ui/badge';
import type { AiInsight } from '../../../domain/types/dashboard';

interface Props {
  insights: AiInsight[];
}

const GRID_BG = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+";

export default function AiInsightsWidget({ insights }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0 }}
      className="bg-gradient-to-br from-[#1F3A5F] via-[#0F7B6C] to-teal-500 rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{ backgroundImage: `url('${GRID_BG}')` }}
      ></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">AI Insights</h3>
              <p className="text-teal-200 text-sm">Powered by machine learning</p>
            </div>
          </div>
          <Badge className="bg-amber-400 text-amber-900 font-semibold">Live</Badge>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((insight, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + idx * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <h4 className="font-bold text-white">{insight.title}</h4>
                <Badge className="bg-white/20 text-white text-xs">{insight.confidence}%</Badge>
              </div>
              <p className="text-teal-100 text-sm mb-4 leading-relaxed">{insight.insight}</p>
              <Button
                size="sm"
                className="w-full bg-white/20 hover:bg-white/30 text-white border-0 group-hover:shadow-lg transition-all"
              >
                {insight.action}
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
