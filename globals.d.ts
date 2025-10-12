import React from 'react';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      MONGODB_URI: string;
      RESEND_API_KEY: string;
    }
  }
}

// Ensure this file is treated as a module
export {};