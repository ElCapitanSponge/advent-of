import globals from "globals"
import pluginJs from "@eslint/js"
import stylisticJs from "@stylistic/eslint-plugin-js"

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	{
		plugins: {
			"@stylistic/js": stylisticJs
		},
		rules: {
			"@stylistic/js/indent": ["error", "tab", { "SwitchCase": 1 }],
			"no-duplicate-imports": "error",
			"no-use-before-define": "error",
			"arrow-body-style": ["error", "as-needed"],
			"block-scoped-var": "error",
			"camelcase": "error",
			"curly": "error",
			"default-case": "error",
			"default-case-last": "error",
			"default-param-last": "error",
			"no-useless-concat": "error",
			"no-useless-return": "error",
			"strict": "error",
			"@stylistic/js/arrow-spacing": ["error", { before: true, after: true }],
			"@stylistic/js/max-len": ["error", { code: 100, comments: 100 }],
			"@stylistic/js/no-extra-semi": "error",
			"@stylistic/js/no-multi-spaces": "error",
			"@stylistic/js/no-trailing-spaces": "error",
			"@/no-unused-vars": "error",
			"@stylistic/js/quotes": ["error", "double"],
			"@stylistic/js/semi": ["error", "never"]
		}
	}
]
