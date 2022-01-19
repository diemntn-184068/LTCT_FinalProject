import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Link,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import moment from "moment";
import React from "react";
// import { format } from 'date-fns';

function TablesTableRow(props) {
  const { imageURL, title, content, adsURL, status, timeStart, timeEnd } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr>
      <Td minWidth={{ sm: "50px" }} pl="0px">
        <Avatar src={imageURL} w="50px" borderRadius="12px" me="18px" />
      </Td>
      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
            {title}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
            {content}
          </Text>
        </Flex>
      </Td>

      <Td maxWidth={{ sm: "200px" }}>
        <Link fontSize="md" color={textColor} fontWeight="bold" pb=".5rem" href= {adsURL} isExternal>
          {adsURL}
        </Link>
      </Td>

      <Td>
        <Badge
          bg={status === "Online" ? "green.400" : bgStatus}
          color={status === "Online" ? "white" : colorStatus}
          fontSize="14px"
          p="4px"
          borderRadius="8px"
        >
          {status}
        </Badge>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {moment(timeStart).format('YYYY/MM/DD kk:mm:ss')}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
        {moment(timeEnd).format('YYYY/MM/DD kk:mm:ss')}
        </Text>
      </Td>
      <Td>
        <Button p="0px" bg="transparent" variant="no-hover">
          <Text
            fontSize="md"
            color="gray.400"
            fontWeight="bold"
            cursor="pointer"
          >
            Sửa
          </Text>
        </Button>
        <Button p="0px" bg="transparent" variant="no-hover">
          <Text
            fontSize="md"
            color="gray.400"
            fontWeight="bold"
            cursor="pointer"
          >
            Xóa
          </Text>
        </Button>
      </Td>
    </Tr>
  );
}

export default TablesTableRow;
