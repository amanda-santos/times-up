import { ReactElement, useContext } from 'react'
import { useFormContext } from 'react-hook-form'

import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { CyclesContext } from '../..'

export const NewCycleForm = (): ReactElement => {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">I&apos;ll work on</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Give a name to your task"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Read a chapter" />
        <option value="Watch a lesson" />
        <option value="Study" />
      </datalist>

      <label htmlFor="minutesAmount">for</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutes.</span>
    </FormContainer>
  )
}
