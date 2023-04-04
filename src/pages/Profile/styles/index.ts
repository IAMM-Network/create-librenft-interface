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
