import { useState } from "react";
import { ChakraProvider, Grid } from "@chakra-ui/react";

import { UserType } from "./utils/types";
import Wrapper from "./components/Wrapper";
import UserCard from "./components/UserCard";
import UserForm from "./components/UserForm";
import { defaultUserValue, UsersListExample } from "./utils/constants";
import theme from "./theme";
import { UserGridContainerStyles } from "./utils/styles";

export const App = () => {
  const [userList, setUserList] = useState(UsersListExample);
  const [isEditMode, setIsEditMode] = useState(false);
  const [formValues, setFormValues] = useState(UsersListExample[0]);

  const handleCreateUser = (user: UserType) => {
    if (
      user.userName === defaultUserValue.userName &&
      user.address === defaultUserValue.address &&
      user.email === defaultUserValue.email &&
      user.phoneNumber === defaultUserValue.phoneNumber
    )
      return;

    if (isEditMode) {
      setUserList(userList.map((item) => (item.id === user.id ? user : item)));
      return setIsEditMode(false);
    }

    setUserList((prev) => [...prev, user]);
  };

  const handleDeleteUser = (userId: string) => {
    setUserList(userList.filter((user) => user.id !== userId));
  };

  const handleEditUser = (user: UserType) => {
    setIsEditMode(true);
    setFormValues(user);
  };

  const handleCancelClick = () => {
    setIsEditMode(false);
  };

  return (
    <ChakraProvider theme={theme}>
      <Wrapper>
        <UserForm
          isEditMode={isEditMode}
          onFinish={handleCreateUser}
          initialValues={formValues}
          handleCancelClick={handleCancelClick}
        />
        <Grid {...UserGridContainerStyles}>
          {userList.map((user) => (
            <UserCard
              user={user}
              key={user.id}
              onDelete={handleDeleteUser}
              onEdit={handleEditUser}
            />
          ))}
        </Grid>
      </Wrapper>
    </ChakraProvider>
  );
};
