import styled from 'styled-components'
import { BaseInput } from './BaseInput'

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
