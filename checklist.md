# AI Review Checklist and Guidelines

## Project-Specific Patterns and Conventions

### ✅ ACCEPTED PATTERNS - Do NOT flag these as issues

#### Allure import pattern

- **Importing allure-js-commons directly**: This is described in the [documentation](https://allurereport.org/docs/playwright/#organize-tests).

### ❌ DO NOT COMMENT ON

1. **Importing allure-js-commons directly**

```js
// This is ACCEPTABLE in our codebase
import * as allure from 'allure-js-commons';
```
