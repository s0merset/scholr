import React from 'react';

interface SocialLoginButtonProps {
  platform: 'google' | 'facebook' | 'other';
  onClick?: () => void;
}

export const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  platform,
  onClick
}) => {
  const getSvgContent = () => {
    switch (platform) {
      case 'google':
        return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FFC107"></path><path d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" fill="#FF3D00"></path><path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#4CAF50"></path><path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#1976D2"></path></svg>`;
      case 'facebook':
        return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="20" fill="#1877F2"></circle><path d="M29.5 25.5l.75-4.875h-4.688v-3.164c0-1.334.654-2.633 2.748-2.633h2.127V10.14s-1.93-.329-3.774-.329c-3.852 0-6.371 2.334-6.371 6.558v3.714h-4.28V25.5h4.28V38h5.27V25.5h3.938z" fill="#fff"></path></svg>`;
      case 'other':
        return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.5 24c0-8.008-6.492-14.5-14.5-14.5S9.5 15.992 9.5 24c0 7.156 5.244 13.088 12.094 14.227V28.344h-3.64V24h3.64v-3.313c0-3.594 2.14-5.578 5.416-5.578 1.57 0 3.21.28 3.21.28v3.531h-1.808c-1.78 0-2.334 1.105-2.334 2.238V24h3.969l-.635 4.344h-3.334v9.883C33.256 37.088 38.5 31.156 38.5 24z" fill="#000"></path></svg>`;
      default:
        return '';
    }
  };

  return (
    <button
      className="flex justify-center items-center w-12 h-12 cursor-pointer"
      onClick={onClick}
      type="button"
    >
      <div
        dangerouslySetInnerHTML={{
          __html: getSvgContent()
        }}
      />
    </button>
  );
};

