module.exports = {
    "ecmaFeatures": {
        "arrowFunctions": true,
        "binaryLiterals": false,
        "blockBindings": true,
        "classes": true,
        "defaultParams": true,
        "destructuring": true,
        "forOf": true,
        "generators": true,
        "modules": false,
        "objectLiteralComputedProperties": true,
        "objectLiteralDuplicateProperties": false,
        "objectLiteralShorthandMethods": true,
        "objectLiteralShorthandProperties": true,
        "octalLiterals": false,
        "regexUFlag": false,
        "regexYFlag": false,
        "restParams": true,
        "spread": true,
        "superInFunctions": true,
        "templateStrings": true,
        "unicodePointEscapes": true,
        "globalReturn": false
    },
    "plugins": [
        "babel"
    ],
    "env": {
        "browser": true,
        "node": true
    },
    "parser": "babel-eslint",
    "extends": "eslint:all",
    "rules": {
        // override default options
        "comma-dangle": ["error", "always"],
        "indent": ["error", 4],
        "no-cond-assign": ["error", "always"],

        // disable now, but enable in the future
        "one-var": "off", // ["error", "never"]

        // disable
        "init-declarations": "off",
        "no-console": "off",
        "no-inline-comments": "off",
        /*Possible Errors */
        "comma-dangle": [1, "always-multiline"],
        "no-cond-assign": [1, "except-parens"],
        "no-console": 0,
        "no-constant-condition": 1,
        "no-control-regex": 1,
        "no-debugger": 1,
        "no-dupe-args": 1,
        "no-dupe-keys": 1,
        "no-duplicate-case": 0,
        "no-empty-character-class": 1,
        "no-empty": 1,
        "no-ex-assign": 1,
        "no-extra-boolean-cast": 1,
        "no-extra-parens": 0,
        "no-extra-semi": 1,
        "no-func-assign": 1,
        "no-inner-declarations": [1, "functions"],
        "no-invalid-regexp": 1,
        "no-irregular-whitespace": 1,
        "no-negated-in-lhs": 1,
        "no-obj-calls": 1,
        "no-regex-spaces": 1,
        "no-reserved-keys": 0,
        "no-sparse-arrays": 1,
        "no-unexpected-multiline": 1,
        "no-unreachable": 1,
        "use-isnan": 1,
        "valid-jsdoc": 1,
        "valid-typeof": 1,
    }
}