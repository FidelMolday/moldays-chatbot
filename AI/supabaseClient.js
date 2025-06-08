import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qrhiuoduxpcapxzsmvey.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFyaGl1b2R1eHBjYXB4enNtdmV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzODgzMjIsImV4cCI6MjA2NDk2NDMyMn0.DJ2Wl-Qkiq1oX2twonlcb3HnOxh-Y0djmNXcgOgwwR4';

export const supabase = createClient(supabaseUrl, supabaseKey);
