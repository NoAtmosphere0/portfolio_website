import NextLink from 'next/link'
import {
    Container,
    Box,
    Heading,
    Image,
    Button,
    Link,
    useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section.js'
import Paragraph from '../components/paragraph.js'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio.js'

const Page = () => {
    return (
        <Container>
            <Box
                borderRadius="lg"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                p={3}
                mb={6}
                mt={5}
                align="center"
            >
                Hi, I'm a sophomore from the University of Science, VNU-HCM. <br></br>
                I major in Information Technology.
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Đặng Hoàng Long
                    </Heading>
                    <p>Developer/Competitive Coding enthusiast</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    align="center"
                >
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="120px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/Lonk.jpg"
                        alt="Profile Image"
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title" align="left">
                    About me
                </Heading>
                <Paragraph>Content</Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="https://www.linkedin.com/in/long-dang1109/">
                        <Button
                            colorScheme="teal"
                            rightIcon={<ChevronRightIcon />}
                        >
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title" align="left">
                    Bio
                </Heading>
                <BioSection align="left">
                    <BioYear>2003</BioYear>
                    Born in Ho Chi Minh City, Vietnam
                </BioSection>
                <BioSection align="left">
                    <BioYear>2018</BioYear>
                    High School for the Gifted, VNU-HCM (English specialization)
                </BioSection>
                <BioSection align="left" padding-right="4em">
                    <BioYear>2021 to present</BioYear>
                    University of Science, VNU-HCM
                </BioSection>

                <Heading as="h3" variant="section-title" align="left">
                    Hobbies
                </Heading>
                <Paragraph>Insert hobbies here</Paragraph>


                <Heading as="h3" variant="section-title" align="left">
                    Find me at
                </Heading>
                <Paragraph>
                    Insert some social media info
                </Paragraph>
            </Section>
        </Container>
    )
}

export default Page
