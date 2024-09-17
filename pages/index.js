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
                Hi, I&apos;m a senior and a Master &apos;s candidate from the University of Science, VNU-HCM.{' '}
                <br></br>I major in Information Technology. But I mostly work with LLMs.
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Đặng Hoàng Long
                    </Heading>
                    <p>IT Undergraduate | M.Sc. Computer Science Candidate | Enthusiastic AI Engineer</p>
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
                <Paragraph>Hi, I'm Long, a passionate and driven Master's student in Computer Science specializing in the exciting realms of Deep Learning and Natural Language Processing. 
                    Currently, I'm deeply engrossed in building intelligent systems that can understand and generate human-like text, with a particular focus on LLM-powered applications. 
                    My journey has equipped me with a strong command of Python, machine learning libraries like PyTorch and Scikit-learn, and a knack for turning complex data into actionable insights. 
                    I thrive in collaborative environments where innovation takes center stage and am always eager to embrace new challenges in the ever-evolving world of AI. 
                    Beyond the algorithms, you'll often find me sharing my knowledge through mentorship, volunteering at hackathons, and contributing to open-source projects. 
                    Let's connect and explore the fascinating possibilities of AI together!
                </Paragraph>

                <Box align="center" my={4}>
                    <NextLink href="https://www.linkedin.com/in/long-dang1109/">
                        <Button
                            colorScheme="teal"
                            rightIcon={<ChevronRightIcon />}
                        >
                            My&nbsp;<IoLogoLinkedin/>&nbsp;Profile
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                {/* Experience */}
                <Heading as="h3" variant="section-title" align="left">
                    Experience
                </Heading>
                <Paragraph>
                <BioSection align="left">
                    <BioYear>AI Engineer Intern @ AI Bid</BioYear>
                    June 2024 - September 2024
                    <br></br>
                        <li>Used OCR to extract text from a PDF file.</li>
                        <li>Practice text preprocessing techniques such as semantic chunking, sentence splitting.</li>
                        <li>Embed the split documents using an embedding model and store them in MongoDB Atlas database.</li>
                        <li>Used Ollama along with its APIs to speed-up inference.</li>
                        <li>Wrote RESTful APIs to connect the model backend with the frontend.</li>


                    
                </BioSection>
                
                </Paragraph>
            </Section>

            <Section delay={0.2}>
                {/* Research intereset section */}
                <Heading as="h3" variant="section-title" align="left">
                    Research Interests
                </Heading>
                <Paragraph>
                    <BioSection>
                        <BioYear align="left" padding-right="4em">Efficient AI</BioYear>
                    </BioSection>
                    <BioSection>
                        <BioYear align="left" padding-right="4em">Deep Learning</BioYear>
                    </BioSection>
                    <BioSection>
                        <BioYear align="left" padding-right="4em">Natural Language Processing</BioYear>
                    </BioSection>
                    {/* <BioYear align="left" padding-right="4em">Deep Learning</BioYear>
                    <BioYear align="left" padding-right="4em">Natural Language Processing</BioYear> */}
                </Paragraph>
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
                <BioSection align="left">
                    <BioYear>2024 to present</BioYear>
                    M.Sc. in Computer Science, University of Science, VNU-HCM
                </BioSection>

                {/* Hobbies section
                <Heading as="h3" variant="section-title" align="left">
                    Hobbies
                </Heading>
                <Paragraph>I am passi.</Paragraph> */}
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
