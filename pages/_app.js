import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../components/layouts/main.js"
import theme from '../libs/theme.js'
const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Layout router={router}>
                <Component {...pageProps} key = {router.route} />
            </Layout>
        </ChakraProvider>
    )
}

export default Website