import type { Prisma, DirectConversation } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.DirectConversationCreateArgs>({
  directConversation: {
    one: { data: { updatedAt: '2023-05-22T19:17:49.221Z' } },
    two: { data: { updatedAt: '2023-05-22T19:17:49.221Z' } },
  },
})

export type StandardScenario = ScenarioData<
  DirectConversation,
  'directConversation'
>
