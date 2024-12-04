import { describe, expect, test } from "vitest";
import { convertJaSyllabaryColumn, convertJaSyllabaryColumnPartOfCharacters } from ".";

describe(convertJaSyllabaryColumn, () => {
  test("指定した段の文字に変換する", () => {
    expect(convertJaSyllabaryColumn({ character: "か", column: "い" })).toBe("き");
  });
});

describe(convertJaSyllabaryColumnPartOfCharacters, () => {
  test("指定した段の文字に変換する", () => {
    expect(convertJaSyllabaryColumnPartOfCharacters({ characters: "こんにちは、良い天気ですね。", column: "い" })).toBe(
      "きんにちひ、良い天気ぢしに。",
    );
  });
});
