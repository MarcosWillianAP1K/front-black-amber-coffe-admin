/**
 * Employee Service — Data access layer for staff/employees.
 *
 * Currently uses in-memory mock data.
 * Replace with real API calls when backend is ready.
 */

import type { Employee } from "shared-utils/types/employee";
import { MOCK_EMPLOYEES } from "shared-utils/MockBD.js";


let nextId = 11;



let employees = [...MOCK_EMPLOYEES];

// ──────────────────────────────────────────────
// Service functions
// ──────────────────────────────────────────────

/** Fetch all employees */
export async function fetchEmployees(): Promise<Employee[]> {
    // TODO: return await fetch("/api/employees").then(res => res.json());
    return [...employees];
}

/** Create a new employee */
export async function createEmployee(data: Omit<Employee, "id">): Promise<Employee> {
    // TODO: return await fetch("/api/employees", { method: "POST", body: JSON.stringify(data) }).then(res => res.json());
    const newEmployee: Employee = {
        id: String(nextId++),
        ...data,
    };
    employees = [...employees, newEmployee];
    return newEmployee;
}

/** Update an existing employee */
export async function updateEmployee(id: string, updates: Partial<Employee>): Promise<Employee> {
    // TODO: return await fetch(`/api/employees/${id}`, { method: "PATCH", body: JSON.stringify(updates) }).then(res => res.json());
    employees = employees.map((e) => (e.id === id ? { ...e, ...updates } : e));
    const updated = employees.find((e) => e.id === id);
    if (!updated) throw new Error(`Employee ${id} not found`);
    return updated;
}

/** Toggle employee active/inactive status */
export async function toggleEmployeeStatus(id: string): Promise<Employee> {
    const employee = employees.find((e) => e.id === id);
    if (!employee) throw new Error(`Employee ${id} not found`);
    return updateEmployee(id, { active: !employee.active });
}

/** Delete an employee */
export async function deleteEmployee(id: string): Promise<void> {
    // TODO: await fetch(`/api/employees/${id}`, { method: "DELETE" });
    employees = employees.filter((e) => e.id !== id);
}
