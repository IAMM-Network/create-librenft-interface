import { BigNumber, ethers } from "ethers"
import { Dispatch, SetStateAction } from "react"
import { Flex, Grid } from "../../../components/Box"
import Checkbox from "../../../components/Checkbox/Checkbox"
import InputPrice from "../../../components/InputPrice/InputPrice"
import Selector from "../../../components/Selector/Selector"
import { Tokens } from "../../../components/Selector/types"
import { NFTConfig } from "../CreateSingleNFT"
import { Input, Section } from "../styles"
import { Text } from "../styles"

export interface PaymentTokenProps {
    nftConfig: NFTConfig
    setNftConfig: Dispatch<SetStateAction<NFTConfig>>
}


const PaymentTokens = (props: PaymentTokenProps) => {
    return (
        <>
            <Section>
                <Flex flexDirection='column'>
                    <Text weight={600} size='14px' >
                        Payment tokens *
                    </Text>
                    <Text margin='0.5rem 0 0 0'>Enter token address or leave zero for CKB.</Text>

                    {/* Input text field with func on change */}
                    <Input
                        placeholder='Enter token address'
                        value={props.nftConfig.payment_token}
                        onChange={(e) => {
                            props.setNftConfig({
                                ...props.nftConfig,
                                payment_token: e.target.value,
                            })
                        }
                        }
                    />
                    <Text margin='0.5rem 0 0 0'>Enter token decimals or leave 18 for default</Text>

                    <Input
                        id='token-decimals'
                        placeholder='Enter token decimals or leave 18 for default'
                        defaultValue={18}


                    />
                    <Text margin='0.5rem 0 0 0'>Enter NFT sale price</Text>

                    <Input
                        placeholder='Enter NFT sale price'
                        defaultValue={props.nftConfig.price}
                        onChange={(e) => {
                            let decimals = document.querySelector('#token-decimals') as HTMLInputElement;
                            let price = BigNumber.from(e.target.value).mul(BigNumber.from(10).pow(parseInt(decimals.value)));
                            console.log('Token price: ', price.toString());
                            props.setNftConfig({
                                ...props.nftConfig,
                                price: price.toString(),
                            })
                        }
                        }
                    />



                </Flex>
            </Section >
        </>
    )
}

export default PaymentTokens