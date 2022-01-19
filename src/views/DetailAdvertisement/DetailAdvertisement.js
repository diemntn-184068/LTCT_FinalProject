import React, { useEffect, useState } from 'react';
// Chakra imports
import {
    Flex,
    Image,
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
import { detailAdvertisement } from "variables/general";

export default function DetailAdvertisement(props) {
    const paramId = props.match.params.param1
    const [advertisement, setAdvertisement] = useState({ title: '', content: '', imageUrl: '' });
    const textColor = useColorModeValue("gray.700", "white");

    useEffect(async () => {
        const dataAdvertisement = await detailAdvertisement(paramId);
        setAdvertisement(dataAdvertisement)
    }, []);
    console.log("🚀 ~ file: DetailAdvertisement.js ~ line 23 ~ DetailAdvertisement ~ advertisement", advertisement)

    return (
        <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
            <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
                <CardHeader p="6px 0px 22px 0px">
                    <Text fontSize="xl" color={textColor} fontWeight="bold">
                        Tiêu đề: {advertisement.title}
                    </Text>

                    <Text fontSize="xl" color={textColor} fontWeight="bold">
                        Nội dung: {advertisement.content}
                    </Text>

                </CardHeader>
                <CardBody>
                    <Image src={advertisement === undefined ? '' : advertisement.imageUrl} alt='Dan Abramov' />
                </CardBody>
            </Card>
        </Flex>
    )
    // return (
    //     <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
    //         <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
    //             <CardHeader p="6px 0px 22px 0px">
    //                 {/* <Text fontSize="xl" color={textColor} fontWeight="bold">
    //                     Tiêu đề: ${advertisement.title}
    //                 </Text> */}

    //                 <Text fontSize="xl" color={textColor} fontWeight="bold">
    //                     Quảng Cáo Chi Tiết
    //                 </Text>

    //                 <Text fontSize="xl" color={textColor} fontWeight="bold">
    //                     Quảng Cáo Chi Tiết
    //                 </Text>

    //             </CardHeader>
    //             <CardBody>
    //                 <Image src={advertisement.imageUrl} alt='Dan Abramov' />
    //             </CardBody>
    //         </Card>
    //     </Flex>
    // );
}
