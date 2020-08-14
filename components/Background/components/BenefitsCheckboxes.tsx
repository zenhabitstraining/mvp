import React from 'react';
import { FormGroup, Checkbox } from '@blueprintjs/core';

interface Props {
  benefits: string[];
  setBenefits: (benefits: string[]) => void;
}

export const BenefitsCheckboxes: React.FC<Props> = (props) => {
  const { benefits, setBenefits } = props;

  const benefitsHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    if (e.currentTarget.checked) {
      setBenefits([...benefits, val]);
    } else {
      setBenefits(benefits.filter((b) => b !== val));
    }
  };

  return (
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
  );
};
