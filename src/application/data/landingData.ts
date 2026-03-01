import {
  Package,
  Ship,
  BarChart3,
  Shield,
  Zap,
  Globe,
  TrendingUp,
  Clock,
  Users,
  Award,
  type LucideIcon,
} from 'lucide-react';
import type { Testimonial } from '../../domain/types/landing';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

export interface Feature {
  icon: LucideIcon;
  text: string;
}

export interface WhyChooseItem {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export const services: Service[] = [
  {
    icon: Package,
    title: 'Import Management',
    description: 'Streamline your import operations with AI-powered logistics and real-time tracking.',
    gradient: 'from-[#0F7B6C] to-teal-500',
  },
  {
    icon: Ship,
    title: 'Export Solutions',
    description: 'Expand globally with automated export documentation and compliance management.',
    gradient: 'from-[#1F3A5F] to-blue-600',
  },
  {
    icon: BarChart3,
    title: 'Trade Analytics',
    description: 'Make data-driven decisions with advanced market insights and predictive analytics.',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    icon: Shield,
    title: 'Customs & Compliance',
    description: 'Navigate international regulations effortlessly with automated compliance checks.',
    gradient: 'from-amber-500 to-orange-600',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'CEO, GlobalTech Imports',
    content: 'ScionAxon transformed our import-export operations. The AI insights saved us 40% on shipping costs.',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'Supply Chain Director, TradeMax',
    content: 'The real-time tracking and predictive analytics are game-changers. We\'ve reduced delays by 60%.',
    rating: 5,
  },
  {
    name: 'Aisha Patel',
    role: 'Founder, ExportPro Solutions',
    content: 'Best platform for international trade. The compliance automation alone is worth every penny.',
    rating: 5,
  },
];

export const features: Feature[] = [
  { icon: Zap, text: 'Real-time Tracking' },
  { icon: Globe, text: '145+ Countries' },
  { icon: Shield, text: 'Secure & Compliant' },
  { icon: TrendingUp, text: 'AI-Powered Insights' },
];

export const whyChooseItems: WhyChooseItem[] = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Process shipments 10x faster with our optimized workflows and automation',
    color: 'text-yellow-500',
  },
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description: 'Enterprise-level encryption and compliance with international trade regulations',
    color: 'text-blue-500',
  },
  {
    icon: BarChart3,
    title: 'AI Analytics',
    description: 'Predictive insights that help you make smarter trade decisions',
    color: 'text-purple-500',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock assistance from our global support team',
    color: 'text-green-500',
  },
  {
    icon: Users,
    title: 'Partner Network',
    description: 'Access to 2,500+ verified suppliers and buyers worldwide',
    color: 'text-pink-500',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized as the #1 trade platform by industry leaders',
    color: 'text-orange-500',
  },
];
