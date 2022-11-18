export const Button = {
  baseStyle: {
    fontStyle: "normal",
  },
  variants: {
    solidRed: {
      flex: "1",
      bg: "red.400",
      fontSize: "sm",
      rounded: "full",
      _focus: {
        bg: "red.200",
      },
      _hover: {
        bg: "red.500",
      },
      color: "white",
    },
    solidBlue: {
      flex: "1",
      fontSize: "sm",
      rounded: "full",
      bg: "blue.400",
      color: "white",
      _hover: {
        bg: "blue.500",
      },
      _focus: {
        bg: "blue.500",
      },
    },
  },
};
