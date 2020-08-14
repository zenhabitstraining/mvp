import React from 'react';
import { FormGroup, HTMLSelect } from '@blueprintjs/core';

export const CommitmentInput = () => (
  <FormGroup
    label="4. Can you commit to 10 minutes every day?"
    labelFor="commitment"
  >
    <HTMLSelect
      id="commitment"
      name="commitment"
      large
      options={[
        { value: 'Yes absolutely' },
        { value: 'Yes on most days' },
        { value: 'Probably not' },
      ]}
    />
  </FormGroup>
);
