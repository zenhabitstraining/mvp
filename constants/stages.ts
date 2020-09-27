export type Stage = 'pre-assessment' | 'pre-assessment-complete' | 'phase-one';

export const stages: { [key: string]: Stage } = {
  preAssessment: 'pre-assessment',
  preAssessmentComplete: 'pre-assessment-complete',
  phaseOne: 'phase-one',
};
