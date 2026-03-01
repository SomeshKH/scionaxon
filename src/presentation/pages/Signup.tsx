import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, EyeOff, UserPlus, Loader2, CheckCircle2 } from 'lucide-react';
import AuthLayout from '../components/auth/AuthLayout';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Checkbox } from '../../ui/checkbox';
import { useSignupForm } from '../../application/hooks/useAuthForm';

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

function PasswordStrength({ password }: { password: string }) {
  if (!password) return null;

  const checks = [
    password.length >= 8,
    /[A-Z]/.test(password),
    /[0-9]/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ];
  const strength = checks.filter(Boolean).length;
  const meta = [
    { label: 'Weak', color: 'bg-error' },
    { label: 'Fair', color: 'bg-warning' },
    { label: 'Good', color: 'bg-info' },
    { label: 'Strong', color: 'bg-success' },
  ];
  const { label, color } = meta[strength - 1] ?? { label: '', color: '' };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-2 space-y-1.5"
    >
      <div className="flex gap-1">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-all duration-300 ${
              i <= strength ? color : 'bg-muted'
            }`}
          />
        ))}
      </div>
      <p className="text-xs text-foreground-muted">
        Strength:{' '}
        <span className="font-semibold text-foreground-secondary">{label}</span>
      </p>
    </motion.div>
  );
}

export default function Signup() {
  const navigate = useNavigate();
  const { form, setField, getError, loading, submit } = useSignupForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const passwordsMatch =
    form.confirmPassword.length > 0 && form.password === form.confirmPassword;

  return (
    <AuthLayout
      heading="Start trading smarter today"
      subheading="Set up your account in minutes and get access to AI-powered trade analytics, real-time tracking, and 145+ country coverage."
    >
      {/* Heading */}
      <div className="mb-7">
        <h1 className="text-3xl font-bold text-foreground mb-1.5">
          Create your account
        </h1>
        <p className="text-foreground-secondary text-sm">
          Free forever. No credit card required.
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit(() => navigate('/dashboard'));
        }}
        className="space-y-4"
        noValidate
      >
        {/* Full Name + Company — 2-col grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <Label htmlFor="fullName" className="text-foreground-secondary text-sm">
              Full Name
            </Label>
            <Input
              id="fullName"
              placeholder="John Doe"
              value={form.fullName}
              onChange={(e) => setField('fullName', e.target.value)}
              className={`h-11 rounded-xl border-border bg-input-background focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all ${
                getError('fullName') ? 'border-error focus:border-error focus:ring-error/15' : ''
              }`}
            />
            <FieldError message={getError('fullName')} />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="company" className="text-foreground-secondary text-sm">
              Company
            </Label>
            <Input
              id="company"
              placeholder="Acme Trade Ltd"
              value={form.company}
              onChange={(e) => setField('company', e.target.value)}
              className={`h-11 rounded-xl border-border bg-input-background focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all ${
                getError('company') ? 'border-error focus:border-error focus:ring-error/15' : ''
              }`}
            />
            <FieldError message={getError('company')} />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-foreground-secondary text-sm">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={(e) => setField('email', e.target.value)}
            className={`h-11 rounded-xl border-border bg-input-background focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all ${
              getError('email') ? 'border-error focus:border-error focus:ring-error/15' : ''
            }`}
          />
          <FieldError message={getError('email')} />
        </div>

        {/* Password */}
        <div className="space-y-1.5">
          <Label htmlFor="password" className="text-foreground-secondary text-sm">
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Min. 8 characters"
              value={form.password}
              onChange={(e) => setField('password', e.target.value)}
              className={`h-11 pr-11 rounded-xl border-border bg-input-background focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all ${
                getError('password') ? 'border-error focus:border-error focus:ring-error/15' : ''
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground-muted hover:text-foreground-secondary transition-colors"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          <PasswordStrength password={form.password} />
          <FieldError message={getError('password')} />
        </div>

        {/* Confirm Password */}
        <div className="space-y-1.5">
          <Label htmlFor="confirmPassword" className="text-foreground-secondary text-sm">
            Confirm Password
          </Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              type={showConfirm ? 'text' : 'password'}
              placeholder="Repeat your password"
              value={form.confirmPassword}
              onChange={(e) => setField('confirmPassword', e.target.value)}
              className={`h-11 pr-16 rounded-xl border-border bg-input-background focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all ${
                getError('confirmPassword')
                  ? 'border-error focus:border-error focus:ring-error/15'
                  : passwordsMatch
                  ? 'border-primary focus:border-primary'
                  : ''
              }`}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
              <AnimatePresence>
                {passwordsMatch && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                type="button"
                onClick={() => setShowConfirm((v) => !v)}
                className="text-foreground-muted hover:text-foreground-secondary transition-colors"
                aria-label={showConfirm ? 'Hide password' : 'Show password'}
              >
                {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <FieldError message={getError('confirmPassword')} />
        </div>

        {/* Terms */}
        <div className="space-y-1">
          <div className="flex items-start gap-2.5">
            <Checkbox
              id="agreeToTerms"
              checked={form.agreeToTerms}
              onCheckedChange={(checked) => setField('agreeToTerms', Boolean(checked))}
              className="mt-0.5 border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <Label
              htmlFor="agreeToTerms"
              className="text-sm text-foreground-secondary font-normal cursor-pointer leading-relaxed"
            >
              I agree to the{' '}
              <a href="#" className="text-primary hover:underline font-medium">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-primary hover:underline font-medium">
                Privacy Policy
              </a>
            </Label>
          </div>
          <FieldError message={getError('agreeToTerms')} />
        </div>

        {/* Submit */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full h-11 rounded-xl bg-primary hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25 transition-all text-base font-semibold mt-1"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Creating account…
            </>
          ) : (
            <>
              <UserPlus className="w-4 h-4 mr-2" />
              Create Account
            </>
          )}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-foreground-secondary">
        Already have an account?{' '}
        <Link
          to="/login"
          className="text-primary font-semibold hover:underline"
        >
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
}
