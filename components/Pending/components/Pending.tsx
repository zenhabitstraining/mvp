import React, { useState } from 'react';
import { Button } from '@blueprintjs/core';
import NProgress from 'nprogress';

import { User } from '@/types/user';
import { UserParts } from '@/lib/user-parts';
import { getUserFromRes } from '@/lib/get-user-from-res';
import { groupKeys, groupsWithIntervalGoal } from '@/constants/groups';
import { request } from '@/lib/graphql';
import { stages } from '@/constants/stages';

const randomInt = (max: number, min: number = 0) =>
  Math.floor(Math.random() * (max - min + 1) + min);

interface Props {
  user: User;
  setUser: (user: User) => void;
}

export const Pending: React.FC<Props> = ({ user, setUser }) => {
  const [isLoading, setIsLoading] = useState(false);

  const randomGroup = groupKeys[randomInt(groupKeys.length - 1)];

  // Certain groups have an interval breath goal to reach
  const intervalGoal = groupsWithIntervalGoal.includes(randomGroup) ? 3 : null;

  return (
    <div className="wrapper">
      <h1>Thank you!</h1>
      <br />
      <p>Click the button below to view your first session.</p>
      <br />
      <Button
        disabled={isLoading}
        intent="primary"
        large
        loading={isLoading}
        onClick={async () => {
          setIsLoading(true);
          NProgress.start();
          try {
            const res = await request({
              query: ADD_USER_TO_GROUP,
              variables: { id: user.id, group: randomGroup, intervalGoal },
            });
            const _user = getUserFromRes(res, true); // isUpdate=true
            if (!_user) {
              throw new Error(
                `No valid user returned from request. Here is response string: ${JSON.stringify(
                  res,
                )}`,
              );
            }
            setUser(_user);
          } catch (e) {
            console.error(e);
            alert('There was an error. Please check the console log.');
          } finally {
            NProgress.done();
            setIsLoading(false);
          }
        }}
      >
        Start session
      </Button>
      <br />
      <br />
      <br />

      <style jsx>{`
        .wrapper {
          margin-top: 40px;
        }

        h1 {
          margin-bottom: 10px;
        }

        p {
          margin-bottom: 20px;
        }

        div {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

// Add the user to a random meditation group
const ADD_USER_TO_GROUP = `
  mutation AddUserToGroup($id: Int! $group: String! $intervalGoal: Int) {
    update_users(where: {id: {_eq: $id}}, _set: {stage: "${stages.phaseOne}", group: $group, interval_goal: $intervalGoal}) {
      returning {
        ${UserParts}
      }
    }
  }
`;
