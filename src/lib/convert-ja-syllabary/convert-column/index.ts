import { CONVERTIBLE_JA_SYLLABARY, type ConvertibleJaCharacter, isConvertibleJaCharacter } from "../syllabary";
import { JA_SYLLABARY_COLUMN_MAP, type JaSyllabaryColumn } from "../syllabary/column";

/**
 * 日本語の文字をその文字が属する行内の指定した段の文字に変換する
 *
 * @param param0.character 変換対象の文字
 * @param param0.column 変換後の段
 * @returns 変換後の文字
 *
 * @example
 * convertJaSyllabaryColumn({ character: "か", column: "い" }); // => "き"
 */
export const convertJaSyllabaryColumn = ({
  character,
  column,
}: {
  character: ConvertibleJaCharacter;
  column: JaSyllabaryColumn;
}): string => {
  const rowIndex = CONVERTIBLE_JA_SYLLABARY.findIndex((chars) => chars.includes(character as never));
  const columnIndex = JA_SYLLABARY_COLUMN_MAP[column];

  return CONVERTIBLE_JA_SYLLABARY[rowIndex][columnIndex];
};

/**
 * 文字列中の日本語の文字をその文字が属する行内の指定した段の文字に変換する
 *
 * @param param0.characters 変換対象の文字列
 * @param param0.column 変換後の段
 * @returns 変換後の文字列
 *
 * @example
 * convertJaSyllabaryColumnPartOfCharacters({ characters: "こんにちは、良い天気ですね。", column: "い" }); // => "きんにちひ、良い天気ぢしに。"
 */
export const convertJaSyllabaryColumnPartOfCharacters = ({
  characters,
  column,
}: {
  characters: string;
  column: JaSyllabaryColumn;
}): string => {
  return characters
    .split("")
    .map((character) => {
      if (isConvertibleJaCharacter(character)) {
        return convertJaSyllabaryColumn({ character, column });
      }

      return character;
    })
    .join("");
};
