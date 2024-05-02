import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rmxcdgnzrzbaiktddmbx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJteGNkZ256cnpiYWlrdGRkbWJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2OTc1MTIsImV4cCI6MjAxOTI3MzUxMn0.vNZrGQTZLPDZ-C6IL88HguGbvZklj6PxuzAGJktfVWI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
