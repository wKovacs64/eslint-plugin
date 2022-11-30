---
'eslint-plugin-wkovacs64': major
---

enable `@typescript-eslint/recommended-requiring-type-checking` rules

The TypeScript config now includes rules that require type-checking. For this to work, you must set the `parserOptions.project` property in your ESLint config. You may also need to take additional steps if combined with Cypress or Jest (see the README).
