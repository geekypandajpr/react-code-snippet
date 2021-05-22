type User = {
  id: number
  name: string // login name
  email?: string
  first_name?: string
  middle_name?: string
  last_name?: string
  sap_customer_no?: string
  // UI control
  role: Role
  permissions: Permission[]
}

type Role = 'admin' | 'tech' | 'aesthetician'

type Permission = 'maintenance' | 'treatment'


type UserState = {
  users?: User[]
}
