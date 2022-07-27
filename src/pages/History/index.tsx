import { ReactElement } from 'react'
import { formatDistanceToNow } from 'date-fns'

import { useCyclesContext } from '../../hooks/useCyclesContext'
import { Cycle } from '../../types'
import { HistoryContainer, HistoryList, Status } from './styles'

export const History = (): ReactElement => {
  const { cycles } = useCyclesContext()

  return (
    <HistoryContainer>
      <h1>My history</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Started at</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map(
              ({
                id,
                minutesAmount,
                startDate,
                task,
                finishedDate,
                interruptedDate,
              }: Cycle) => (
                <tr key={id}>
                  <td>{task}</td>
                  <td>{minutesAmount} minutes</td>
                  <td>
                    {formatDistanceToNow(new Date(startDate), {
                      addSuffix: true,
                    })}
                  </td>
                  <td>
                    {finishedDate && <Status $color="green">Done</Status>}

                    {interruptedDate && (
                      <Status $color="red">Interrupted</Status>
                    )}

                    {!finishedDate && !interruptedDate && (
                      <Status $color="yellow">In progress</Status>
                    )}
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
