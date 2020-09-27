export type Group = 'A' | 'B' | 'C' | 'D' | 'E';

export const groups: { [key in Group]: Group } = {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  E: 'E',
};

export const groupKeys = Object.keys(groups) as Group[];
