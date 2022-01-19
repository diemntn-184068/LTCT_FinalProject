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
import { useHistory } from "react-router-dom";

function TableUserRow(props) {
    const { imageURL, title, content, id } = props;
    const textColor = useColorModeValue("gray.700", "white");
    const history = useHistory()
    return (
        <Tr>
            <Td minWidth={{ sm: "50px" }} pl="0px">
                <Avatar src={imageURL} w="50px" borderRadius="12px" me="18px" onClick={() => {
                    history.push(`/advertisement/${id}`)
                }} />
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
        </Tr >
    );
}

export default TableUserRow;
