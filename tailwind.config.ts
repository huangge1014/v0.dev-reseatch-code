import type { Config } from "tailwindcss";
// @ts-ignore
import designSystemConf from "@saharaai/ui/tailwind.config";
import { merge } from "lodash";

const config: Config = merge(designSystemConf, {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [],
});

export default config;
