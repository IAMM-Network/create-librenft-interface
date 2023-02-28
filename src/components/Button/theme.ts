import { variants } from './types'

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: 'transparent',
    color: '#8B40F4',
    borderColor: '#8B40F4',
    fontWeight: 600,
  },
  [variants.SECONDARY]: {
    backgroundColor: 'transparent',
    borderColor: '#696969',
    color: '#696969',
    fontWeight: 400,
  },
  [variants.CTA]: {
    backgroundColor: '#8B40F4',
    color: 'white',
    borderColor: '#8B40F4',
    fontWeight: 900,
  },
  [variants.UNI]: {
    backgroundColor: '#F46040',
    color: 'white',
    borderColor: '#F46040',
    fontWeight: 800,
    marginTop: 10,
  },
}
