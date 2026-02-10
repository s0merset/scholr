"use client";
import React, { useState } from 'react';
import { InputField } from './InputField';
import { ToggleSwitch } from './ToggleSwitch';
import { SocialLoginButton } from './SocialLoginButton';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = () => {
    // Handle sign in logic here
    console.log('Sign in clicked', { email, password, rememberMe });
  };

  const handleSocialLogin = (platform: string) => {
    // Handle social login logic here
    console.log(`${platform} login clicked`);
  };

  const handleSignUp = () => {
    // Handle sign up navigation here
    console.log('Sign up clicked');
  };

  return (
      <div className="w-full max-w-[480px]">
        <header className="mb-12">
          <h1 className="text-5xl text-accent font-heading leading-tight text-yellow-600">
            welcome
          </h1>
        </header>

        <form onSubmit={(e) => { e.preventDefault(); handleSignIn(); }}>
          <InputField
            label="Email Address"
            type="email"
            placeholder="e.g. michelle@morph-ui.design"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <ToggleSwitch
            label="Remember me"
            checked={rememberMe}
            onChange={setRememberMe}
          />

          <button
            type="submit"
            className="px-4 py-3.5 mb-8 w-full text-base font-semibold leading-snug text-white rounded-none cursor-pointer bg-slate-700 border-[nonepx]"
          >
            Sign in
          </button>
        </form>

        <div className="mb-6 text-center">
          <p className="text-sm leading-snug text-stone-500">
            or log in using
          </p>
        </div>

        <div className="flex gap-6 justify-center items-center mb-8">
          <SocialLoginButton
            platform="google"
            onClick={() => handleSocialLogin('google')}
          />
          <SocialLoginButton
            platform="facebook"
            onClick={() => handleSocialLogin('facebook')}
          />
          <SocialLoginButton
            platform="other"
            onClick={() => handleSocialLogin('other')}
          />
        </div>

        <footer className="text-center">
          <p className="text-sm leading-snug text-stone-500">
            Don't have an account?
            <button
              type="button"
              className="font-semibold text-black cursor-pointer ml-1"
              onClick={handleSignUp}
            >
              Sign up
            </button>
          </p>
        </footer>
      </div>
  );
};

export default LoginForm;
