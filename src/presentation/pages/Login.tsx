import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, EyeOff, LogIn, Loader2 } from 'lucide-react';
import AuthLayout from '../components/auth/AuthLayout';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Checkbox } from '../../ui/checkbox';
import { useLoginForm } from '../../application/hooks/useAuthForm';

function FieldError({ message }: { message: string | undefined }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.15 }}
          className="text-xs text-red-500 mt-1"
        >
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

export default function Login() {
  const navigate = useNavigate();
  const { form, setField, getError, loading, submit } = useLoginForm();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout
      heading="Power your global trade operations"
      subheading="Join 2,500+ companies managing smarter import-export workflows with AI-driven insights."
    >
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1.5">
          Welcome back
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Sign in to your ScionAxon account
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit(() => navigate('/dashboard'));
        }}
        className="space-y-5"
        noValidate
      >
        {/* Email */}
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 text-sm">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={(e) => setField('email', e.target.value)}
            className={`h-11 rounded-xl border-gray-200 dark:border-gray-700 dark:bg-gray-800/80 focus:border-[#0F7B6C] focus:ring-2 focus:ring-[#0F7B6C]/15 transition-all ${
              getError('email') ? 'border-red-500 focus:border-red-500 focus:ring-red-500/15' : ''
            }`}
          />
          <FieldError message={getError('email')} />
        </div>

        {/* Password */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="text-gray-700 dark:text-gray-300 text-sm">
              Password
            </Label>
            <a
              href="#"
              className="text-xs text-[#0F7B6C] dark:text-teal-400 hover:underline font-medium"
            >
              Forgot password?
            </a>
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => setField('password', e.target.value)}
              className={`h-11 pr-11 rounded-xl border-gray-200 dark:border-gray-700 dark:bg-gray-800/80 focus:border-[#0F7B6C] focus:ring-2 focus:ring-[#0F7B6C]/15 transition-all ${
                getError('password') ? 'border-red-500 focus:border-red-500 focus:ring-red-500/15' : ''
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          <FieldError message={getError('password')} />
        </div>

        {/* Remember me */}
        <div className="flex items-center gap-2.5">
          <Checkbox
            id="rememberMe"
            checked={form.rememberMe}
            onCheckedChange={(checked) => setField('rememberMe', Boolean(checked))}
            className="border-gray-300 dark:border-gray-600 data-[state=checked]:bg-[#0F7B6C] data-[state=checked]:border-[#0F7B6C]"
          />
          <Label
            htmlFor="rememberMe"
            className="text-sm text-gray-600 dark:text-gray-400 font-normal cursor-pointer"
          >
            Remember me for 30 days
          </Label>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full h-11 rounded-xl bg-gradient-to-r from-[#0F7B6C] to-teal-500 hover:shadow-lg hover:shadow-teal-500/25 transition-all text-base font-semibold mt-1"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Signing in…
            </>
          ) : (
            <>
              <LogIn className="w-4 h-4 mr-2" />
              Sign In
            </>
          )}
        </Button>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-gray-700" />
          </div>
          <div className="relative flex justify-center">
            <span className="px-3 bg-gray-50 dark:bg-gray-950 text-xs text-gray-400 dark:text-gray-500">
              or continue with
            </span>
          </div>
        </div>

        {/* Google SSO placeholder */}
        <Button
          type="button"
          variant="outline"
          className="w-full h-11 rounded-xl border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
        >
          <svg className="w-4 h-4 mr-2.5 shrink-0" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Continue with Google
        </Button>
      </form>

      <p className="mt-7 text-center text-sm text-gray-500 dark:text-gray-400">
        Don't have an account?{' '}
        <Link
          to="/signup"
          className="text-[#0F7B6C] dark:text-teal-400 font-semibold hover:underline"
        >
          Create one free
        </Link>
      </p>
    </AuthLayout>
  );
}
