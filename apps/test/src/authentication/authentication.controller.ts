import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AuthenticationService } from "./authentication.service";
import { AuthenticationControllerBase } from "./base/authentication.controller.base";

@swagger.ApiTags("authentications")
@common.Controller("authentications")
export class AuthenticationController extends AuthenticationControllerBase {
  constructor(protected readonly service: AuthenticationService) {
    super(service);
  }
}
