import { setupWorker } from 'msw'

import { handlers } from './handlers'

export const setupMocks = async () => {
  if (typeof window !== 'undefined') {
    const worker = setupWorker(...handlers)

    worker.start()
  }
}
