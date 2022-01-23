import React, { useEffect, useState } from "react";
// Chakra imports
import {
  Button,
  Flex,
  ModalOverlay,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import { MdAddCircleOutline } from 'react-icons/md'
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TablesTableRow from "components/Tables/TablesTableRow";
import { tablesTableData } from "variables/general";
import AddAdvertisement from "components/Modal/NewAdvertisement";

const Tables = () => {
  const [listAds, setListAds] = useState([]);
  const textColor = useColorModeValue("gray.700", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(async () => {
    await tablesTableData().then(value => {
      setListAds(value);
    });
  }, []);
  // console.log(listAds);

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Quảng Cáo
          </Text>
          <Icon boxSize={'30px'} ml={'5px'} style={{cursor:'pointer'}} as={MdAddCircleOutline} onClick={onOpen} />
          <AddAdvertisement isOpen={isOpen} onClose={onClose}/>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th pl="0px" color="gray.400">
                  Ảnh
                </Th>
                <Th color="gray.400">Tiêu đề</Th>
                <Th color="gray.400">Nội dung</Th>
                <Th color="gray.400">Link quảng cáo</Th>
                <Th color="gray.400">Status</Th>
                <Th color="gray.400">Thời gian bắt đầu</Th>
                <Th color="gray.400">Thời gian kết thúc</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {listAds.map(row => {
                return (
                  <TablesTableRow
                    id={row.id}
                    imageURL={row.imageUrl}
                    title={row.title}
                    content={row.content}
                    adsURL={row.advertismentUrl}
                    status={row.status}
                    timeStart={row.startAt}
                    timeEnd={row.endAt}
                    key={row.id}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default Tables;
