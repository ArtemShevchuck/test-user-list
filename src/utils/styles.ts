import { ChakraProps } from "@chakra-ui/react";

export const UserCardContainerStyles: ChakraProps = {
  p: "6",
  w: "96",
  h: "full",
  rounded: "lg",
  boxShadow: "2xl",
  textAlign: "center",
  flexDirection: "column",
  justifyContent: "space-between",
};

export const UserGridContainerStyles: ChakraProps = {
  w: "full",
  gridTemplateColumns: {
    sm: "repeat(1, 1fr)",
    lg: "repeat(2, 1fr)",
    xl: "repeat(3, 1fr)",
    "2xl": "repeat(4, 1fr)",
  },
  gridTemplateRows: "1fr",
};
