import React, { useState } from 'react';
import NProgress from 'nprogress';
import {
  InputGroup,
  FormGroup,
  Button,
  NumericInput,
  Tag,
  Callout,
} from '@blueprintjs/core';

import { User } from '@/types/user';
import { UserParts } from '@/lib/user-parts';
import { Video } from '../../Video';
import { getUserFromRes } from '@/lib/get-user-from-res';
import { request } from '@/lib/graphql';
import { stages } from '@/constants/stages';

interface Props {
  user: User;
  setUser: (user: User) => void;
}

export const PreAssessment: React.FC<Props> = ({ user, setUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [roundOne, setRoundOne] = useState(0);
  const [roundTwo, setRoundTwo] = useState(0);
  const [roundThree, setRoundThree] = useState(0);

  const average = Math.ceil((roundOne + roundTwo + roundThree) / 3);

  return (
    <div className="wrapper">
      <h1>Training pre-assessment</h1>
      <Video vimeoId="444053427" />
      <br />
      <br />
      <p>
        So before we start the training, we’d like you to do a quick assessment.
      </p>
      <p>It should take less than 5 minutes.</p>
      <br />
      <p>
        Watch the video above, then fill out the form below with your results.
      </p>

      <form
        onSubmit={async (e) => {
          e.preventDefault();

          setIsLoading(true);
          NProgress.start();
          try {
            const res = await request({
              query: INSERT_PRE_ASSESSMENT,
              variables: {
                id: user.id,
                roundOne,
                roundTwo,
                roundThree,
                comments: e.currentTarget.comments.value,
                questions: e.currentTarget.questions.value,
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
        <FormGroup label="Result from round one" labelFor="roundOne">
          <NumericInput
            id="roundOne"
            large
            name="roundOne"
            min={0}
            max={100}
            onValueChange={setRoundOne}
            rightElement={<Tag minimal>breath{roundOne === 1 ? '' : 's'}</Tag>}
            value={roundOne}
          />
        </FormGroup>
        <FormGroup label="Result from round two" labelFor="roundTwo">
          <NumericInput
            id="roundTwo"
            large
            name="roundTwo"
            min={0}
            max={100}
            onValueChange={setRoundTwo}
            rightElement={<Tag minimal>breath{roundTwo === 1 ? '' : 's'}</Tag>}
            value={roundTwo}
          />
        </FormGroup>
        <FormGroup label="Result from round three" labelFor="roundThree">
          <NumericInput
            id="roundThree"
            large
            name="roundThree"
            min={0}
            max={100}
            onValueChange={setRoundThree}
            rightElement={
              <Tag minimal>breath{roundThree === 1 ? '' : 's'}</Tag>
            }
            value={roundThree}
          />
        </FormGroup>
        <Callout intent="primary">
          Your average is {average} breath{average === 1 ? '' : 's'}
        </Callout>
        <br />
        <FormGroup
          label="How did this go for you?"
          labelFor="comments"
          labelInfo="(optional)"
        >
          <InputGroup id="comments" name="comments" large />
        </FormGroup>
        <FormGroup
          label="Do you have any questions or concerns?"
          labelFor="questions"
          labelInfo="(optional)"
        >
          <InputGroup id="questions" name="questions" large />
        </FormGroup>
        <Button
          disabled={isLoading}
          intent="primary"
          large
          loading={isLoading}
          rightIcon="arrow-right"
          type="submit"
        >
          Save and next
        </Button>
      </form>

      <style jsx>{`
        .wrapper {
          margin-top: 40px;
        }

        h1 {
          text-align: center;
        }

        form {
          margin-top: 30px;
        }
      `}</style>
    </div>
  );
};

// Insert the pre-assessment result set the "stage" to "pre-assessment-complete"
const INSERT_PRE_ASSESSMENT = `
  mutation InsertPreAssessment($id: Int! $roundOne: Int! $roundTwo: Int! $roundThree: Int! $comments: String! $questions: String!) {
    insert_pre_assessment(objects: {id: $id, round_one: $roundOne, round_two: $roundTwo, round_three: $roundThree, comments: $comments, questions: $questions}) {
      returning {
        id
      }
    }
    update_users(where: {id: {_eq: $id}}, _set: {stage: "${stages.preAssessmentComplete}"}) {
      returning {
        ${UserParts}
      }
    }
  }
`;
