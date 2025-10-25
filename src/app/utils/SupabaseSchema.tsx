
import {createClient} from '@supabase/supabase-js'

const Supabase_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const Supabase_API_KEY = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;


export const supabase = createClient(Supabase_URL as string,Supabase_API_KEY as string);


