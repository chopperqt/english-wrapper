import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
/* @ts-ignore */
const supabase = createClient(supabaseUrl, supabaseKey);

export const api = createApi({
  baseQuery: fetchBaseQuery(),
  endpoints: () => ({}),
});

export default supabase;
