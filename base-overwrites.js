module.exports = {
  rules: {
    // *** Best Practices ***

    // // disallow usage of configurable warning terms in comments: e.g. todo
    // 'no-warning-comments': ['off', { terms: ['todo', 'fixme'], location: 'start' }],

    // specify the maximum cyclomatic complexity allowed in a program
    complexity: ['warn', 11],

    // enforces getter/setter pairs in objects
    'accessor-pairs': 'warn',

    // enforce a maximum number of classes per file
    // https://eslint.org/docs/rules/max-classes-per-file
    'max-classes-per-file': ['warn', 1],

    // disallow comparisons to null without a type-checking operator
    'no-eq-null': 'warn',

    // disallow implicit type conversions
    // https://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': [
      'error',
      {
        boolean: true,
        number: true,
        string: true,
        allow: []
      }
    ],

    // disallow var and named functions in global scope
    // https://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'warn',

    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 'warn',

    // disallow magic numbers
    // https://eslint.org/docs/rules/no-magic-numbers
    // 'no-magic-numbers': ['off', {
    //   ignore: [],
    //   ignoreArrayIndexes: true,
    //   enforceConst: true,
    //   detectObjects: false,
    // }],

    // *** Errors ***

    // Disallow await inside of loops
    // https://eslint.org/docs/rules/no-await-in-loop
    // 'no-await-in-loop': 'error',

    // disallow use of console
    // 'no-console': 'warn',

    // disallow unnecessary parentheses
    // https://eslint.org/docs/rules/no-extra-parens
    // 'no-extra-parens': [
    //   'off',
    //   'all',
    //   {
    //     conditionalAssign: true,
    //     nestedBinaryExpressions: false,
    //     returnAssign: false,
    //     ignoreJSX: 'all', // delegate to eslint-plugin-react
    //     enforceForArrowConditionals: false
    //   }
    // ],

    // disallow function or variable declarations in nested blocks
    // 'no-inner-declarations': 'error',

    // Disallow assignments that can lead to race conditions due to usage of await or yield
    // https://eslint.org/docs/rules/require-atomic-updates
    'require-atomic-updates': 'warn',

    // ensure JSDoc comments are valid
    // https://eslint.org/docs/rules/valid-jsdoc
    // 'valid-jsdoc': 'off',

    // *** ES6 ***

    // enforces no braces where they can be omitted
    // https://eslint.org/docs/rules/arrow-body-style
    // TODO: enable requireReturnForObjectLiteral?
    // "arrow-body-style": [
    //   "error",
    //   "as-needed",
    //   {
    //     requireReturnForObjectLiteral: false
    //   }
    // ],

    // enforce the spacing around the * in generator functions
    // https://eslint.org/docs/rules/generator-star-spacing
    // "generator-star-spacing": ["error", { before: false, after: true }],

    // enforce spacing around the * in yield* expressions
    // https://eslint.org/docs/rules/yield-star-spacing
    // "yield-star-spacing": ["error", "after"]

    // disallow importing from the same path more than once
    // https://eslint.org/docs/rules/no-duplicate-imports
    // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    // "no-duplicate-imports": "off",

    // *** Node ***

    // enforce return after a callback
    'callback-return': 'warn',

    // enforces error handling in callbacks (node environment)
    // 'handle-callback-err': 'off',

    // disallow mixing regular variable and require declarations
    'no-mixed-requires': ['error', false],

    // *** Strict Mode ***

    // babel inserts `'use strict';` for us
    // strict: ['error', 'never'],

    // *** Variables ***

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    // 'no-undef': 'error',

    // disallow use of undefined variable
    // https://eslint.org/docs/rules/no-undefined
    'no-undefined': 'error',

    // *** Style ***
    // Mostly handled by Prettier

    // enforces use of function declarations or expressions
    // https://eslint.org/docs/rules/func-style
    'func-style': ['error', 'expression'],

    // specify the maximum depth that blocks can be nested
    'max-depth': ['error', 4],

    // require multiline ternary
    // https://eslint.org/docs/rules/multiline-ternary
    // 'multiline-ternary': ['off', 'never'],

    // disallow use of the continue statement
    // https://eslint.org/docs/rules/no-continue
    'no-continue': 'warn',

    // disallow nested ternary expressions
    // 'no-nested-ternary': 'error',

    // do not require jsdoc
    // https://eslint.org/docs/rules/require-jsdoc
    // 'require-jsdoc': 'off',

    // disallow mixed 'LF' and 'CRLF' as linebreaks
    // https://eslint.org/docs/rules/linebreak-style
    'linebreak-style': ['error', 'unix'],

    // specify whether double or single quotes should be used
    // quotes: ['error', 'single', { avoidEscape: true }],

    // specify whether double or single quotes should be used in JSX attributes
    // https://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': ['error', 'prefer-single'],

    // require or disallow use of semicolons instead of ASI
    semi: ['error', 'never'],

    // disallow confusing multiline expressions (for relying on ASI)
    'no-unexpected-multiline': 'error',

    // disallow unreachable code after return, throw, continue, and break (for ASI)
    'no-unreachable': 'error'
  }
}
