// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://zlbisalzcnnoaufdvwal.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsYmlzYWx6Y25ub2F1ZmR2d2FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2NzQ2MDMsImV4cCI6MjA1MzI1MDYwM30.Nxn2ny2w8_CK2lX93V1HEfVJe2a6za6ZrjkM-uW4B8s";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);