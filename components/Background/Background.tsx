import React, { useState } from 'react';
import {
  InputGroup,
  FormGroup,
  Button,
  HTMLSelect,
  Checkbox,
} from '@blueprintjs/core';

import { request } from '@/lib/graphql';
import { Video } from '../Video';

interface Props {
  session: any;
}

export const Background: React.FC<Props> = ({ session }) => {
  const [benefits, setBenefits] = useState<string[]>([]);

  const benefitsHandler = (e) => {
    const val = e.currentTarget.value;
    if (e.currentTarget.checked) {
      setBenefits([...benefits, val]);
    } else {
      setBenefits(benefits.filter((b) => b !== val));
    }
  };

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

          try {
            await request({
              query: UPDATE_USER,
              variables: {
                email: session.user.email,
                name: e.currentTarget.fullName.value,
                previousExperience: e.currentTarget.previousExperience.value,
                benefits: benefits.join(', '),
              },
            });
          } catch (e) {
            console.error(e);
            alert('There was an error. Please check the console log.');
          }
        }}
      >
        <FormGroup
          label="1. Your full name"
          labelFor="fullName"
          labelInfo="(required)"
        >
          <InputGroup id="fullName" name="fullName" large />
        </FormGroup>
        <FormGroup
          label="2. Do you have previous meditation experience?"
          helperText="Share how long you’ve been meditating, if you don’t count breaks you took"
          labelFor="previousExperience"
        >
          <HTMLSelect
            id="previousExperience"
            name="previousExperience"
            large
            options={[
              { value: 'None' },
              { value: 'Very little' },
              { value: 'Less than 1 year' },
              { value: 'Less than 2 years' },
              { value: 'Less than 5 years' },
              { value: 'More than 5 years' },
            ]}
          />
        </FormGroup>
        <FormGroup label="3. Which of these benefits are most important to you?">
          <Checkbox
            label="Focus"
            large
            name="benefits"
            value="Focus"
            onChange={benefitsHandler}
          />
          <Checkbox
            label="Stress reduction"
            large
            name="benefits"
            value="Stress reduction"
            onChange={benefitsHandler}
          />
          <Checkbox
            label="Less reactivity"
            large
            name="benefits"
            value="Less reactivity"
            onChange={benefitsHandler}
          />
          <Checkbox
            label="Better habits"
            large
            name="benefits"
            value="Better habits"
            onChange={benefitsHandler}
          />
          <Checkbox
            label="More compassion"
            large
            name="benefits"
            value="More compassion"
            onChange={benefitsHandler}
          />
          <Checkbox
            label="Happier with myself"
            large
            name="benefits"
            value="Happier with myself"
            onChange={benefitsHandler}
          />
          <Checkbox
            label="Be more resilient & flexible"
            large
            name="benefits"
            value="Be more resilient & flexible"
            onChange={benefitsHandler}
          />
        </FormGroup>
        <Button large type="submit" intent="primary">
          Save
        </Button>
      </form>

      <style jsx>{`
        .wrapper {
          margin-top: 40px;
        }

        h1 {
          text-align: center;
        }

        .intro {
          text-align: center;
          margin-bottom: 30px;
        }

        form {
          margin-top: 30px;
        }
      `}</style>
    </div>
  );
};

const UPDATE_USER = `
  mutation UpdateUser($email: String! $name: String! $previousExperience: String! $benefits: String!) {
    update_users(where: { email: { _eq: $email } }, _set: { name: $name, previous_experience: $previousExperience, benefits: $benefits}) {
      returning {
        email
      }
    }
  }
`;
