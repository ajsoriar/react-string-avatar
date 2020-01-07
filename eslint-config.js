// 2019-12-22
// $ npm init
// $ npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier
// $ npm install --save-dev eslint-config-airbnb eslint eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks

module.exports = {
    // Extending Configuration Files

    // Example 1:

    // {
    //     "extends": "./node_modules/coding-standard/.eslintrc",
    //     "rules": {
    //         // Override any settings from the "parent" configuration
    //         "lol": 1
    //     }
    // }

    // Example 2:

    // Remove map(require.resolve)

    // As a note, require.resolve allows you to look up and return the location of a module without loading it. (https://bramanti.me/organization-eslint-config/) 2016

    // extends: [ // Configurations may also be provided as an array, with additional files overriding any properties provided in the previous file.
    //     ...
    // ].map(require.resolve), // The map(require.resolve) pattern was needed for linking but we don't use that solution anymore. (https://github.com/schibsted/eslint-config-schibsted/issues/62) (https://github.com/schibsted/eslint-config-schibsted/pull/45) 2017

    extends: [
        // Configurations may also be provided as an array, with additional files overriding any properties provided in the previous file.
        'airbnb',
        'prettier',
        'prettier/react' // The prefix eslint-config- looks like is not needed.
    ],

    globals: {
        // https://eslint.org/docs/1.0.0/user-guide/configuring
        window: true,
        document: true
    },

    plugins: [
        // ESLint supports the use of third-party plugins. Before using the plugin you have to install it using npm.
        'react', // The eslint-plugin- prefix can be omitted from the plugin name.
        'prettier'
    ],
    parserOptions: {
        // By default, ESLint expects ECMAScript 5 syntax.
        // You can override that setting to enable support for other ECMAScript versions as well as JSX by using parser options.
        // More info here: https://eslint.org/docs/user-guide/configuring

        ecmaVersion: 8,
        sourceType: 'module',
        ecmaFeatures: {
            // experimentalObjectRestSpread: true,
            jsx: true // Note that supporting JSX syntax is not the same as supporting React. React applies specific semantics to JSX syntax that ESLint doesn't recognize. We recommend using eslint-plugin-react if you are using React
        }
    },
    rules: {
        indent: 0, //Severity should be one of the following: 0 = off, 1 = warn, 2 = error // https://eslint.org/docs/2.0.0/rules/indent
        curly: ['error', 'all'], // Force the use of { and } everywhere
        'import/prefer-default-export': 0, // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
        'no-alert': 'error',
        'no-debugger': 'error',
        'no-console': [
            'warn',
            {
                allow: ['warn', 'error']
            }
        ],
        'linebreak-style': 0, // https://eslint.org/docs/rules/linebreak-style

        // * Comments *

        'lines-around-comment': [
            'error',
            {
                beforeBlockComment: true
            }
        ],
        'multiline-comment-style': ['error', 'separate-lines'],
        // 'capitalized-comments': [
        //     'error',
        //     'always',
        //     {
        //         ignoreConsecutiveComments: true
        //     }
        // ],

        // * eslint-plugin-react *

        // https://github.com/yannickcr/eslint-plugin-react
        // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules

        'react/jsx-filename-extension': [
            1,
            {
                // If you wanted to allow both '.jsx' and '.js', the configuration would be this.
                extensions: ['.js', '.jsx']
            }
        ],

        // * PRETTIER *

        // https://prettier.io/docs/en/options.html#trailing-commas

        'prettier/prettier': [
            'error',
            {
                tabWidth: 4,

                singleQuote: true, // JSX quotes ignore this option – see jsx-single-quote.

                // - Semicolons -
                semi: true,

                // true - Add a semicolon at the end of every statement.
                // false - Only add semicolons at the beginning of lines that may introduce ASI failures.

                // https://prettier.io/docs/en/rationale.html#semicolons
                // https://standardjs.com/rules.html#semicolons

                // - Trailing Commas -

                // JavaScript has allowed trailing commas in array literals since the beginning, and later added them to object literals (ECMAScript 5) and most recently (ECMAScript 2017) to function parameters.
                // JSON, however, disallows trailing commas.
                trailingComma: 'none',

                // "none" - No trailing commas.
                // "es5" - Trailing commas where valid in ES5 (objects, arrays, etc.)
                // "all" - Trailing commas wherever possible (including function arguments). This requires node 8 or a transform.

                jsxBracketSameLine: false
            }
        ]
    },
    env: {
        browser: true,
        node: true
    }
};
