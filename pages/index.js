import { Container, Box, Heading } from "@chakra-ui/react"


const Page = () => {
    return <Container>
        <Box borderRadius="lg" bg = "gray" p={3} mb={6} align="center">
            Hi, I'm Lonk, and I'm a IT Sophomore from the University of Science, VNU-HCM
        </Box>
        <Box display = {{md: 'flex'}}>
            <Box flexGrow = {1}>
                <Heading as="h2" variant="page-title">
                    Đặng Hoàng Long
                </Heading>
                <p>Developer/Competitive Coding enthusiast</p>
            </Box>
        </Box>
    </Container> 
}

export default Page