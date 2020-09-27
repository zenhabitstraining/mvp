import React from 'react';

import { User } from '@/types/user';
import { Template } from './Template';

interface Props {
  user: User;
  setUser: (user: User) => void;
}

export const GroupB: React.FC<Props> = ({ user, setUser }) => (
  <Template
    user={user}
    videoId="453757349"
    setUser={setUser}
    instructions={[
      'Find a quiet spot, sit upright but relaxed',
      'Set a timer for 10 minutes',
      'Keep your attention on your breath — sensations in the nostril area',
      'Count each breath, until you get to 10, then back to 1',
      'If your mind wanders for a second or more, notice, take a rest, start back at 1',
      'After the timer goes off, log how it went',
    ]}
  />
);
