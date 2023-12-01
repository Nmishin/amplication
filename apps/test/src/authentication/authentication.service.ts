import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthenticationServiceBase } from "./base/authentication.service.base";

@Injectable()
export class AuthenticationService extends AuthenticationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
