import * as graphql from "@nestjs/graphql";
import { AuthenticationResolverBase } from "./base/authentication.resolver.base";
import { Authentication } from "./base/Authentication";
import { AuthenticationService } from "./authentication.service";

@graphql.Resolver(() => Authentication)
export class AuthenticationResolver extends AuthenticationResolverBase {
  constructor(protected readonly service: AuthenticationService) {
    super(service);
  }
}
