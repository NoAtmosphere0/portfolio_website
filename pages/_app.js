import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../components/layouts/main.js"
import Fonts from "../components/fonts.js"
import theme from '../lib/theme.js'
import { Analytics } from '@vercel/analytics/react';
 
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
 

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <Component {...pageProps} key = {router.route} />
            </Layout>
        </ChakraProvider>
    )
}

export {Website}; 
export default MyApp;