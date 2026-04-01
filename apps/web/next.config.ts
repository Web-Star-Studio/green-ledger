import { loadEnvConfig } from "@next/env";
import type { NextConfig } from "next";
import path from "node:path";

loadEnvConfig(path.join(process.cwd(), "../.."));

const nextConfig: NextConfig = {};

export default nextConfig;
