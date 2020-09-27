import React, { useState } from 'react';
import NProgress from 'nprogress';
import {
  FormGroup,
  Button,
  NumericInput,
  Tag,
  TextArea,
} from '@blueprintjs/core';

import { User } from '@/types/user';
import { request } from '@/lib/graphql';
import { getUserFromRes } from '@/lib/get-user-from-res';
import { today } from '@/constants/datetime';
import { UserParts } from '@/lib/user-parts';

interface Props {
  isIntervalsVisible?: boolean;
  isWhyVisible?: boolean;
  setUser: (user: User) => void;
  user: User;
}

export const SessionResultsForm: React.FC<Props> = (props) => {
  const { isIntervalsVisible, isWhyVisible, user, setUser } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [numIntervals, setNumIntervals] = useState(0);

  return (
    <>
      <h3>Log your results</h3>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          setIsLoading(true);
          NProgress.start();
          try {
            const res = await request({
              query: INSERT_SESSION_RESULT,
              variables: {
                userId: user.id,
                numIntervals,
                observations: e.currentTarget.observations.value,
                difficulties: e.currentTarget.difficulties.value,
                questions: e.currentTarget.questions.value,
                why: e.currentTarget.why?.value,
                latestSession: today,
              },
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
        {isIntervalsVisible && (
          <FormGroup
            label="How many intervals did you do?"
            labelFor="numIntervals"
          >
            <NumericInput
              id="numIntervals"
              large
              max={1000}
              min={0}
              name="numIntervals"
              onValueChange={setNumIntervals}
              rightElement={
                <Tag minimal>interval{numIntervals === 1 ? '' : 's'}</Tag>
              }
              value={numIntervals}
            />
          </FormGroup>
        )}
        {['Observations', 'Difficulties', 'Why', 'Questions'].map(
          (question) => {
            if (question === 'Why' && !isWhyVisible) {
              return null;
            }

            const key = question.toLowerCase();
            return (
              <FormGroup
                key={key}
                label={
                  question === 'Why'
                    ? 'What is your Why? (who you’re doing this for?)'
                    : question
                }
                labelFor={key}
                labelInfo="(optional)"
              >
                <TextArea
                  fill
                  growVertically={true}
                  id={key}
                  large={true}
                  name={key}
                  style={{ minHeight: '60px' }}
                />
              </FormGroup>
            );
          },
        )}
        <Button
          disabled={isLoading}
          intent="primary"
          large
          loading={isLoading}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </>
  );
};

// Insert the session result for this user
const INSERT_SESSION_RESULT = `
  mutation InsertSessionResult($userId: Int! $numIntervals: Int! $observations: String! $difficulties: String! $questions: String! $why: String $latestSession: String!) {
    insert_session_results(objects: {user_id: $userId, num_intervals: $numIntervals, observations: $observations, difficulties: $difficulties, why: $why, questions: $questions}) {
      returning {
        id
      }
    }
    update_users(where: {id: { _eq: $userId }}, _set: {latest_session: $latestSession}) {
      returning {
        ${UserParts}
      }
    }
  }
`;
