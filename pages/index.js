import { Container, Box, Heading, Image } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="gray" p={3} mb={6} mt={5} align="center">
                Hi, I'm a sophomore from the University of
                Science, VNU-HCM. My major is Information Technology.
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
        </Container>
    )
}

export default Page
