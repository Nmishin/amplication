import * as common from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AuthService } from "./auth.service";
import { GqlDefaultAuthGuard } from "./gqlDefaultAuth.guard";
import { UserData } from "./userData.decorator";
import { LoginArgs } from "./LoginArgs";
import { AuthenticationInfo } from "./AuthenticationInfo";

@Resolver(AuthenticationInfo)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Mutation(() => AuthenticationInfo)
  async login(@Args() args: LoginArgs): Promise<AuthenticationInfo> {
    return this.authService.login(args.credentials);
  }

  @Query(() => AuthenticationInfo)
  @common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
  async authenticationInfo(
    @UserData() entityInfo: AuthenticationInfo
  ): Promise<AuthenticationInfo> {
    return entityInfo;
  }
}
