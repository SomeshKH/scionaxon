import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Globe, Sun, Moon, Monitor, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router";
import { useTheme } from "../../../application/context/ThemeContext";
import { Button } from "../../../ui/button";
import { useScrolled } from "../../../application/hooks/useScrolled";

const THEME_OPTIONS = [
  { value: "light" as const, label: "Light", icon: Sun },
  { value: "dark" as const, label: "Dark", icon: Moon },
  { value: "system" as const, label: "System", icon: Monitor },
];

export default function Navbar() {
  const scrolled = useScrolled(50);
  const { theme, setTheme } = useTheme();
  const [themeOpen, setThemeOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as Node;
      const inDesktop = desktopDropdownRef.current?.contains(target);
      const inMobile = mobileDropdownRef.current?.contains(target);
      if (!inDesktop && !inMobile) setThemeOpen(false);
    }
    if (themeOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [themeOpen]);

  const current =
    THEME_OPTIONS.find((o) => o.value === theme) ?? THEME_OPTIONS[2];
  const CurrentIcon = current.icon;

  const ThemeDropdownMenu = () => (
    <AnimatePresence>
      {themeOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.95 }}
          transition={{ duration: 0.15 }}
          className="absolute right-0 mt-2 w-36 bg-card rounded-xl shadow-xl border border-border overflow-hidden z-50"
        >
          {THEME_OPTIONS.map(({ value, label, icon: Icon }) => (
            <button
              key={value}
              onClick={() => {
                setTheme(value);
                setThemeOpen(false);
              }}
              className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors ${
                theme === value
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-foreground-secondary hover:bg-muted"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-lg shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-hover rounded-xl flex items-center justify-center shrink-0">
              <img
               src="/images/Logo1.png"
                alt="logo"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-sidebar bg-clip-text text-transparent">
              ScionAxon
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a
              href="#services"
              className="text-foreground-secondary hover:text-primary transition-colors text-sm lg:text-base"
            >
              Services
            </a>
            <a
              href="#features"
              className="text-foreground-secondary hover:text-primary transition-colors text-sm lg:text-base"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-foreground-secondary hover:text-primary transition-colors text-sm lg:text-base"
            >
              Testimonials
            </a>

            {/* Theme Dropdown */}
            <div className="relative" ref={desktopDropdownRef}>
              <button
                onClick={() => setThemeOpen((prev) => !prev)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border bg-surface/80 text-foreground-secondary hover:bg-muted transition-all text-sm"
              >
                <CurrentIcon className="w-4 h-4" />
                <span className="hidden lg:inline">{current.label}</span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform ${themeOpen ? "rotate-180" : ""}`}
                />
              </button>
              <ThemeDropdownMenu />
            </div>

            <Link to="/login">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm"
              >
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-primary to-primary-hover hover:shadow-lg hover:shadow-primary/50 transition-all text-sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile: Theme toggle icon + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <div className="relative" ref={mobileDropdownRef}>
              <button
                onClick={() => setThemeOpen((prev) => !prev)}
                className="p-2 rounded-lg border border-border bg-surface/80 text-foreground-secondary"
                aria-label="Toggle theme"
              >
                <CurrentIcon className="w-4 h-4" />
              </button>
              <ThemeDropdownMenu />
            </div>

            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="p-2 rounded-lg text-foreground-secondary hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-1 pt-4 pb-2 border-t border-border mt-4">
                <a
                  href="#services"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-foreground-secondary hover:text-primary hover:bg-muted transition-colors"
                >
                  Services
                </a>
                <a
                  href="#features"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-foreground-secondary hover:text-primary hover:bg-muted transition-colors"
                >
                  Features
                </a>
                <a
                  href="#testimonials"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-foreground-secondary hover:text-primary hover:bg-muted transition-colors"
                >
                  Testimonials
                </a>
                <div className="flex gap-3 pt-3 mt-1 border-t border-border">
                  <Link
                    to="/login"
                    className="flex-1"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link
                    to="/signup"
                    className="flex-1"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Button className="w-full bg-gradient-to-r from-primary to-primary-hover">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
