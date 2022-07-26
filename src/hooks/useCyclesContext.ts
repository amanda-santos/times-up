import { useContext } from 'react'

import { CyclesContext, CyclesContextType } from '../contexts/CyclesContext'

export const useCyclesContext = (): CyclesContextType => {
  const context = useContext(CyclesContext)

  if (!context)
    throw new Error('useCyclesContext must be used within a CyclesProvider')

  return context
}
