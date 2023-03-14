// Should turn off swagger rules for folks not using swagger typings
export = {
    parser: "@typescript-eslint/parser",
    parserOptions: {sourceType: "module"},
    rules: {
        "@unlomtrois2/nestjs-typed/api-property-matches-property-optionality":
            "off",
        "@unlomtrois2/nestjs-typed/api-method-should-specify-api-response":
            "off",
        "@unlomtrois2/nestjs-typed/api-method-should-specify-api-operation":
            "off",
        "@unlomtrois2/nestjs-typed/controllers-should-supply-api-tags": "off",
        "@unlomtrois2/nestjs-typed/api-enum-property-best-practices": "off",
        "@unlomtrois2/nestjs-typed/api-property-returning-array-should-set-array":
            "off",
    },
};
