module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    env: {
        node: true,
        es6: true,
    },
    plugins: ['@typescrip-eslint', 'security'],
    extends: [
        'eslint:recommended',
        'plugin@typescript-eslint/eslint-recommended',
        'plugin@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint',
        'plugin:security/recommended'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    rules: {
        indent: ['error', 'tab'],
        quotes: ['error', 'double'],
        semi: ['error', 'always'],
        '@no-unused-vars': ['off'],
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explict-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
    },
}