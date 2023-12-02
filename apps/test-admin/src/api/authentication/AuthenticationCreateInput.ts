import { InputJsonValue } from "../../types";

export type AuthenticationCreateInput = {
  password?: string | null;
  roles?: InputJsonValue;
  username?: string | null;
};
