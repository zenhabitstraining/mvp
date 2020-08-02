import React from "react";
import { NonIdealState, Button } from "@blueprintjs/core";

export const AccessDenied = () => (
  <>
    <div>
      <NonIdealState
        action={
          <Button intent="primary" rightIcon="arrow-right" text="Login" />
        }
        description="You do not have permission to access this page. Please log-in and try again."
        icon="error"
        title="Access denied"
      />
    </div>
    <style jsx>{`
      div {
        margin-top: 40px;
      }
    `}</style>
  </>
);
