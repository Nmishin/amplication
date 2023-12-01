import { AuthenticationWhereInput } from "./AuthenticationWhereInput";
import { AuthenticationOrderByInput } from "./AuthenticationOrderByInput";

export type AuthenticationFindManyArgs = {
  where?: AuthenticationWhereInput;
  orderBy?: Array<AuthenticationOrderByInput>;
  skip?: number;
  take?: number;
};
