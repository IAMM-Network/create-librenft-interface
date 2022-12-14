import { Box, BoxProps } from '../Box'

const Container: React.FC<BoxProps> = ({ children, ...props }) => (
  <Box className='container' mx='auto' width="90%" maxWidth='540px' {...props}>
    {children}
  </Box>
)

export default Container
