import React from 'react';

import { User } from '@/types/user';
import { Template } from './Template';

interface Props {
  user: User;
  setUser: (user: User) => void;
}

export const GroupD: React.FC<Props> = ({ user, setUser }) => (
  <Template
    user={user}
    videoId="453759395"
    setUser={setUser}
    isIntervalsVisible
    instructions={[
      'Find a quiet spot, sit upright but relaxed',
      'Set a timer for 10 minutes',
      'Keep your attention on your breath — sensations in the nostril area',
      'Count each breath — up to the specified number for each interval (start with 3)',
      'After the interval is over (i.e. you reach 3 breaths), say “Yahoo!” and encourage yourself',
      'Take a break for a few breaths, then repeat for another interval of the same number',
      'Count how many intervals you’ve done with your fingers',
      'If your mind wanders for a second or more, notice and say “Ahoy!” with a playful attitude ..., take a rest, start back at 1',
      'After the timer goes off, log how it went',
      'Your interval number will change over time, so check to see what it is each day',
    ]}
  />
);
