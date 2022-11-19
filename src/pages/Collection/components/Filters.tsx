import { Box, Flex, Grid } from "../../../components/Box"
import { SearchIcon } from "../../../components/Svg"
import { InputWrapper, TextInput } from "../styles"

const Filters = () => (
    <Flex flexDirection="column" width="90%" margin="0 auto">
        <InputWrapper>
            <Box>
                <SearchIcon height="20px" />
            </Box>
            <TextInput type="text" placeholder="Search" />
        </InputWrapper>

        <InputWrapper>
            <Box>
                <SearchIcon fill="#1A1A1A" />
            </Box>
            <TextInput type="text" placeholder="Sort by" />
        </InputWrapper>

        <InputWrapper>
            <Box>
                <SearchIcon fill="#1A1A1A" />
            </Box>
            <TextInput type="text" placeholder="Single NFTs" />
        </InputWrapper>
    </Flex>
)

export default Filters
