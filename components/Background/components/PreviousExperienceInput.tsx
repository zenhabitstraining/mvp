import React from 'react';
import { FormGroup, HTMLSelect } from '@blueprintjs/core';

export const PreviousExperienceInput = () => (
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
);
