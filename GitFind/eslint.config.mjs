import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import hooksPlugin from "eslint-plugin-react-hooks";

export default defineConfig([
  js.configs.recommended,

  { 
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"], 
    plugins: { 
      react: pluginReact, 
      "react-hooks": hooksPlugin,
      prettier: prettierPlugin,  
    }, 
     
    languageOptions: { 
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // React specific rules
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  eslintConfigPrettier,
]);
