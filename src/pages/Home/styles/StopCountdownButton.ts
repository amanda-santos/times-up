import styled from 'styled-components'
import { BaseCountdownButton } from './BaseCountdownButton'

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${({ theme }) => theme['red-500']};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme['red-700']};
  }
`
