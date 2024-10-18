import { ReactNode } from "react";

import { Role } from "../types/Role";


type Props = {
  children: ReactNode;
  rol: Role ;
  permission:(rol: Role)=>boolean
};

export const HasRole = ({ children,permission, rol }: Props) => {
  return permission(rol) ? <>{children}</> : null;
};
