import React, { useState } from 'react';
import NProgress from 'nprogress';
import {
  Button,
  FormGroup,
  InputGroup,
  Position,
  Tooltip,
} from '@blueprintjs/core';

import { BenefitsCheckboxes } from './BenefitsCheckboxes';
import { CommitmentInput } from './CommitmentDeclaration';
import { PreviousExperienceInput } from './PreviousExperienceInput';
import { User } from '@/types/user';
import { UserParts } from '@/lib/user-parts';
import { Video } from '@/components/Video';
import { getUserFromRes } from '@/lib/get-user-from-res';
import { request } from '@/lib/graphql';
import { stages } from '@/constants/stages';

interface Props {
  user: User;
  setUser: (user: User) => void;
}

export const Background: React.FC<Props> = ({ user, setUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [benefits, setBenefits] = useState<string[]>([]);

  const isFormValid = benefits.length > 0 && name.length > 0;

  return (
    <div className="wrapper">
      <h1>
        Welcome!
        <br /> Here’s How the Training Works
      </h1>
      <Video vimeoId="444051924" />
      <br />
      <br />
      <h2>Welcome in! We’re glad you joined us.</h2>
      <p>OK, so watch the video above to see how the training works.</p>
      <p>It’s a daily training, just 10 minutes a day.</p>
      <p>We encourage you to set a reminder so you don’t forget.</p>
      <p>Find a space where you can practice uninterrupted for 10 minutes. </p>
      <p>
        Be as diligent as possible with the training, to get the benefits. But
        you don’t have to be “perfect.”
      </p>
      <p>Watch the video above, then answer a few short questions …</p>

      <form
        onSubmit={async (e) => {
          e.preventDefault();

          if (!isFormValid) {
            return;
          }

          setIsLoading(true);
          NProgress.start();
          try {
            const res = await request({
              query: UPDATE_USER,
              variables: {
                email: user.email,
                name,
                previousExperience: e.currentTarget.previousExperience.value,
                benefits: benefits.join(', '),
                commitment: e.currentTarget.commitment.value,
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
        <FormGroup
          label="1. Your full name"
          labelFor="fullName"
          labelInfo="(required)"
        >
          <InputGroup
            id="fullName"
            large
            name="fullName"
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setName(e.currentTarget.value);
            }}
            value={name}
          />
        </FormGroup>
        <PreviousExperienceInput />
        <BenefitsCheckboxes {...{ benefits, setBenefits }} />
        <CommitmentInput />
        <FormGroup
          label="5. Do you have any questions or concerns?"
          labelFor="questions"
          labelInfo="(optional)"
        >
          <InputGroup id="questions" name="questions" large />
        </FormGroup>
        <Tooltip
          content="Please fill in the form"
          position={Position.TOP}
          disabled={isFormValid}
        >
          <Button
            disabled={!isFormValid || isLoading}
            intent="primary"
            large
            loading={isLoading}
            rightIcon="arrow-right"
            type="submit"
          >
            Save and next
          </Button>
        </Tooltip>
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

// Update the user values for this stage and set the "stage" to "pre-assessment"
const UPDATE_USER = `
  mutation UpdateUser($email: String! $name: String! $previousExperience: String! $benefits: String! $commitment: String!) {
    update_users(where: {email: { _eq: $email }}, _set: {name: $name, previous_experience: $previousExperience, benefits: $benefits, commitment: $commitment, stage: "${stages.preAssessment}"}) {
      returning {
        ${UserParts}
      }
    }
  }
`;
