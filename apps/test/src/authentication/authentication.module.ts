import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AuthenticationModuleBase } from "./base/authentication.module.base";
import { AuthenticationService } from "./authentication.service";
import { AuthenticationController } from "./authentication.controller";
import { AuthenticationResolver } from "./authentication.resolver";

@Module({
  imports: [AuthenticationModuleBase, forwardRef(() => AuthModule)],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, AuthenticationResolver],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}
