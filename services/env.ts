export const env = {
  SUPABASE_URL: process.env.SUPABASE_URL || '',
  SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY || '',
  OPENAI_PROXY_URL: process.env.OPENAI_PROXY_URL || '',
  STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY || '',
  MIXPANEL_TOKEN: process.env.MIXPANEL_TOKEN || '',
  SENTRY_DSN: process.env.SENTRY_DSN || '',
  EXPO_PUBLIC_AI_MODEL: process.env.EXPO_PUBLIC_AI_MODEL || 'gpt-4o',
};
