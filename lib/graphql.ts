import { GraphQLClient } from "graphql-request";
import { Variables } from "graphql-request/dist/src/types";

const endpoint = "https://alive-griffon-49.hasura.app/v1/graphql";
const client = new GraphQLClient(endpoint, {
  headers: {
    //   authorization: `Bearer ${process.env.API_TOKEN}`,
  },
});

interface Args {
  query: string;
  variables?: Variables;
}

export const request = ({ query: queryOrMutation, variables }: Args) => {
  return client.request(queryOrMutation, variables);
};
