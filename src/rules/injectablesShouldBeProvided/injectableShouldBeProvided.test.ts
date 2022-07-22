/* eslint-disable unicorn/prevent-abbreviations */

import rule from "./injectableShouldBeProvided";
import {ESLintUtils} from "@typescript-eslint/utils";

import {getFixturesRootDirectory} from "../../testing/fixtureSetup";

const tsRootDirectory = getFixturesRootDirectory();
const ruleTester = new ESLintUtils.RuleTester({
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2015,
        tsconfigRootDir: tsRootDirectory,
        project: "./tsconfig.json",
    },
});

ruleTester.run("injectable-should-be-provided", rule, {
    valid: [
        {
            //no param name provided - can't check anything
            code: `
            import { registerAs} from "@nestjs/config";
            export default registerAs("email", () => ({
                isEmailSyncSendEnabled: process.env.EMAIL_SYNC_SEND_ENABLED,
                emailBcc: process.env.EMAIL_BCC,
                emailPassword: process.env.EMAIL_PASSWORD,
                emailUsername: process.env.EMAIL_USERNAME,
                senderEmailAddress: process.env.EMAIL_SENDER_ADDRESS,
                senderName: process.env.EMAIL_SENDER_NAME,
            }));
            `,
        },
    ],
    invalid: [],
});
