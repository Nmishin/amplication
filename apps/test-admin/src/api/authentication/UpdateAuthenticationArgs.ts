import { AuthenticationWhereUniqueInput } from "./AuthenticationWhereUniqueInput";
import { AuthenticationUpdateInput } from "./AuthenticationUpdateInput";

export type UpdateAuthenticationArgs = {
  where: AuthenticationWhereUniqueInput;
  data: AuthenticationUpdateInput;
};
