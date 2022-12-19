import styled from 'styled-components'

interface CircleButtonProps {
  active: boolean
  onClick?: () => any
  disabled?: boolean
}

interface TextProps {
  color?: string
}

const StyledCircleButton = styled.button<{ active?: boolean }>`
  background-color: ${({ active }) => (active ? '#8B40F4' : '#696969')};
  border: none;
  border-radius: 8px;
  display: grid;
  height: 44px;
  padding: 0.3rem;
  place-items: center;
  width: 44px;
`

const Text = styled.h6<TextProps>`
  color: ${({ color }) => (color ? color : 'white')};
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
`

const CircleButton: React.FC<CircleButtonProps> = ({ active, disabled, ...props }) => (
  <StyledCircleButton active={active} {...props} style={{ cursor: disabled ? "not-allowed" : "pointer" }}>
    <Text color={disabled ? "#7e7d7d" :"white"}>+</Text>
  </StyledCircleButton>
)

export default CircleButton
