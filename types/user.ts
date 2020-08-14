export type Stage = 'pre-assessment' | 'pre-assessment-complete';

export interface User {
  id: number;
  email: string;
  name: string | null;
  benefits: string | null;
  commitment: string | null;
  previous_experience: string | null;
  stage: Stage | null;
}
