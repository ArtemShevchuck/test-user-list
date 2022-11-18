import { FC } from "react";
import { Grid, VStack, Box } from "@chakra-ui/react";

import { WrapperProps } from "../../utils/types";
import { ColorModeSwitcher } from "../ColorModeSwitcher/ColorModeSwitcher";

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p="3">
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing="8">{children}</VStack>
      </Grid>
    </Box>
  );
};

export default Wrapper;
