import type { ReactNode } from "react";
import { motion } from "motion/react";
import { Globe } from "lucide-react";
import { Link } from "react-router";
import { authStats } from "../../../application/data/authData";

const GRID_BG =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4xNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+";

const ORBIT_RADII = [72, 96, 116, 140];

interface Props {
  children: ReactNode;
  heading: string;
  subheading: string;
}

export default function AuthLayout({ children, heading, subheading }: Props) {
  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-950">
      {/* ── Left branding panel (hidden on mobile) ── */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="hidden lg:flex lg:w-1/2 xl:w-5/12 bg-gradient-to-br from-[#1F3A5F] via-[#164e63] to-[#0F7B6C] flex-col justify-between p-12 relative overflow-hidden"
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url('${GRID_BG}')` }}
        />

        {/* Ambient glow orbs */}
        <div className="absolute top-16 right-16 w-72 h-72 bg-teal-400/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-24 left-8 w-56 h-56 bg-blue-400/15 rounded-full blur-3xl animate-pulse delay-700" />

        {/* Logo */}
        <div className="relative z-10">
          <Link to="/" className="inline-flex items-center gap-3 group">
            <div className="w-12 h-12 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/25 group-hover:bg-white/25 transition-colors">
              <img
                src="/src/public/images/Logo1.png"
                alt="logo"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              ScionAxon
            </span>
          </Link>
        </div>

        {/* Central globe animation */}
        <div className="relative z-10 flex items-center justify-center py-8">
          <div className="relative w-72 h-72 flex items-center justify-center">
            {/* Orbit rings */}
            {ORBIT_RADII.map((r, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-white/10"
                style={{ width: r * 2, height: r * 2 }}
              />
            ))}

            {/* Orbiting dots */}
            {ORBIT_RADII.map((r, i) => (
              <motion.div
                key={i}
                className="absolute w-2.5 h-2.5 rounded-full shadow-lg"
                style={{
                  background: i % 2 === 0 ? "#0F7B6C" : "#38bdf8",
                  boxShadow: `0 0 8px ${i % 2 === 0 ? "#0F7B6C" : "#38bdf8"}`,
                  top: "50%",
                  left: "50%",
                  marginTop: -5,
                  marginLeft: -5,
                  transformOrigin: `${-r}px 0`,
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 6 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}

            {/* Globe icon */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="w-28 h-28 border-4 border-white/15 rounded-full flex items-center justify-center relative z-10"
            >
              <img
                src="/src/public/images/Logo1.png"
                alt="logo"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>

        {/* Heading + stats */}
        <div className="relative z-10">
          <h2 className="text-3xl xl:text-4xl font-bold text-white mb-3 leading-snug">
            {heading}
          </h2>
          <p className="text-teal-200/90 text-sm xl:text-base mb-8 leading-relaxed">
            {subheading}
          </p>

          <div className="grid grid-cols-3 gap-3">
            {authStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/15 text-center"
              >
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-teal-200 text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Right form panel ── */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-10 sm:px-10 lg:px-16 overflow-y-auto">
        {/* Mobile logo */}
        <div className="lg:hidden mb-8 self-start">
          <Link to="/" className="inline-flex items-center gap-2.5">
            <div className="w-9 h-9 bg-gradient-to-br from-[#0F7B6C] to-teal-500 rounded-xl flex items-center justify-center">
              <img
                src="/src/public/images/Logo1.png"
                alt="logo"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#0F7B6C] to-[#1F3A5F] bg-clip-text text-transparent">
              ScionAxon
            </span>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="w-full max-w-md"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
