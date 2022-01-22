import React, { useEffect, useState } from 'react';
// Chakra imports
import {
    Flex,
    Image,
    Table,
    Tbody,
    Text,
    Container,
    Stack,
    SimpleGrid,
    Box,
    Heading,
    Th,
    Thead,
    Tr,
    useColorModeValue,
    ChakraProvider,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import routes from "routes.js";
import theme from "theme/theme.js";
import MainPanel from 'components/Layout/MainPanel';
import { detailAdvertisement } from "variables/general";

export default function DetailAdvertisement(props) {
    const [sidebarVariant, setSidebarVariant] = useState("transparent");
    const paramId = props.match.params.param1
    const [advertisement, setAdvertisement] = useState({ title: '', content: '', imageUrl: '' });
    const textColor = useColorModeValue("gray.700", "white");
    const mainPanel = React.createRef();

    useEffect(async () => {
        const dataAdvertisement = await detailAdvertisement(paramId);
        setAdvertisement(dataAdvertisement)
    }, []);
    console.log("🚀 ~ file: DetailAdvertisement.js ~ line 23 ~ DetailAdvertisement ~ advertisement", advertisement)

    return (
           
        // <Container maxW={'7xl'}>
        <ChakraProvider theme={theme} resetCss={false}>

                    <Sidebar
                    routes={routes}
                    logoText={"PURITY UI DASHBOARD"}
                    display="none"
                    sidebarVariant={sidebarVariant}
                    />
                    <MainPanel
                        ref={mainPanel}
                        w={{
                        base: "100%",
                        xl: "calc(100% - 275px)",
                        }}
                    >

                        <Image
                            rounded={'md'}
                            alt={'advertisement image'}
                            src={advertisement === undefined ? '' : advertisement.imageUrl}
                            fit={'cover'}
                            align={'center'}
                            w={'100%'}
                            h={'500px'}
                        />
                        <Stack spacing={{ base: 6, md: 10 }}>
                        <Box as={'header'}>
                            <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                            Tiêu đề: {advertisement.title}
                            </Heading>
                            <Text
                            color={useColorModeValue('gray.900', 'gray.400')}
                            fontWeight={300}
                            fontSize={'2xl'}>
                            Nội dung: {advertisement.content}
                            </Text>
                        </Box>
                        </Stack>
                    </MainPanel>
        </ChakraProvider>
        // </Container>
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
