import React from 'react';

import { User } from '@/types/user';
import { Template } from './Template';

interface Props {
  user: User;
  setUser: (user: User) => void;
}

export const GroupE: React.FC<Props> = ({ user, setUser }) => (
  <Template
    user={user}
    videoId="453761543"
    setUser={setUser}
    isWhyVisible
    instructions={[
      'Find a quiet spot, sit upright but relaxed',
      'Set a timer for 10 minutes',
      'Start by thinking about Why you’re doing this — who will it benefit? Feel that intention in your heart',
      'Keep your attention on your breath — sensations in the nostril area',
      'Count each breath, until you get to 10, then back to 1',
      'If your mind wanders for a second or more, notice, take a rest, start back at 1',
      'After the timer goes off, log how it went',
    ]}
  />
);
