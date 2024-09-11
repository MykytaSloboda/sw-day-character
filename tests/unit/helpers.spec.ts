import { describe, test, expect } from "vitest";
import { getToday, getRandomCharacterID } from "../../src/shared/helpers";
import { ELimits } from "../../src/shared/enums";

describe("helpers", () => {
    describe("getToday", () => {
        test("should return string", () => expect(getToday()).toBeTypeOf("string"));

        test("should return today date in local format", () => {
            const today = new Date().toLocaleDateString();

            expect(getToday()).toEqual(today);
        });
    });


    describe("getRandomCharachterID", () => {
        test("should return number", () => expect(getRandomCharacterID()).toBeTypeOf("number"));

        test("should round result", () => {
            const funcRes = getRandomCharacterID();

            expect(funcRes).toEqual(Math.round(funcRes));
        });

        test("result shouldn't great than limit", () => expect(getRandomCharacterID()).toBeLessThanOrEqual(ELimits.CHARACTER_LIMIT));
    })
});
