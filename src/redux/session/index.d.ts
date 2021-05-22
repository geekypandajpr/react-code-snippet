type SessionState = {
  user?: User
}

interface LoginPayload {
  username: string
  password: string
}