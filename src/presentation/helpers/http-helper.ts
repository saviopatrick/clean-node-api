import { httpResponse } from '../protocols/http'

export const badRequest = (error: Error): httpResponse => ({
  statusCode: 400,
  body: error
})
export const forBidden = (error: Error): httpResponse => ({
  statusCode: 403,
  body: error
})
export const notFound = (error: Error): httpResponse => ({
  statusCode: 404,
  body: error
})
export const serverError = (error: Error): httpResponse => ({
  statusCode: 500,
  body: error
})
