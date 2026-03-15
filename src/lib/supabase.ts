import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read?: boolean;
  created_at?: string;
}

export interface Project {
  id?: string;
  title: string;
  description: string;
  detailed_description?: string;
  tech_stack: string[];
  image_url?: string;
  live_demo?: string;
  github_url?: string;
  category: string;
  featured: boolean;
  order_index: number;
  created_at?: string;
}
