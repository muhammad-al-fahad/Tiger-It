import React from 'react';
import {
    Avatar,
    Badge,
    Box,
    Button,
    Card,
    Divider,
    Flex,
    Grid,
    Group,
    Image,
    Paper,
    Rating,
    SegmentedControl,
    Tabs,
    Text,
    Title
} from "@mantine/core";
import mobilePics from "../../assets/Frame 1000001047.png"
import mobile from "../../assets/Rectangle 24.png"
import Specification from "./Specification";
import {IconDiscountCheckFilled} from "@tabler/icons-react";
import MobilePhoneInfoCard from "./MobilePhoneInfoCard";

const ProductDetails = () => {
    return (
        <Paper p="xl">
            <Flex w="100%" justify="space-between" gap="xl">
                <Card h="70vh" w="30%" mx="xl">
                    <Image src={mobile}/>
                </Card>
                <Flex direction="column" py="xl" h="100%" gap="lg" w="50%" mx="xl">
                    <Text fw={700}>iPhone 14 Pro Max 256GB Deep Purple 5G - Middle East Version</Text>
                    <Group>
                        <span>4.5</span>
                        <Rating defaultValue={2}/>
                        <span style={{color: "#767C8C"}}>(56 ratings)</span>
                    </Group>
                    <Group>
                        <Text fw={700}>$ 1300</Text>
                        <span style={{color: "#767C8C"}}>$ 1300</span>
                        <span style={{color: "#62BE12"}}>28% off</span>
                    </Group>
                    <Text>Color black</Text>
                    <Image src={mobilePics} w={300}/>
                    <Text>Internal Memory</Text>
                    <SegmentedControl color="#62BE12" data={['128 GB', '256 GB', '512 Gb']} w="50%"/>
                    <Flex my="lg" w="50%" justify="space-between">
                        <Button color="#62BE12" w="40%">Buy Now</Button>
                        <Button color="#62BE12" w="40%" variant="outline">Add To Cart</Button>
                    </Flex>
                </Flex>
            </Flex>
            <Flex w="100%" my="lg">
                <Tabs color="#62BE12" defaultValue="Highlights" w="100%">
                    <Tabs.List>
                        <Tabs.Tab value="Highlights">
                            Highlights
                        </Tabs.Tab>
                        <Tabs.Tab value="Specifications">
                            Specifications
                        </Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value="Highlights">
                        <Specification/>
                    </Tabs.Panel>
                    <Tabs.Panel value="Specifications">
                        <Specification/>
                    </Tabs.Panel>
                </Tabs>
            </Flex>
            <Divider/>
            <Flex w="100%" my="lg" direction="column" gap="xl">
                <span style={{color: "#767C8C"}}>Ratings & Reviews</span>
                <Flex justify="space-between">
                    <Flex w="200px" direction="column" gap="lg">
                        <Flex gap="xl">
                            <Badge variant="light" color="gray" size="lg">4.5/5</Badge>
                            <Flex direction="column">
                                <span style={{color: "#767C8C"}}>Overall Rating</span>
                                <Text>574 Ratings</Text>
                            </Flex>
                        </Flex>
                        <Rating size="lg" defaultValue={2}/>
                    </Flex>
                    <Button variant="outline" color="#62BE12" w="20%">Rate</Button>
                </Flex>
                <Divider/>
                <Flex direction="column" gap="lg">
                    {[1, 2, 3, 4, 5, 6].map((_) => {
                        return (
                            < >
                                <Group>
                                    <Avatar src={null} alt="no image here"/>
                                    <Flex direction="column">
                                        <Text>Ravid Gohar</Text>
                                        <span style={{color: "#767C8C"}}>03 March 2022</span>
                                    </Flex>
                                    <IconDiscountCheckFilled color="#1677FF"/>
                                    <Text color="#1677FF">Verified Purchase</Text>
                                </Group>
                                <Rating defaultValue={2}/>
                                <Text>I was afraid to buy an expensive phone in an online store, but the risks were
                                    justified. Fully
                                    sealed, new phone. By the way, iphone 14 pro max is not available anywhere, I found
                                    it only here
                                    and at the best price.</Text>
                            </>
                        )
                    })}
                    <Button variant="outline" color="#62BE12" w="20%">view less</Button>
                </Flex>
            </Flex>
            <Divider/>
            <Box my="xl">
                <Title my="lg">More From Apple</Title>
                <Grid>
                    {[1, 2, 3, 4, 5, 6, 7].map((_) => {
                        return <MobilePhoneInfoCard/>
                    })}
                </Grid>
            </Box>
            <Divider/>
            <Title my="xl">Bestselling products</Title>
            <Grid>
                {[1, 2, 3, 4, 5].map((_) => {
                    return <MobilePhoneInfoCard/>
                })}
            </Grid>
        </Paper>
    );
};

export default ProductDetails;