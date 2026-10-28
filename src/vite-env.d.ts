/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Optional: when both are set, the contact form stores messages in Supabase
  // (see supabase/migrations). Without them it falls back to a pre-filled email.
  readonly VITE_SUPABASE_URL?: string;
  readonly VITE_SUPABASE_ANON_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
