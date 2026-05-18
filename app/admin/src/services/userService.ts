import type { User } from "shared-utils/types/user";
import { MOCK_USERS } from "shared-utils/MockBD.js";

// In-memory store (will be replaced by API calls)
let users: User[] = [...MOCK_USERS];

// ──────────────────────────────────────────────
// Service functions
// ──────────────────────────────────────────────

/** Fetch all users */
export async function fetchUsers(): Promise<User[]> {
    // TODO: Replace with actual API call
    // Example: return await fetch("/api/users").then((res) => res.json());
    return [...users];
}

/** Update user (by ID) */
export async function updateUser(id: string, updates: Partial<User>): Promise<User> {
    // TODO: Replace with actual API call
    // Example: return await fetch(`/api/users/${id}`, {
    //   method: "PATCH",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(updates),
    // }).then((res) => res.json());

    users = users.map((u) => (u.id === id ? { ...u, ...updates } : u));
    const updatedUser = users.find((u) => u.id === id);
    if (!updatedUser) throw new Error(`User ${id} not found`);
    return updatedUser;
}

/** Update user status (active/inactive) */
export async function updateUserStatus(id: string, active: boolean): Promise<User> {
    return updateUser(id, { active });
}

/** Delete a user */
export async function deleteUser(id: string): Promise<void> {
    // TODO: Replace with actual API call
    // Example: await fetch(`/api/users/${id}`, { method: "DELETE" });
    users = users.filter((u) => u.id !== id);
}

/** Create a new user */
export async function createUser(userData: Omit<User, "id">): Promise<User> {
    // TODO: Replace with actual API call
    // Example: return await fetch("/api/users", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(userData),
    // }).then((res) => res.json());

    const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        ...userData,
    };
    users.push(newUser);
    return newUser;
}

/** Filter users by job or status */
export async function filterUsers(
    filters: { job?: string; active?: boolean }
): Promise<User[]> {
    // TODO: Replace with actual API call
    // Example: return await fetch("/api/users", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(filters),
    // }).then((res) => res.json());

    return users.filter((user) => {
        let match = true;

        if (filters.active !== undefined) {
            match = match && user.active === filters.active;
        }

        return match;
    });
}



