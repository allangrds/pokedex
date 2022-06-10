import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import './src/lib/i18n'

beforeAll(() => {
  userEvent.setup()
});
