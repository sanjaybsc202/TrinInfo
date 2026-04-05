import { create } from 'zustand';
import { Role, User } from '@/types/models';
import { users } from '@/data/mock';

interface AuthState {
  currentUser: User | null;
  loginAsRole: (role: Role) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  currentUser: users[2],
  loginAsRole: (role) => set({ currentUser: users.find((u) => u.role === role) ?? users[2] }),
  logout: () => set({ currentUser: null }),
}));
