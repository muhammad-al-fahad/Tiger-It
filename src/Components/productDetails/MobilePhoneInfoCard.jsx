import React from 'react';
import {ActionIcon, Card, Flex, GridCol, Image, Rating, Text} from "@mantine/core";
import mobile from "../../assets/Rectangle 24.png";
import {IconHeart} from "@tabler/icons-react";

const MobilePhoneInfoCard = () => {
    return (
        <GridCol span={{base: 12, md: 6, lg: 3}}>
            <Flex w="300px">
                <Card w="100%" pos="relative" withBorder radius="lg">
                    <Image src={mobile} alt="image of mobile" w="200px" h="200px"/>
                    <ActionIcon style={{position: "absolute", top: 8, right: 6}} color="#E0E0E0"
                                radius="xl">
                        <IconHeart/>
                    </ActionIcon>
                    <Text fw={500}>iPhone 14 Pro Max 256GB Deep Purple</Text>
                    <Text fw={600}>$1300</Text>
                    <Flex gap="lg">
                        <span style={{color: "#A8AEBF"}}>$1450</span>
                        <span style={{color: "#62BE12"}}>28% off</span>
                    </Flex>
                    <Flex gap="lg" align="center">
                        <Rating defaultValue={2}/>
                        <span style={{color: "#A8AEBF"}}>4.2</span>
                    </Flex>
                </Card>
            </Flex>
        </GridCol>
    );
};

export default MobilePhoneInfoCard;