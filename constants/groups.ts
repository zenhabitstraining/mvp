export type Group = 'A' | 'B' | 'C' | 'D' | 'E';

export const groups: { [key in Group]: Group } = {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  E: 'E',
};

export const groupKeys = Object.keys(groups) as Group[];

export const groupsWithIntervalGoal = ['C', 'D'];

const intervalGoalThresholds: { [key: string]: number } = {
  '3': 10,
  '4': 10,
  '5': 10,
  '6': 10,
  '7': 10,
  '8': 10,
  '9': 10,
  '10': 10,
};

export const calculateIntervalGoal = (
  currentInterval: number,
  count: number,
) => {
  const threshold = intervalGoalThresholds[currentInterval.toString()];
  if (threshold && count >= threshold) {
    return currentInterval + 1;
  }
  return currentInterval;
};
