export = {
    parser: "@typescript-eslint/parser",
    parserOptions: {sourceType: "module"},
    rules: {
        "@unlomtrois2/nestjs-typed/provided-injected-should-match-factory-parameters":
            "error",
        "@unlomtrois2/nestjs-typed/injectable-should-be-provided": [
            "error",
            {
                src: ["src/**/*.ts"],
                filterFromPaths: ["node_modules", ".test.", ".spec."],
            },
        ],
        "@unlomtrois2/nestjs-typed/api-property-matches-property-optionality":
            "error",
        "@unlomtrois2/nestjs-typed/api-method-should-specify-api-response":
            "error",
        "@unlomtrois2/nestjs-typed/controllers-should-supply-api-tags": "error",
        "@unlomtrois2/nestjs-typed/api-enum-property-best-practices": "error",
        "@unlomtrois2/nestjs-typed/api-property-returning-array-should-set-array":
            "error",
        "@unlomtrois2/nestjs-typed/should-specify-forbid-unknown-values":
            "error",
        "@unlomtrois2/nestjs-typed/param-decorator-name-matches-route-param":
            "error",
        "@unlomtrois2/nestjs-typed/validated-non-primitive-property-needs-type-decorator":
            "error",
        "@unlomtrois2/nestjs-typed/validate-nested-of-array-should-set-each":
            "error",
        "@unlomtrois2/nestjs-typed/all-properties-are-whitelisted": "error",
        "@unlomtrois2/nestjs-typed/all-properties-have-explicit-defined":
            "error",
        "@unlomtrois2/nestjs-typed/api-methods-should-be-guarded": "off",
        "@unlomtrois2/nestjs-typed/api-method-should-specify-api-operation":
            "off",
    },
};
