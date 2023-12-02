import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  PasswordInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const AuthenticationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
