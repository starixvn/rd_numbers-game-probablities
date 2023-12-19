import type { NextBallOptions } from "./types";

export const TOTAL_BALLS = 75;

export const FIRST_HALF = 38;

export const SECOND_HALF = TOTAL_BALLS - FIRST_HALF;

export const FIRST_HALF_OPTIONS: (keyof NextBallOptions)[] = ["over", "odd"];

export const SECOND_HALF_OPTIONS: (keyof NextBallOptions)[] = ["under", "even"];
