import {
  Box,
  Flex,
  Text,
  Stack,
  Avatar,
  Center,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { useMemo, memo } from "react";
import ColorHash from "color-hash";

import { UserCardProps } from "../../utils/types";
import { UserCardContainerStyles } from "../../utils/styles";

const UserCard = ({ user, onDelete, onEdit }: UserCardProps) => {
  const backgroundColor = useMemo(() => {
    const colorHash = new ColorHash();
    return colorHash.hex(user.userName);
  }, [user.userName]);

  const handleDeleteClick = () => {
    onDelete(user.id);
  };

  const handleEditClick = () => {
    window.scrollTo(0, 0);
    onEdit(user);
  };

  return (
    <Center py="6">
      <Flex
        {...UserCardContainerStyles}
        bg={useColorModeValue("white", "gray.900")}
      >
        <Box>
          <Avatar
            mb="4"
            size="lg"
            color="white"
            name={user.userName}
            backgroundColor={backgroundColor}
          />
          <Heading fontSize="2xl" fontFamily="body">
            {user.userName}
          </Heading>
          <Text fontWeight="300" color="gray.500" mb="4">
            {user.email}
          </Text>
          <Text fontWeight="400" color="gray.500" mb="4">
            {user.phoneNumber}
          </Text>
          <Text
            px="3"
            textAlign="center"
            color={useColorModeValue("gray.700", "gray.400")}
          >
            {user.address}
          </Text>
        </Box>

        <Stack mt="8" direction="row" spacing="4">
          <Button variant="solidRed" onClick={handleDeleteClick}>
            Delete
          </Button>
          <Button variant="solidBlue" onClick={handleEditClick}>
            Edit
          </Button>
        </Stack>
      </Flex>
    </Center>
  );
};

export default memo(UserCard);
