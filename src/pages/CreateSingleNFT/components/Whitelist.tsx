
import { Text, Section, Input, MediaWrapper, Preview, TextArea, Hr, A } from '../styles'
import  FileUploader  from './input/FileUploader'
import { Flex } from '../../../components/Box'
import { Dispatch, SetStateAction, useState } from 'react';

export interface WhitelistProps {
    whitelist: string[] | null
    setWhitelist: Dispatch<SetStateAction<string[]>>
}

// Create a string array from a CSV file
const parseWhitelistFromCSV = (file: File): string[] => {
    const reader = new FileReader()
    reader.readAsText(file)
    reader.onload = () => {
        const csv = reader.result as string
        const lines = csv.split('\n')
        const whitelist = lines.map(line => line.split(',')[0])
        const filteredWhitelist = whitelist.filter(address => address != "");
        console.log(filteredWhitelist)
        return filteredWhitelist
    }
    return []
}

const Whitelist = ({whitelist, setWhitelist}: WhitelistProps) => {

    const onSelectWhitelist = (e: any) => {
        if (!e.target.files || e.target.files.length === 0) {
          setWhitelist([])
          return
        }
    
        setWhitelist(parseWhitelistFromCSV(e.target.files[0]))
      }

    return (
        <Section>
            <Flex flexDirection='column' mt='1rem'>
            <Text weight={600} size='14px'>
                Whitelist
            </Text>
            <Text margin='0.5rem 0 0 0'>If your project has a list of OG addresses you can upload it in here.</Text>
            <FileUploader handleFile={onSelectWhitelist} accept='.csv' placeholder={whitelist ? "Uploaded file" : "Upload file..."}></FileUploader>
            </Flex>
        </Section>
    )
    }

export default Whitelist;