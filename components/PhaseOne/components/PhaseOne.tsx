import React from 'react';

import { User } from '@/types/user';
import { Group } from '@/constants/group-keys';
import { GroupA } from './GroupA';
import { GroupB } from './GroupB';
import { GroupC } from './GroupC';
import { GroupD } from './GroupD';
import { GroupE } from './GroupE';

interface Props {
  setUser: (user: User) => void;
  user: User;
}

const groupMap: { [key in Group]: React.FC<Props> } = {
  A: GroupA,
  B: GroupB,
  C: GroupC,
  D: GroupD,
  E: GroupE,
};

export const PhaseOne: React.FC<Props> = ({ user, setUser }) => {
  if (!user.group) {
    throw new Error('User not in group');
  }

  const Session = groupMap[user.group];

  if (!Session) {
    throw new Error('Missing group');
  }

  return <Session user={user} setUser={setUser} />;
};
