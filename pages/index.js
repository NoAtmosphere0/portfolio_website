import NextLink from 'next/link'
import {
    Container,
    Box,
    Heading,
    Image,
    Button,
    Link,
    List, 
    ListItem,
    Icon,
    useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section.js'
import Paragraph from '../components/paragraph.js'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio.js'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { FaKaggle } from 'react-icons/fa'

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
                Hi, I&apos;m a junior and a Master &apos;s candidate from the University of Science, VNU-HCM.{' '}
                <br></br>I major in Information Technology.
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Đặng Hoàng Long
                    </Heading>
                    <p>IT Undergraduate | MSc AI Candidate | Enthusiastic ML Engineer</p>
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

                {/* About me content */}
                <Paragraph>I am a highly motivated and enthusiastic junior with a passion for machine learning and deep learning. 
                    With a strong foundation in mathematics and programming, I am eager to further my knowledge and skills in this rapidly growing field. 
                    My experience with Python and hands-on projects have given me the ability to effectively pre-process and visualize data, and implement machine learning algorithms. 
                    I am also actively involved in online communities and competitions, such as Kaggle, to stay up-to-date with industry trends and collaborate with like-minded individuals. 
                    I am eager to pursue jobs and real-world projects to gain hands-on experience and make a meaningful impact in the field of machine learning and deep learning.

                </Paragraph>

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
                {/* Bio section */}
                <Heading as="h3" variant="section-title" align="left">
                    Bio
                </Heading>
                <BioSection align="left">
                    <BioYear>2018</BioYear>
                    High School for the Gifted, VNU-HCM (English class)
                </BioSection>
                <BioSection align="left" padding-right="4em">
                    <BioYear>2021 to present</BioYear>
                    University of Science, VNU-HCM
                </BioSection>

                {/* Hobbies section */}
                <Heading as="h3" variant="section-title" align="left">
                    Hobbies
                </Heading>
                <Paragraph>I like to read about the newest technologies in Machine Learning. Sometimes I even search around for cool datasets and I will try to analyze it.</Paragraph>
            </Section>

            <Section delay={0.3}>
                {/* Contact info section  */}
                <Heading as="h3" variant="section-title" align="left">
                    Find me at
                </Heading>
                {/* List containing infos */}
                <List>

                    {/* GitHub info */}
                    <ListItem align = "left">
                        <Link href="https://github.com/NoAtmosphere0" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}/>}>
                                @NoAtmosphere0
                            </Button>
                        </Link>
                    </ListItem>

                    {/* LinkedIn info */}
                    <ListItem align = "left">
                        <Link href="https://www.linkedin.com/in/long-dang1109/" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin}/>}>
                                @long-dang1109
                            </Button>
                        </Link>
                    </ListItem>

                    {/* Kaggle info */}
                    <ListItem align = "left">
                        <Link href="https://www.kaggle.com/dhlongg" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={FaKaggle}/>}>
                                @Đặng Hoàng Long
                            </Button>
                        </Link>
                    </ListItem>

                </List>
            </Section>
        </Container>
    )
}

export default Page
