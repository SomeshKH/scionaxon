import { motion } from "motion/react";
import { ArrowRight, Globe, Search } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../../../ui/button";
import type { Feature } from "../../../application/data/landingData";

interface Props {
  features: Feature[];
}

export default function HeroSection({ features }: Props) {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-sidebar/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-[#0F7B6C]/10 to-teal-500/10 rounded-full border border-[#0F7B6C]/20">
              <span className="text-primary text-sm font-semibold">
                AI-Powered Trade Platform
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
              Powering{" "}
              <span className="bg-gradient-to-r from-[#0F7B6C] to-teal-500 bg-clip-text text-transparent">
                Smart
              </span>
              <br />
              Global Trade
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Transform your import-export business with AI-driven intelligence,
              real-time tracking, and seamless global logistics management.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-12">
              <Link to="/signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#0F7B6C] to-teal-500 hover:shadow-2xl hover:shadow-teal-500/30 transition-all text-base sm:text-lg px-6 sm:px-8 group"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-info text-info hover:bg-info hover:text-info-foreground text-base sm:text-lg px-6 sm:px-8"
              >
                <Search className="mr-2 w-5 h-5" />
                Track Shipment
              </Button>
            </div>

            <div className="flex flex-wrap gap-3">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 + 0.5 }}
                  className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md border border-gray-200 dark:border-gray-700"
                >
                  <feature.icon className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mt-8 md:mt-0"
          >
            <div className="relative w-full h-[380px] sm:h-[440px] md:h-[500px] bg-gradient-to-br from-[#1F3A5F] to-[#0F7B6C] rounded-3xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-white rounded-full shadow-lg"
                  style={{
                    left: `${20 + i * 10}%`,
                    top: `${30 + Math.sin(i) * 20}%`,
                  }}
                  animate={{ y: [0, -20, 0], opacity: [1, 0.5, 1] }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-40 h-40 sm:w-48 sm:h-48 border-4 border-white/20 rounded-full flex items-center justify-center"
                >
                  <img
                    src="/src/public/images/Logo1.png"
                    alt="logo"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </motion.div>
              </div>
            </div>

            <Link to="/signup">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 left-4 sm:-bottom-8 sm:-left-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#0F7B6C] to-teal-500 rounded-xl flex items-center justify-center shrink-0">
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                      98.5%
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      On-Time Delivery
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
