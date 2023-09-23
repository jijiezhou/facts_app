/*
 * @Descripttion: ZJJ Code
 * @version: 1.0.0
 * @Author: ZJJ
 * @Date: 2023-09-22 20:31:53
 * @LastEditors: ZJJ
 * @LastEditTime: 2023-09-22 20:33:05
 */

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iinkutnyzekitylfaizd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlpbmt1dG55emVraXR5bGZhaXpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUxODgwNTYsImV4cCI6MjAxMDc2NDA1Nn0._tY7IEO2mL9RUyokGRZDwa6DN8mZBZ-CWssuXmz9Zf8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
