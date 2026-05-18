/**
 * useUsers — Custom hook encapsulating user/staff state and operations.
 *
 * Provides users list and handlers ready to plug into SectionUsers.
 * Uses userService internally — when API is ready, only the service changes.
 */

import { useState, useCallback, useEffect } from "react";
import type { User } from "shared-utils/types/user";
import * as userService from "../services/userService";

interface UseUsersReturn {
    users: User[];
    isLoading: boolean;
    handleOptions: (id: string) => void;
    deleteUser: (id: string) => void;
    toggleUserStatus: (id: string) => void;
}

export function useUsers(): UseUsersReturn {
    const [users, setUsers] = useState<User[]>(() => {
        const stored = localStorage.getItem("users");
        return stored ? JSON.parse(stored) : [];
    });
    const [isLoading, setIsLoading] = useState(() => !localStorage.getItem("users"));

    // Initial fetch
    useEffect(() => {
        let cancelled = false;

        if (!localStorage.getItem("users")) {
            userService.fetchUsers().then((data) => {
                if (!cancelled) {
                    setUsers(data);
                    localStorage.setItem("users", JSON.stringify(data));
                    setIsLoading(false);
                }
            });
        }

        return () => { cancelled = true; };
    }, []);

    const handleOptions = useCallback((id: string) => {
        // TODO: Open a dropdown/modal with options (edit, ban, delete, etc.)
        console.log("Options for user:", id);
    }, []);

    const deleteUser = useCallback(async (id: string) => {
        await userService.deleteUser(id);
        setUsers((prev) => {
            const next = prev.filter((u) => u.id !== id);
            localStorage.setItem("users", JSON.stringify(next));
            return next;
        });
    }, []);

    const toggleUserStatus = useCallback(async (id: string) => {
        const user = users.find((u) => u.id === id);
        if (!user) return;

        const updated = await userService.updateUserStatus(id, !user.active);
        setUsers((prev) => {
            const next = prev.map((u) => (u.id === id ? updated : u));
            localStorage.setItem("users", JSON.stringify(next));
            return next;
        });
    }, [users]);

    return {
        users,
        isLoading,
        handleOptions,
        deleteUser,
        toggleUserStatus,
    };
}
