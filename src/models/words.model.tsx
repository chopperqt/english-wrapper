export type Mode =
  'engToRus' |
  'rusToEng' |
  ''

export interface WordsForm {
  words: WordsValues[]
  mode: Mode
}

export interface WordsValues {
  english: string,
  russia: string,
  isActive: boolean
}

export type ModeValues =
  'engToRus' |
  'rusToEng' |
  ''

export interface ModeForm {
  mode: ModeValues
}
