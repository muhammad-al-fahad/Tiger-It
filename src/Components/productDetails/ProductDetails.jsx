import React, {useState} from 'react';
import {
    Anchor,
    Avatar,
    Badge,
    Box,
    Breadcrumbs,
    Button,
    Card,
    Divider,
    em,
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
import mobile1 from "../../assets/img1.png"
import mobile2 from "../../assets/img2.png"
import mobile3 from "../../assets/img3.png"
import mobile4 from "../../assets/img4.png"
import Specification from "./Specification";
import {IconDiscountCheckFilled} from "@tabler/icons-react";
import MobilePhoneInfoCard from "./MobilePhoneInfoCard";
import {useMediaQuery} from "@mantine/hooks";


const ProductDetails = () => {
    const isMedium = useMediaQuery(`(max-width: ${em(992)})`)
    const isSmall = useMediaQuery(`(max-width: ${em(768)})`)
    const imgs = [mobile1, mobile2, mobile3, mobile4]
    const [pic, setPic] = useState(mobile)
    const [selected, setSelected] = useState(0)
    const items = [
        {title: 'Mobile', href: '#'},
        {title: 'Apple', href: '#'},
        {title: 'iPhone 14 Pro Max 256GB Deep Purple ', href: '#'},
    ].map((item, index) => (
        <Anchor href={item.href} key={index}>
            {item.title}
        </Anchor>
    ));
    return (
        <Paper p="xl">
            <Breadcrumbs separator="→" mt="xs">{items}</Breadcrumbs>
            <Flex w="100%" direction={isMedium ? "column" : ""} justify="space-between" gap="xl">
                <Card w={isMedium ? "70%" : isSmall ? "100%" : "30%"} mx="xl">
                    <Image src={pic}/>
                    <Flex gap={12} justify="space-between" my="lg" h="100px">
                        {imgs.map((img, index) => {
                            return (
                                <Card withBorder={selected === index} p={0} color="blue">
                                    <Avatar onClick={() => {
                                        setPic(img)
                                        setSelected(index)
                                    }} style={{border: "1px blue", borderBlock: "blue"}}
                                            key={index} src={img} h="100%"
                                            w="100px" radius="xs"/>
                                </Card>
                            )
                        })}
                    </Flex>
                </Card>
                <Flex direction="column" py="xl" h="100%" gap="lg" w={isMedium ? "100%" : "50%"} mx="xl">
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
                    <SegmentedControl color="#62BE12" data={['128 GB', '256 GB', '512 Gb']}
                                      w={isSmall ? "80%" : "50%"}/>
                    <Flex my="lg" w={isSmall ? "80%" : "50%"} justify="space-between">
                        <Button color="#62BE12" w={isSmall ? "50%" : "40%"}>Buy Now</Button>
                        <Button color="#62BE12" w={isSmall ? "50%" : "40%"} variant="outline">Add To Cart</Button>
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
                <Flex justify="space-between" gap={isSmall ? "lg" : ""} direction={isSmall ? "column" : ""}>
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