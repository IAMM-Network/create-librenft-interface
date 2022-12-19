import { Dispatch, SetStateAction } from 'react'
import { Flex, Box } from '../../../components/Box'
import { CircleCheckIcon, DownArrowIcon } from '../../../components/Svg'
import { Select } from './styles'

export interface SelectCollectionProps {
  disabled: boolean
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  collections: any[]
}

const SelectCollection = ({ disabled, isOpen, collections, setIsOpen }: SelectCollectionProps) => {
  return (
    <Select flexDirection='column' marginTop='1rem' disabled={disabled} isOpen={isOpen} setIsOpen={setIsOpen} collections={collections}>
      <Flex width='100%' justifyContent={isOpen ? 'center' : 'space-between'}>
        {!isOpen && <h4>Select collection</h4>}
        <DownArrowIcon onClick={() => setIsOpen(!isOpen)} fill={disabled ? '#696969' : 'white'} width={15} height={15} />
      </Flex>
      {isOpen && (
        <Flex flexDirection='column' width='100%'>
          {collections.map(({ id, name }, key) => (
            <Flex key={`${key - id - name}`} justifyContent='space-between' width='100%' padding='.2rem'>
                <span style={{color: 'white'}}>{name}</span>
                <CircleCheckIcon style={{ cursor: 'pointer' }} width={15} height={15} />
            </Flex>
          ))}
          <Flex justifyContent='center' marginTop='0.5rem'>
            <span style={{ color: 'white', cursor: 'pointer', fontSize:'12px' }}>view more collections</span>
          </Flex>
        </Flex>
      )}
    </Select>
  )
}

SelectCollection.defaultProps = {
  disabled: false,
  isOpen: false,
}

export default SelectCollection
