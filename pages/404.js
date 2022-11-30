import NextLink from 'next/link'
import {
    Box,
    Heading,
    Container,
    Divider,
    Button,
    Text,
} from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container>
            <Heading as="h1">Not found...</Heading>
            <Text>There&apos;s nothing here, yet...</Text>
            <Divider my={6} />
            <Box my={6} align="center">
                <NextLink href="/" passHref>
                    <Button colorScheme={'teal'}>Back to homepage</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound