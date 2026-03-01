import { useState } from 'react';
import type { LoginFormData, SignupFormData, AuthFormError } from '../../domain/types/auth';

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function useLoginForm() {
  const [form, setForm] = useState<LoginFormData>({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [errors, setErrors] = useState<AuthFormError[]>([]);
  const [loading, setLoading] = useState(false);

  const getError = (field: string) => errors.find((e) => e.field === field)?.message;

  const setField = <K extends keyof LoginFormData>(key: K, value: LoginFormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => prev.filter((e) => e.field !== key));
  };

  const validate = (): boolean => {
    const errs: AuthFormError[] = [];
    if (!form.email) errs.push({ field: 'email', message: 'Email is required' });
    else if (!validateEmail(form.email)) errs.push({ field: 'email', message: 'Enter a valid email address' });
    if (!form.password) errs.push({ field: 'password', message: 'Password is required' });
    else if (form.password.length < 6) errs.push({ field: 'password', message: 'Password must be at least 6 characters' });
    setErrors(errs);
    return errs.length === 0;
  };

  const submit = (onSuccess: () => void) => {
    if (!validate()) return;
    setLoading(true);
    // Simulated async auth — replace with real API call
    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 1200);
  };

  return { form, setField, getError, loading, submit };
}

export function useSignupForm() {
  const [form, setForm] = useState<SignupFormData>({
    fullName: '',
    email: '',
    company: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState<AuthFormError[]>([]);
  const [loading, setLoading] = useState(false);

  const getError = (field: string) => errors.find((e) => e.field === field)?.message;

  const setField = <K extends keyof SignupFormData>(key: K, value: SignupFormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => prev.filter((e) => e.field !== key));
  };

  const validate = (): boolean => {
    const errs: AuthFormError[] = [];
    if (!form.fullName.trim()) errs.push({ field: 'fullName', message: 'Full name is required' });
    if (!form.email) errs.push({ field: 'email', message: 'Email is required' });
    else if (!validateEmail(form.email)) errs.push({ field: 'email', message: 'Enter a valid email address' });
    if (!form.company.trim()) errs.push({ field: 'company', message: 'Company name is required' });
    if (!form.password) errs.push({ field: 'password', message: 'Password is required' });
    else if (form.password.length < 8) errs.push({ field: 'password', message: 'Password must be at least 8 characters' });
    if (!form.confirmPassword) errs.push({ field: 'confirmPassword', message: 'Please confirm your password' });
    else if (form.password !== form.confirmPassword) errs.push({ field: 'confirmPassword', message: 'Passwords do not match' });
    if (!form.agreeToTerms) errs.push({ field: 'agreeToTerms', message: 'You must agree to the Terms of Service' });
    setErrors(errs);
    return errs.length === 0;
  };

  const submit = (onSuccess: () => void) => {
    if (!validate()) return;
    setLoading(true);
    // Simulated async registration — replace with real API call
    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 1500);
  };

  return { form, setField, getError, loading, submit };
}
