import globals from "globals";
import pluginJs from "@eslint/js";
import pluginTs from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";

export default [
    {
        ignores: ["node_modules", "dist", ".config/*"],
    },
    {
        files: ["src/**/*.{js,ts,jsx,tsx}"],
        languageOptions: {
            globals: globals.browser,
        },
        plugins: {
            "simple-import-sort": pluginSimpleImportSort,
        },
        rules: {
            "simple-import-sort/exports": "error",
            "simple-import-sort/imports": [
                "error",
                {
                    groups: [
                        ["^.+\\.?(css)$"],
                        ["^react", "^\\w"],
                        ["^@\\w"],
                        ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                        ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                    ],
                },
            ],
        },
    },
    pluginJs.configs.recommended,
    pluginTs.configs.recommended,
    pluginReact.configs.flat.recommended,
];