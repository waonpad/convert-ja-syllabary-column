const CONVERTIBLE_JA_HIRAGANA_SYLLABARY = [
  /**
   * 清音
   */
  ["あ", "い", "う", "え", "お"],
  ["か", "き", "く", "け", "こ"],
  ["さ", "し", "す", "せ", "そ"],
  ["た", "ち", "つ", "て", "と"],
  ["な", "に", "ぬ", "ね", "の"],
  ["は", "ひ", "ふ", "へ", "ほ"],
  ["ま", "み", "む", "め", "も"],
  ["や", "い", "ゆ", "え", "よ"],
  ["ら", "り", "る", "れ", "ろ"],
  ["わ", "ゐ", "う", "ゑ", "を"],
  // ん は変換対象外
  /**
   * 濁音
   */
  ["あ゛", "い゛", "ゔ", "え゛", "お゛"], // 変換先が無くならないよう濁点を付与
  ["が", "ぎ", "ぐ", "げ", "ご"],
  ["ざ", "じ", "ず", "ぜ", "ぞ"],
  ["だ", "ぢ", "づ", "で", "ど"],
  ["ば", "び", "ぶ", "べ", "ぼ"],
  /**
   * 半濁音
   */
  ["ぱ", "ぴ", "ぷ", "ぺ", "ぽ"],
  /**
   * 小文字
   */
  ["ぁ", "ぃ", "ぅ", "ぇ", "ぉ"],
  // っ は変換対象外
  ["ゃ", "ぃ", "ゅ", "ぇ", "ょ"],
] as const satisfies string[][];

const CONVERTIBLE_JA_KATAKANA_SYLLABARY = [
  /**
   * 清音
   */
  ["ア", "イ", "ウ", "エ", "オ"],
  ["カ", "キ", "ク", "ケ", "コ"],
  ["サ", "シ", "ス", "セ", "ソ"],
  ["タ", "チ", "ツ", "テ", "ト"],
  ["ナ", "ニ", "ヌ", "ネ", "ノ"],
  ["ハ", "ヒ", "フ", "ヘ", "ホ"],
  ["マ", "ミ", "ム", "メ", "モ"],
  ["ヤ", "イ", "ユ", "エ", "ヨ"],
  ["ラ", "リ", "ル", "レ", "ロ"],
  ["ワ", "ヰ", "ウ", "ヱ", "ヲ"],
  // ン は変換対象外
  /**
   * 濁音
   */
  ["ア゛", "イ゛", "ヴ", "エ゛", "オ゛"], // 変換先が無くならないよう濁点を付与
  ["ガ", "ギ", "グ", "ゲ", "ゴ"],
  ["ザ", "ジ", "ズ", "ゼ", "ゾ"],
  ["ダ", "ヂ", "ヅ", "デ", "ド"],
  ["バ", "ビ", "ブ", "ベ", "ボ"],
  /**
   * 半濁音
   */
  ["パ", "ピ", "プ", "ペ", "ポ"],
  /**
   * 小文字
   */
  ["ァ", "ィ", "ゥ", "ェ", "ォ"],
  // ヵ, ヶ は変換対象外
  // ッ は変換対象外
  ["ャ", "ィ", "ュ", "ェ", "ョ"],
] as const satisfies string[][];

const CONVERTIBLE_JA_HALF_KATAKANA_SYLLABARY = [
  /**
   * 清音
   */
  ["ｱ", "ｲ", "ｳ", "ｴ", "ｵ"],
  ["ｶ", "ｷ", "ｸ", "ｹ", "ｺ"],
  ["ｻ", "ｼ", "ｽ", "ｾ", "ｿ"],
  ["ﾀ", "ﾁ", "ﾂ", "ﾃ", "ﾄ"],
  ["ﾅ", "ﾆ", "ﾇ", "ﾈ", "ﾉ"],
  ["ﾊ", "ﾋ", "ﾌ", "ﾍ", "ﾎ"],
  ["ﾏ", "ﾐ", "ﾑ", "ﾒ", "ﾓ"],
  ["ﾔ", "ｲ", "ﾕ", "ｴ", "ﾖ"],
  ["ﾗ", "ﾘ", "ﾙ", "ﾚ", "ﾛ"],
  ["ﾜ", "ヰ", "ｳ", "ヱ", "ｦ"],
  // ン は変換対象外
  /**
   * 濁音
   */
  ["ｱﾞ", "ｲﾞ", "ｳﾞ", "ｴﾞ", "ｵﾞ"],
  ["ｶﾞ", "ｷﾞ", "ｸﾞ", "ｹﾞ", "ｺﾞ"],
  ["ｻﾞ", "ｼﾞ", "ｽﾞ", "ｾﾞ", "ｿﾞ"],
  ["ﾀﾞ", "ﾁﾞ", "ﾂﾞ", "ﾃﾞ", "ﾄﾞ"],
  ["ﾊﾞ", "ﾋﾞ", "ﾌﾞ", "ﾍﾞ", "ﾎﾞ"],
  /**
   * 半濁音
   */
  ["ﾊﾟ", "ﾋﾟ", "ﾌﾟ", "ﾍﾟ", "ﾎﾟ"],
  /**
   * 小文字
   */
  ["ｧ", "ｨ", "ｩ", "ｪ", "ｫ"],
  // ヵ, ヶ は変換対象外
  // ッ
  ["ｬ", "ｨ", "ｭ", "ｪ", "ｮ"],
] as const satisfies string[][];

export const CONVERTIBLE_JA_SYLLABARY = [
  ...CONVERTIBLE_JA_HIRAGANA_SYLLABARY,
  ...CONVERTIBLE_JA_KATAKANA_SYLLABARY,
  ...CONVERTIBLE_JA_HALF_KATAKANA_SYLLABARY,
] as const satisfies string[][];

export type ConvertibleJaCharacter = (typeof CONVERTIBLE_JA_SYLLABARY)[number][number];

/**
 * 変換可能な日本語の文字かどうかを判定する正規表現
 *
 * @example
 * convertibleJaStyllabaryRegexp.test("あ"); // => true
 * convertibleJaStyllabaryRegexp.test("a"); // => false
 * convertibleJaStyllabaryRegexp.test("あ゛"); // => true
 * convertibleJaStyllabaryRegexp.test("あい"); // => false
 * convertibleJaStyllabaryRegexp.test("゛"); // => false
 */
export const convertibleJaStyllabaryRegexp = new RegExp(`^(${CONVERTIBLE_JA_SYLLABARY.flat().join("|")})$`);

export const isConvertibleJaCharacter = (character: string): character is ConvertibleJaCharacter =>
  convertibleJaStyllabaryRegexp.test(character);
