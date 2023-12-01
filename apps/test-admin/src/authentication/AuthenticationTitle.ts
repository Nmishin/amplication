import { Authentication as TAuthentication } from "../api/authentication/Authentication";

export const AUTHENTICATION_TITLE_FIELD = "username";

export const AuthenticationTitle = (record: TAuthentication): string => {
  return record.username?.toString() || String(record.id);
};
