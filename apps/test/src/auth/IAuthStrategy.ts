import { AuthenticationInfo } from "./AuthenticationInfo";

export interface IAuthStrategy {
  validate: (...any: any) => Promise<AuthenticationInfo>;
}
