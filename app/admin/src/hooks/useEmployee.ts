/**
 * useEmployee — Custom hook encapsulating employee/staff state and operations.
 *
 * Provides employees list and handlers ready to plug into SectionUsers.
 * Uses employeeService internally — when API is ready, only the service changes.
 */

import { useState, useCallback, useEffect } from "react";
import type { Employee } from "shared-utils/types/employee";
import * as employeeService from "../services/employeeService";

interface UseEmployeeReturn {
    employees: Employee[];
    isLoading: boolean;
    deleteEmployee: (id: string) => void;
    toggleEmployeeStatus: (id: string) => void;
}

export function useEmployee(): UseEmployeeReturn {
    const [employees, setEmployees] = useState<Employee[]>(() => {
        const stored = localStorage.getItem("employees");
        return stored ? JSON.parse(stored) : [];
    });
    const [isLoading, setIsLoading] = useState(() => !localStorage.getItem("employees"));

    // Initial fetch
    useEffect(() => {
        let cancelled = false;

        if (!localStorage.getItem("employees")) {
            employeeService.fetchEmployees().then((data) => {
                if (!cancelled) {
                    setEmployees(data);
                    localStorage.setItem("employees", JSON.stringify(data));
                    setIsLoading(false);
                }
            });
        }

        return () => { cancelled = true; };
    }, []);

    const deleteEmployee = useCallback(async (id: string) => {
        await employeeService.deleteEmployee(id);
        setEmployees((prev) => {
            const next = prev.filter((e) => e.id !== id);
            localStorage.setItem("employees", JSON.stringify(next));
            return next;
        });
    }, []);

    const toggleEmployeeStatus = useCallback(async (id: string) => {
        const updated = await employeeService.toggleEmployeeStatus(id);
        setEmployees((prev) => {
            const next = prev.map((e) => (e.id === id ? updated : e));
            localStorage.setItem("employees", JSON.stringify(next));
            return next;
        });
    }, []);

    return {
        employees,
        isLoading,
        deleteEmployee,
        toggleEmployeeStatus,
    };
}
