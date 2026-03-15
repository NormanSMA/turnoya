export type UserRole = 'owner' | 'client'

export interface User {
  id: string
  email: string
  full_name: string
  role: UserRole
  created_at: string
}

export interface Business {
  id: string
  owner_id: string
  name: string
  description: string | null
  phone: string | null
  address: string | null
  slug: string
  created_at: string
}

export interface Service {
  id: string
  business_id: string
  name: string
  duration_minutes: number
  price: number | null
  description: string | null
  is_active: boolean
}

export interface Slot {
  id: string
  business_id: string
  date: string
  start_time: string
  end_time: string
  is_available: boolean
}

export type AppointmentStatus = 'pending' | 'confirmed' | 'cancelled'

export interface Appointment {
  id: string
  business_id: string
  service_id: string
  slot_id: string
  client_name: string
  client_email: string
  client_phone: string | null
  status: AppointmentStatus
  notes: string | null
  created_at: string
  service?: Service
  slot?: Slot
}
