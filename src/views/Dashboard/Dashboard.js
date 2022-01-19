import React, { useEffect, useState } from 'react';
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { tablesTableData, tablesTableDataUser } from "variables/general";
import TableUserRow from 'components/Tables/TableUserRow';

export default function Dashboard() {
  const [listAds, setListAds] = useState([]);
  const textColor = useColorModeValue("gray.700", "white");

  useEffect(async () => {
    // setListAds([])
    await tablesTableDataUser().then(value => { setListAds(value) });
  }, []);
  console.log(listAds);

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Quảng Cáo
          </Text>
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
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {listAds.map((row) => {
                return (
                  <TableUserRow
                    imageURL={row.imageUrl}
                    title={row.title}
                    content={row.content}
                    adsURL={row.advertismentUrl}
                    id={row.id}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}
