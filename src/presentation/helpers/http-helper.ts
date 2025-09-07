import { httpResponse } from '../protocols/http'

export const badRequest = (error: Error): httpResponse => ({
  statusCode: 400,
  body: error
})
export const forBidden = (error: Error): httpResponse => ({
  statusCode: 403,
  body: error
})
