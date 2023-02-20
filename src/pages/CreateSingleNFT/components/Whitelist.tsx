
import { Text, Section, Input, MediaWrapper, Preview, TextArea, Hr, A } from '../styles'
import FileUploader from './input/FileUploader'
import { Flex } from '../../../components/Box'
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import MerkleTree from 'merkletreejs';
import { keccak256 } from 'ethers/lib/utils';
import { NFTConfig } from '../CreateSingleNFT';

export interface WhitelistProps {
    nftConfig: NFTConfig
    setNftConfig: Dispatch<SetStateAction<NFTConfig>>
}

const createMerkleTree = (whitelist: string[]) => {
    const leaves = whitelist.map(address => keccak256(address))
    const merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true })
    return merkleTree
}


const Whitelist = ({ nftConfig, setNftConfig }: WhitelistProps) => {

    const handleOnChange = (e: any) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const csv = reader.result as string
            const lines = csv.split('\n')
            const whitelist = lines.map(line => line.split(',')[0])
            const filteredWhitelist = whitelist.filter(address => address != "");
            setNftConfig({ ...nftConfig, whitelist: filteredWhitelist })
        }
        reader.readAsText(file);
    };

    return (
        <Section>
            <Flex flexDirection='column' mt='1rem'>
                <Text weight={600} size='14px'>
                    Whitelist
                </Text>
                <Text margin='0.5rem 0 0 0'>If your project has a list of OG addresses you can upload it in here.</Text>
                {/* <input id="whitelist" type="file" accept=".csv" /> */}

                <FileUploader handleFile={handleOnChange} accept='.csv' placeholder={nftConfig.whitelist ? "Uploaded file" : "Upload file..."}></FileUploader>
            </Flex>
        </Section>
    )
}

export default Whitelist;