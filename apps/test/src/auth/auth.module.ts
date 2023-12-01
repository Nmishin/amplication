import { forwardRef, Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { SecretsManagerModule } from "../providers/secrets/secretsManager.module";
import { AuthController } from "./auth.controller";
import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";
import { BasicStrategy } from "./basic/basic.strategy";
import { PasswordService } from "./password.service";
import { TokenService } from "./token.service";
import { AuthenticationModule } from "../authentication/authentication.module";

@Module({
  imports: [
    forwardRef(() => AuthenticationModule),
    PassportModule,
    SecretsManagerModule,
  ],
  providers: [
    AuthService,
    BasicStrategy,
    PasswordService,
    AuthResolver,
    TokenService,
  ],
  controllers: [AuthController],
  exports: [AuthService, PasswordService],
})
export class AuthModule {}
