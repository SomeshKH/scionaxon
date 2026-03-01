import { motion } from 'motion/react';
import type { CounterTargets } from '../../../domain/types/landing';

interface Props {
  counts: CounterTargets;
}

export default function CounterSection({ counts }: Props) {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-r from-[#1F3A5F] to-[#0F7B6C]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-5xl font-bold text-white mb-2">{counts.countries}+</div>
            <div className="text-foreground-secondary">Countries Connected</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-5xl font-bold text-white mb-2">{counts.shipments.toLocaleString()}+</div>
            <div className="text-foreground-secondary">Successful Shipments</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-5xl font-bold text-white mb-2">{counts.partners.toLocaleString()}+</div>
            <div className="text-teal-200">Trusted Partners</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
