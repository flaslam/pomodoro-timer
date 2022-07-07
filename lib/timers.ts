import { redTheme, blueTheme, greenTheme, ColorScheme } from "./themes";

export enum Period {
  Break,
  Work,
}

// TODO: this isn't being used properly
export interface Timer {
  type: Period;
  length: number;
  theme: ColorScheme;
}

export const timers = {
  work: { type: Period.Work, length: 25 * 60, theme: redTheme },
  shortBreak: { type: Period.Break, length: 5 * 60, theme: greenTheme },
  longBreak: { type: Period.Break, length: 15 * 60, theme: blueTheme },
};
