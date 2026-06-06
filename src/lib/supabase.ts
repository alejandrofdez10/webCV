import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.PUBLIC_SUPABASE_URL ?? '';
const key = import.meta.env.PUBLIC_SUPABASE_ANON_KEY ?? '';

// createClient throws if url is empty — guard against missing env vars at build time
export const supabase = url && key
  ? createClient(url, key)
  : createClient('https://placeholder.supabase.co', 'placeholder');
