/* eslint-disable jest/valid-expect */
import { expect } from "chai";

import { extractContentVariables } from "../utils";

describe("template show utils", () => {
  describe("extractContentVariables", () => {
    it("extracts email template variables from a given string", () => {
      let emailTemplateString = `<html> <head> <style type="text/css"> body { font-family: Tahoma, sans-serif; background-color: #EEE; color: #333; } h1 { color: #02A1FE; } </style> </head> <body> <h1>Welcome to Carta! {{ user.name }}</h1> <p> Please visit <a href="{{ confirmation.url }}">this link</a> to confirm your account. </p> </body> </html>`
      const result = extractContentVariables(emailTemplateString);

      expect(result).to.deep.equal(["user.name", "confirmation.url"])
    });

    it("handles multiple variables", () => {
      let emailTemplateString = `Your exercise with {{ exercise.grant.issuer.name }} on grant {{ exercise.grant.label }} has been approved. Visit {{ exercise.url }} to see next steps.`;
      const result = extractContentVariables(emailTemplateString);

      expect(result).to.deep.equal(["exercise.grant.issuer.name", "exercise.grant.label", "exercise.url"])
    });

    it("is idempotent", () => {
      // TODO
    });
  });
});