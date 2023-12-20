import type { NextBallOptions } from "./types";

export const TOTAL_BALLS = 75;

export const OVER_OR_ODD = 38;

export const UNDER_OR_EVEN = TOTAL_BALLS - OVER_OR_ODD;

export const OVER_ODD_OPTIONS: (keyof NextBallOptions)[] = ["over", "odd"];

export const UNDER_EVEN_OPTIONS: (keyof NextBallOptions)[] = ["under", "even"];
