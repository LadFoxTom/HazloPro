// lib/resend.js
const { Resend } = require('resend');

if (!process.env.RESEND_API_KEY) {
  console.warn('⚠️  RESEND_API_KEY not found in environment variables');
  console.warn('⚠️  Email functionality will not work without a valid API key');
}

// Initialize Resend with API key (can be undefined if not set)
const resend = new Resend(process.env.RESEND_API_KEY || undefined);

module.exports = resend;
