export const JA_SYLLABARY_COLUMN_MAP = {
  あ: 0,
  い: 1,
  う: 2,
  え: 3,
  お: 4,
} as const satisfies { [key: string]: number };

export type JaSyllabaryColumn = keyof typeof JA_SYLLABARY_COLUMN_MAP;
export type JaSyllabaryColumnIndex = (typeof JA_SYLLABARY_COLUMN_MAP)[keyof typeof JA_SYLLABARY_COLUMN_MAP];
