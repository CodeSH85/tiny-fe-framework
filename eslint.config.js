import js from "@eslint/js"
import globals from "globals"
import stylistic from '@stylistic/eslint-plugin'
import tseslint from "typescript-eslint"
import { defineConfig } from "eslint/config"

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: {
      js
    },
    extends: ["js/recommended"],
    rules: {
      "no-duplicate-imports": "error"
    }
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      globals: globals.browser
    }
  },
  tseslint.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      "semi": ['error', 'never'],
      "comma-dangle": ["error", "never"]
    }
  }
])
