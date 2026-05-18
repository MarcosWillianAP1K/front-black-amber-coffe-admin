/**
 * Menu Service — Data access layer for menu items.
 *
 * Currently uses in-memory mock data.
 * Replace the implementations with real API calls when backend is ready.
 *
 * Each function is async to match the real API contract from day one.
 */

import type { MenuItem, MenuItemFormData } from "shared-utils/types/menu";
import { MOCK_ITEMS_MENU } from "shared-utils/MockBD.js";


let nextId = 4;



// In-memory store (simulates server state)
let items = [...MOCK_ITEMS_MENU];

// ──────────────────────────────────────────────
// Service functions
// ──────────────────────────────────────────────

/** Fetch all menu items */
export async function fetchMenuItems(): Promise<MenuItem[]> {
    // TODO: return await fetch("/api/menu-items").then(res => res.json());
    return [...items];
}

/** Create a new menu item */
export async function createMenuItem(data: MenuItemFormData): Promise<MenuItem> {
    // TODO: return await fetch("/api/menu-items", { method: "POST", body: JSON.stringify(data) }).then(res => res.json());
    const newItem: MenuItem = {
        id: String(nextId++),
        name: data.name,
        description: data.description,
        category: data.category,
        price: data.price,
        imageUrl: data.imageUrl,
    };
    items = [...items, newItem];
    return newItem;
}

/** Update an existing menu item */
export async function updateMenuItem(id: string, data: MenuItemFormData): Promise<MenuItem> {
    // TODO: return await fetch(`/api/menu-items/${id}`, { method: "PUT", body: JSON.stringify(data) }).then(res => res.json());
    const updated: MenuItem = {
        id,
        name: data.name,
        description: data.description,
        category: data.category,
        price: data.price,
        imageUrl: data.imageUrl,
    };
    items = items.map((item) => (item.id === id ? updated : item));
    return updated;
}

/** Delete a menu item by ID */
export async function deleteMenuItem(id: string): Promise<void> {
    // TODO: await fetch(`/api/menu-items/${id}`, { method: "DELETE" });
    items = items.filter((item) => item.id !== id);
}
