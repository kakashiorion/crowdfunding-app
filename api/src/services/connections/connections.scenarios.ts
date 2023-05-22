import type { Prisma, Connection } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ConnectionCreateArgs>({
  connection: {
    one: { data: { updatedAt: '2023-05-22T19:26:46.484Z' } },
    two: { data: { updatedAt: '2023-05-22T19:26:46.484Z' } },
  },
})

export type StandardScenario = ScenarioData<Connection, 'connection'>
