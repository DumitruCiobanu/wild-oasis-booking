import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://deyjoeuxbkrdomyrabmw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRleWpvZXV4YmtyZG9teXJhYm13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY2MTY2NDgsImV4cCI6MjAyMjE5MjY0OH0.LmixwCe-CGaASRT3i5kWFZOE_yAf7NRWXxKxTTsmU7c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
