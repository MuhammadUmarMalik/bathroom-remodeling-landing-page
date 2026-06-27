'use client'

import { create } from 'zustand'

interface BookingState {
  isModalOpen: boolean
  selectedService: string
  open: (service?: string) => void
  close: () => void
  setService: (service: string) => void
}

export const useBookingStore = create<BookingState>((set) => ({
  isModalOpen: false,
  selectedService: '',
  open: (service = '') => set({ isModalOpen: true, selectedService: service }),
  close: () => set({ isModalOpen: false }),
  setService: (service) => set({ selectedService: service }),
}))
