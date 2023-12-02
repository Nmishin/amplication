import { InputJsonValue } from "../../types";

export type AuthenticationUpdateInput = {
  password?: string | null;
  roles?: InputJsonValue;
  username?: string | null;
};
