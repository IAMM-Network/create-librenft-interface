import styled from 'styled-components'

export const TitleSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-direction: column;
  margin-bottom: 2rem;
`

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 600;
`

export const Description = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: white;
`

export const BoxOption = styled.div<{ active?: boolean }>`
  background-color: ${({ active }) => (active ? '#8B40F4' : '#1A1A1A')};
  border: 2px solid ${({ active }) => (active ? '#8B40F4' : '#6D6D6D')};
  display: grid;
  place-items: center;
  padding: 1rem;
  border-radius: 3px;
  color: ${({ active }) => (active ? 'white' : '#585858')};
  font-weight: 600;
  cursor: pointer;
`
export const FormLabel = styled.div `
  color: white;
  padding-top:20px;
  padding-bottom:20px;
  text-align: left;
`
export const Input = styled.input<{ disabled?: boolean }>`
  background: transparent;
  border: 1px solid #8b40f4;
  border-color: ${({ disabled }) => (disabled ? '#8b40f4' : '#8b40f4')};
  border-radius: 8px;
  box-sizing: border-box;
  color: white;
  margin-top: 0.5rem;
  padding: 1rem;
  height: 44px;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ disabled }) => (disabled ? '#696969' : 'white')};
    opacity: 1; /* Firefox */
  }
`
export const ColumSection = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top:2px;
  height:100%;
  width: 100%;
  justify-items: center;
  justify-content: center;
  grid-column-gap: 20px;
`
