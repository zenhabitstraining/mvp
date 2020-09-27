import { Group } from '@/constants/group-keys';
import { Stage } from '@/constants/stages';

export interface User {
  id: number;
  email: string;
  name: string | null;
  benefits: string | null;
  commitment: string | null;
  previous_experience: string | null;
  stage: Stage | null;
  group: Group | null;
  latest_session: string | null;
}
