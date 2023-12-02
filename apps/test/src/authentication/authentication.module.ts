import { Module } from "@nestjs/common";
import { AuthenticationModuleBase } from "./base/authentication.module.base";
import { AuthenticationService } from "./authentication.service";
import { AuthenticationController } from "./authentication.controller";
import { AuthenticationResolver } from "./authentication.resolver";

@Module({
  imports: [AuthenticationModuleBase],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, AuthenticationResolver],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}
