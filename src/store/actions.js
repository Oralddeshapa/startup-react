import {LOGIN} from './types'

export function login(username, role, token) {
  return {
    type: LOGIN,
    payload: {
      username: username,
      role: role,
      token: token,
    }
  }
}
