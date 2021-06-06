import {AST_NODE_TYPES, TSESTree} from "@typescript-eslint/experimental-utils";
import {RuleContext} from "@typescript-eslint/experimental-utils/dist/ts-eslint";
import {parse} from "@typescript-eslint/parser";

export const typedTokenHelpers = {
    nodeHasDecoratorsNamed(
        n:
            | TSESTree.ClassDeclaration
            | TSESTree.ClassProperty
            | TSESTree.MethodDefinition,
        decoratorNames: string[]
    ): boolean {
        const moduleDecorator = n.decorators?.find((d) =>
            decoratorNames.includes(
                (
                    (d.expression as TSESTree.CallExpression)
                        .callee as TSESTree.Identifier
                ).name
            )
        );

        return moduleDecorator !== undefined;
    },
    parseStringToAst(
        code: string,
        path: string,
        context: Readonly<RuleContext<never, never[]>>
    ): TSESTree.Program {
        return parse(code, {
            filePath: path,
            range: true,
            tokens: true,
            loc: true,
            ...context.parserOptions,
        });
    },
    isOptionalPropertyValue(node: TSESTree.ClassProperty): boolean {
        const isUndefinedType =
            (
                node.typeAnnotation?.typeAnnotation as TSESTree.TSUnionType
            )?.types?.find(
                (t) => t.type === AST_NODE_TYPES.TSUndefinedKeyword
            ) !== undefined;

        const isOptionalPropertyValue =
            node.optional || isUndefinedType || false;
        return isOptionalPropertyValue;
    },
};
