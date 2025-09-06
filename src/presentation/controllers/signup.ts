import { MissingParamError } from '../errors/missing-param-error'
import { httpRequest, httpResponse } from '../protocols/http'
import { badRequest } from './helpers/http-helper'

export class SignUpController {
  handle (httpRequest: httpRequest): httpResponse {
    const requiredFields = ['name', 'email', 'password']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
