import React, { useState, ChangeEvent } from "react";
import { InputGroup, FormGroup, ControlGroup, Button } from "@blueprintjs/core";
import { signIn } from "next-auth/client";

import { validateEmail } from "@/lib/validate-email";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const isEmailValid = validateEmail(email);
  const [isLoading, setLoadingState] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (isEmailValid) {
          signIn("email", { email });
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
              try {
                setLoadingState(true);
                setEmail(e.currentTarget.value);
              } catch {
              } finally {
                setLoadingState(false);
              }
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
