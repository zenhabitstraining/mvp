export type Stage = 'pre-assessment';

export interface User {
  email: string;
  name: string | null;
  benefits: string | null;
  commitment: string | null;
  previous_experience: string | null;
  stage: Stage | null;
}
