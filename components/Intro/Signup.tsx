import React, { useState } from 'react';
import { InputGroup, FormGroup, ControlGroup, Button } from '@blueprintjs/core';
import { signIn } from 'next-auth/client';

import { validateEmail } from '@/lib/validate-email';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const isEmailValid = validateEmail(email);
  const [isLoading, setLoadingState] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (!isEmailValid) {
          return;
        }

        try {
          setLoadingState(true);
          signIn('email', { email });
        } catch {
        } finally {
          setLoadingState(false);
        }
      }}
    >
      <FormGroup
        helperText="We’ll send you a magic link"
        label="Your email address"
        labelFor="email"
        labelInfo="(required)"
      >
        <ControlGroup>
          <InputGroup
            id="email"
            name="email"
            leftIcon="envelope"
            large
            value={email}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setEmail(e.currentTarget.value);
            }}
          />
          <Button
            large
            type="submit"
            disabled={!isEmailValid || isLoading}
            loading={isLoading}
          >
            Submit
          </Button>
        </ControlGroup>
      </FormGroup>
    </form>
  );
};
