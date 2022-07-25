import styled from 'styled-components'
import { BaseCountdownButton } from './BaseCountdownButton'

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme['gray-100']};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme['green-700']};
  }
`
