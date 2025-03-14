import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zxmboasegdqjbncpugrt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4bWJvYXNlZ2RxamJuY3B1Z3J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4OTgwNzUsImV4cCI6MjA1NzQ3NDA3NX0.nf2m2dPs5MKv1JOtSeT6q27HPojYu5ZV8xXRIK2xW7o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
