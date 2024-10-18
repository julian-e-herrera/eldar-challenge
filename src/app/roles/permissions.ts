import { Role } from "../types/Role";

const permissions = {
  user: {
    canCreate: false,
    canRead: true,
    canUpdate: false,
    canDelete: false,
  },
  admin: {
    canCreate: true,
    canRead: true,
    canUpdate: true,
    canDelete: true,
  },
};
export const isAdmin = (role: Role) => role === 'admin';
export const hasPermission = (role: Role) => permissions[role];

