import { User } from 'types/user';

// Simple helper to get the user from the graphql response
export const getUserFromRes = (res: any, isUpdate?: boolean): User | null => {
  if (isUpdate) {
    if (
      res &&
      res.update_users &&
      res.update_users.returning &&
      res.update_users.returning.length === 1
    ) {
      return res.update_users.returning[0];
    }
  } else {
    if (res && res.users && res.users.length === 1) {
      return res.users[0];
    }
  }
  return null;
};
