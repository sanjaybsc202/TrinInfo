import { Redirect } from 'expo-router';
import { PropsWithChildren } from 'react';
import { useAuthStore } from '@/store/auth-store';
import { Role } from '@/types/models';
import { hasRole } from '@/utils/guards';

export function RoleGuard({ role, children }: PropsWithChildren<{ role: Role }>) {
  const currentRole = useAuthStore((s) => s.currentUser?.role);
  if (!hasRole(role, currentRole)) {
    return <Redirect href="/forbidden" />;
  }
  return children;
}
