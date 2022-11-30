import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 7px;
    &:hover {
        color: #2D3748;
        box-shadow: 0 5px 15px #008080;

    }
`
const Logo = () => {
    return (
        <Link href="/">
                <LogoBox>
                    <Text 
                        ml={1} 
                        mb={2}
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily = 'M PLUS Rounded 1c'
                        fontWeight='bold'
                        alignItems={'center'}
                    >
                        Đặng Hoàng Long
                    </Text>
                </LogoBox>
        </Link>
    )   
}

export default Logo
