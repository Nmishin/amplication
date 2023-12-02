import { JsonValue } from "type-fest";

export type Authentication = {
  createdAt: Date;
  id: string;
  roles: JsonValue;
  updatedAt: Date;
  username: string | null;
};
