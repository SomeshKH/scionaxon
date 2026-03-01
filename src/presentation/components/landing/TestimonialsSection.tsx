import { useState } from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import type { Testimonial } from '../../../domain/types/landing';

interface Props {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#1F3A5F] to-[#0F7B6C]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-foreground-secondary">See what our clients say about us</p>
        </motion.div>

        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-12 border border-white/20"
        >
          <div className="flex gap-2 mb-6">
            {[...Array(active.rating)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-warning text-warning" />
            ))}
          </div>

          <p className="text-lg sm:text-2xl text-white mb-6 sm:mb-8 leading-relaxed">"{active.content}"</p>

          <div>
            <p className="text-xl font-bold text-white">{active.name}</p>
            <p className="text-foreground-secondary">{active.role}</p>
          </div>
        </motion.div>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-3 rounded-full transition-all ${
                activeIndex === idx ? 'bg-white w-8' : 'bg-white/30 hover:bg-white/50 w-3'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
