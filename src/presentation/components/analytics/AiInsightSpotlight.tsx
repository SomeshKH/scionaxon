import { motion } from 'motion/react';
import { Sparkles, Activity } from 'lucide-react';
import { Badge } from '../../../ui/badge';
import type { AnalyticsAiInsight } from '../../../domain/types/analytics';

interface Props {
  insights: AnalyticsAiInsight[];
}

const typeColors = {
  opportunity: { ring: '#0F7B6C', bg: 'bg-[#0F7B6C]/10', text: 'text-[#0F7B6C] dark:text-teal-400', badgeBg: 'bg-[#0F7B6C]/10 text-[#0F7B6C] dark:text-teal-400' },
  alert: { ring: '#F59E0B', bg: 'bg-amber-500/10', text: 'text-amber-500', badgeBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400' },
  prediction: { ring: '#8B5CF6', bg: 'bg-purple-500/10', text: 'text-purple-500', badgeBg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400' },
};

export default function AiInsightSpotlight({ insights }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="grid md:grid-cols-3 gap-6 mb-8"
    >
      {insights.map((insight, idx) => {
        const colors = typeColors[insight.type];
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + idx * 0.1 }}
            whileHover={{ scale: 1.03, y: -4 }}
            className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg overflow-hidden group cursor-pointer border border-transparent dark:border-gray-700"
            style={{ boxShadow: `0 0 0 2px ${colors.ring}40` }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: `linear-gradient(135deg, ${colors.ring}20, transparent)` }}
            ></div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors.bg}`}>
                  <Sparkles className={`w-6 h-6 ${colors.text}`} />
                </div>
                <Badge className={colors.badgeBg}>{insight.confidence}% confidence</Badge>
              </div>

              <p className="font-semibold text-gray-900 dark:text-white mb-2 leading-relaxed">{insight.text}</p>

              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-500 dark:text-gray-400">AI Prediction</span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
