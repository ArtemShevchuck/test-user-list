import { ReactNode } from "react";

export interface UserType {
  id: string;
  userName: string;
  email: string;
  address: string;
  phoneNumber: string;
}

export interface UserCardProps {
  user: UserType;
  onEdit: (userId: UserType) => void;
  onDelete: (userId: string) => void;
}

export interface UserFormProps {
  onFinish: (user: UserType) => void;
  isEditMode: boolean;
  initialValues: UserType;
  handleCancelClick: () => void;
}

export interface WrapperProps {
  children: ReactNode;
}
