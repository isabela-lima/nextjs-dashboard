import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // * NOTE: This has a warning:
  // ! CanaryOnlyError: The experimental feature "experimental.ppr" can only be enabled when using the latest canary version of Next.js.
  // experimental: {
  //   ppr: "incremental",
  // },
};

export default nextConfig;
