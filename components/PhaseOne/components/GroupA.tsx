import React from 'react';

import { User } from '@/types/user';
import { Template } from './Template';

interface Props {
  user: User;
  setUser: (user: User) => void;
}

export const GroupA: React.FC<Props> = ({ user, setUser }) => (
  <Template
    user={user}
    videoId="453756483"
    setUser={setUser}
    instructions={[
      'Find a quiet spot, sit upright but relaxed',
      'Set a timer for 10 minutes',
      'Just sit in silence for those 10 minutes — no particular focus required',
      'After the timer goes off, log how it went',
    ]}
  />
);
