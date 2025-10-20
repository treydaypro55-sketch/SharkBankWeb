// Your Supabase credentials
const SUPABASE_URL = "https://mxnrodlbfhxlafxszioh.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14bnJvZGxiZmh4bGFmeHN6aW9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA4ODM5NzMsImV4cCI6MjA3NjQ1OTk3M30.5mWO8WRcxu0e1gTsmGLPlYlw_Eg0-Qs1aqoEo1NxNnU";

// Initialize Supabase client
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
