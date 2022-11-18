import {
  Input,
  Button,
  FormLabel,
  InputGroup,
  FormControl,
  InputLeftAddon,
} from "@chakra-ui/react";
import { Field, Form, Formik, FieldProps } from "formik";

import { UserFormProps, UserType } from "../../utils/types";
import { defaultUserValue } from "../../utils/constants";

const UserForm = ({
  onFinish,
  isEditMode,
  initialValues,
  handleCancelClick,
}: UserFormProps) => {
  const setNewId = Date.now().toString();
  const getEditButtonName = isEditMode ? "Save" : "Create";
  const setFormValues = isEditMode ? initialValues : defaultUserValue;

  return (
    <Formik<UserType>
      enableReinitialize
      initialValues={setFormValues}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          if (isEditMode) {
            onFinish({ ...values, id: values.id });
            setSubmitting(false);
            resetForm();
            return;
          }

          onFinish({ ...values, id: setNewId });
          setSubmitting(false);
          resetForm();
        }, 1000);
      }}
    >
      {(props) => (
        <Form>
          <Field name="userName">
            {({ field }: FieldProps<string>) => (
              <FormControl>
                <FormLabel>User name</FormLabel>
                <Input {...field} placeholder="Enter name" />
              </FormControl>
            )}
          </Field>

          <Field name="email">
            {({ field, form }: FieldProps<string>) => (
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input {...field} placeholder="Enter email" />
              </FormControl>
            )}
          </Field>

          <Field name="address">
            {({ field, form }: FieldProps<string>) => (
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input {...field} placeholder="Enter address" />
              </FormControl>
            )}
          </Field>

          <Field name="phoneNumber">
            {({ field, form }: FieldProps<string>) => (
              <FormControl>
                <FormLabel>Phone number</FormLabel>
                <InputGroup>
                  <InputLeftAddon children="+380" />
                  <Input
                    type="tel"
                    {...field}
                    placeholder="Enter phone number"
                  />
                </InputGroup>
              </FormControl>
            )}
          </Field>

          <Button
            mt="4"
            type="submit"
            colorScheme="blue"
            isLoading={props.isSubmitting}
          >
            {getEditButtonName}
          </Button>

          {isEditMode && (
            <Button
              mt="4"
              ml="4"
              colorScheme="red"
              onClick={handleCancelClick}
              isLoading={props.isSubmitting}
            >
              Cancel
            </Button>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
