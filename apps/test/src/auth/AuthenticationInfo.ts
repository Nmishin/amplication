import { Field, ObjectType } from "@nestjs/graphql";
import { Authentication } from "../authentication/base/Authentication";

@ObjectType()
export class AuthenticationInfo implements Partial<Authentication> {
  @Field(() => String)
  id!: string;
  @Field(() => String)
  username!: string;
  @Field(() => [String])
  roles!: string[];
  @Field(() => String, { nullable: true })
  accessToken?: string;
}
