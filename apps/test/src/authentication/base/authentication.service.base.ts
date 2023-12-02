/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Authentication } from "@prisma/client";
import { PasswordService } from "../../auth/password.service";
import { transformStringFieldUpdateInput } from "../../prisma.util";

export class AuthenticationServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService
  ) {}

  async count<T extends Prisma.AuthenticationCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuthenticationCountArgs>
  ): Promise<number> {
    return this.prisma.authentication.count(args);
  }

  async findMany<T extends Prisma.AuthenticationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuthenticationFindManyArgs>
  ): Promise<Authentication[]> {
    return this.prisma.authentication.findMany(args);
  }
  async findOne<T extends Prisma.AuthenticationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuthenticationFindUniqueArgs>
  ): Promise<Authentication | null> {
    return this.prisma.authentication.findUnique(args);
  }
  async create<T extends Prisma.AuthenticationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuthenticationCreateArgs>
  ): Promise<Authentication> {
    return this.prisma.authentication.create<T>({
      ...args,

      data: {
        ...args.data,
        password: await this.passwordService.hash(args.data.password),
      },
    });
  }
  async update<T extends Prisma.AuthenticationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuthenticationUpdateArgs>
  ): Promise<Authentication> {
    return this.prisma.authentication.update<T>({
      ...args,

      data: {
        ...args.data,

        password:
          args.data.password &&
          (await transformStringFieldUpdateInput(
            args.data.password,
            (password) => this.passwordService.hash(password)
          )),
      },
    });
  }
  async delete<T extends Prisma.AuthenticationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuthenticationDeleteArgs>
  ): Promise<Authentication> {
    return this.prisma.authentication.delete(args);
  }
}
