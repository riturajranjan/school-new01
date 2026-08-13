// Next.js 16 ships a native ESLint flat config. Spread it directly
// (no FlatCompat shim — that triggers a circular-JSON error with the
// bundled plugin objects).
import next from "eslint-config-next";

const eslintConfig = [
  ...next,
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
