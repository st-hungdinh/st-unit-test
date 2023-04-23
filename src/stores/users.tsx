/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';

export const usersStore = create((set) => ({
  users: null,
  setUsers: (users: any) => set(() => ({ users }))
}));
