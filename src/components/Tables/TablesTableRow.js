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
  useDisclosure,
} from "@chakra-ui/react";
import moment from "moment";
import React, { useState } from "react";
import AddOrEditAdvertisement from '../Modal/EditAdvertisement';
import { deleteDataAdvertisement } from '../../variables/general';

function TablesTableRow(props) {
  const { id, imageURL, title, content, adsURL, status, timeStart, timeEnd } = props;
  const [imageURLState, setImageURLState] = useState(imageURL)
  const [titleState, setTitleState] = useState(title)
  const [contentState, setContentState] = useState(content)
  const [adsURLState, setAdsURLState] = useState(adsURL)
  const [statusState, setStatusState] = useState(status)
  const [timeStartState, setTimeStartState] = useState(timeStart)
  const [timeEndState, setTimeEndState] = useState(timeEnd)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr>
      <Td minWidth={{ sm: "50px" }} pl="0px">
        <Link href={`/purity-ui-dashboard#/advertisement/${id}`}>
          <Avatar src={imageURLState} w="50px" borderRadius="12px" me="18px" />
        </Link>
      </Td>
      <Td>
        <Link href={`/purity-ui-dashboard#/advertisement/${id}`}>
          <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
            {titleState}
          </Text>
        </Link>
      </Td>
      <Td>
        <Link href={`/purity-ui-dashboard#/advertisement/${id}`}>
          <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
            {contentState}
          </Text>
        </Link>
      </Td>
      <Td maxWidth={{ sm: "200px" }}>
        <Link fontSize="md" color={textColor} fontWeight="bold" pb=".5rem" href={adsURL} isExternal>
          {adsURLState}
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
          {statusState}
        </Badge>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {moment(timeStartState).format('YYYY/MM/DD kk:mm:ss')}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {moment(timeEndState).format('YYYY/MM/DD kk:mm:ss')}
        </Text>
      </Td>
      <Td>
        <Button p="0px" bg="transparent" variant="no-hover" onClick={onOpen}>
          <Text
            fontSize="md"
            color="gray.400"
            fontWeight="bold"
            cursor="pointer"
          >
            Sửa
          </Text>
        </Button>
        <AddOrEditAdvertisement
          isOpen={isOpen} onClose={onClose}
          id={id}
          imageURLState={imageURLState}
          titleState={titleState}
          contentState={contentState}
          adsURLState={adsURLState}
          statusState={statusState}
          timeStartState={timeStartState}
          timeEndState={timeEndState}
          setImageURLState={setImageURLState}
          setTitleState={setTitleState}
          setContentState={setContentState}
          setAdsURLState={setAdsURLState}
          setStatusState={setStatusState}
          setTimeStartState={setTimeStartState}
          setTimeEndState={setTimeEndState}
        ></AddOrEditAdvertisement>
        <Button p="0px" bg="transparent" variant="no-hover" onClick={async () => {
          await deleteDataAdvertisement(id)
          window.location.reload()
        }}>
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
