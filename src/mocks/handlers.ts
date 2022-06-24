import { implementEmployer } from '../services/implement-employer/implement-employer.msw'
import { retrieveOrganizationInfo } from '../services/retrieve-organization-info/retrieve-organization-info.msw'

export const handlers = [implementEmployer, retrieveOrganizationInfo]
