import { useAnimatedCounter } from '../../application/hooks/useAnimatedCounter';
import { services, testimonials, features, whyChooseItems } from '../../application/data/landingData';
import Navbar from '../../presentation/components/landing/Navbar';
import HeroSection from '../../presentation/components/landing/HeroSection';
import CounterSection from '../../presentation/components/landing/CounterSection';
import ServicesSection from '../../presentation/components/landing/ServicesSection';
import TrackingSection from '../../presentation/components/landing/TrackingSection';
import FeaturesSection from '../../presentation/components/landing/FeaturesSection';
import TestimonialsSection from '../../presentation/components/landing/TestimonialsSection';
import LandingFooter from '../../presentation/components/landing/LandingFooter';

const COUNTER_TARGETS = { countries: 145, shipments: 50000, partners: 2500 };

export default function Landing() {
  const counts = useAnimatedCounter(COUNTER_TARGETS);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection features={features} />
      <CounterSection counts={counts} />
      <ServicesSection services={services} />
      <TrackingSection />
      <FeaturesSection items={whyChooseItems} />
      <TestimonialsSection testimonials={testimonials} />
      <LandingFooter />
    </div>
  );
}
