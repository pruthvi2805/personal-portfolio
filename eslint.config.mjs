import js from "@eslint/js";
import globals from "globals";

export default [
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                turnstile: "readonly"
            },
            ecmaVersion: "latest",
            sourceType: "module"
        },
        rules: {
            "indent": ["error", 4],
            "quotes": ["error", "double"],
            "semi": ["error", "always"],
            "no-unused-vars": "warn",
            "no-console": "off"
        }
    }
];
