import { Role } from "./Role";

export interface User {
    id: number, email: string, password: string, role: Role
}