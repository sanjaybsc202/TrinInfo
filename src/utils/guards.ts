import { Role } from '@/types/models';

const roleLevel: Record<Role, number> = {
  user: 1,
  moderator: 2,
  admin: 3,
};

export function hasRole(required: Role, current?: Role | null) {
  if (!current) return false;
  return roleLevel[current] >= roleLevel[required];
}
