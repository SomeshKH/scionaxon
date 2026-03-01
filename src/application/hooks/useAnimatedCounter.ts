import { useState, useEffect } from 'react';
import type { CounterTargets } from '@/domain/types/landing';

export function useAnimatedCounter(
  targets: CounterTargets,
  duration = 2000,
): CounterTargets {
  const [counts, setCounts] = useState<CounterTargets>({
    countries: 0,
    shipments: 0,
    partners: 0,
  });

  useEffect(() => {
    const steps = 60;
    const interval = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setCounts({
        countries: Math.floor(targets.countries * progress),
        shipments: Math.floor(targets.shipments * progress),
        partners: Math.floor(targets.partners * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [targets.countries, targets.shipments, targets.partners, duration]);

  return counts;
}
