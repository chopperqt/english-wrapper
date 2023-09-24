import { number, object, string, type Output } from "valibot";

export const StatisticsSchema = object({
  correct: number("Correct error"),
  created_at: string(),
  correct_words: string(),
  error_words: string(),
  errors: number(),
  id: number(),
  user_id: string(),
});

export type StatisticsModel = Output<typeof StatisticsSchema>;
