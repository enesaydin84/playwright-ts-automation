import js from "@eslint/js";
import tseslint from "typescript-eslint";
import playwright from "eslint-plugin-playwright";
import globals from "globals";

export default tseslint.config(
  // 1. Globally Ignore these folders
  { ignores: ["node_modules", "dist", "playwright-report", "test-results"] },

  // 2. Base JavaScript Rules
  js.configs.recommended,

  // 3. Base TypeScript Rules
  ...tseslint.configs.recommended,

  // 4. Configuration for Source Code (src folder)
  {
    files: ["src/**/*.{ts,js}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      "no-console": "warn",
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
    }
  },

  // 5. Configuration for Test Files (tests folder)
  {
    files: ["tests/**/*.{ts,js}"],
    ...playwright.configs["flat/recommended"],
    rules: {
      ...playwright.configs["flat/recommended"].rules,
      "playwright/no-skipped-test": "warn",
      "playwright/no-focused-test": "error", // Fails build if .only is left
      "no-console": "off" // Console logs allowed in tests? (Set to 'warn' if you prefer strictness)
    },
  }
);