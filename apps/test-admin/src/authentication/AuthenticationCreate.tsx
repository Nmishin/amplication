import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  PasswordInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ROLES_OPTIONS } from "../user/RolesOptions";

export const AuthenticationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <PasswordInput label="password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Create>
  );
};
