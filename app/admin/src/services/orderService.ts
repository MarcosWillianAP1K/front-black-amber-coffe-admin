/**
 * Order Service — Data access layer for orders.
 *
 * Currently uses in-memory mock data.
 * Replace the implementations with real API calls when backend is ready.
 *
 * Each function is async to match the real API contract from day one.
 */

import type { Order, OrderStatus } from "shared-utils/types/order";
import { MOCK_ORDERS } from "shared-utils/MockBD.js";



// In-memory store (simulates server state)
let orders = [...MOCK_ORDERS];

// ──────────────────────────────────────────────
// Service functions
// ──────────────────────────────────────────────

/** Fetch all orders */
export async function fetchOrders(): Promise<Order[]> {
    // TODO: return await fetch("/api/orders").then(res => res.json());
    return [...orders];
}

/** Update the status of an order */
export async function updateOrderStatus(id: string, newStatus: OrderStatus): Promise<Order> {
    // TODO: return await fetch(`/api/orders/${id}/status`, { method: "PATCH", body: JSON.stringify({ status: newStatus }) }).then(res => res.json());
    const order = orders.find((o) => o.id === id);
    if (!order) throw new Error(`Order ${id} not found`);

    const updated = { ...order, status: newStatus };
    orders = orders.map((o) => (o.id === id ? updated : o));
    return updated;
}

/** Delete an order */
export async function deleteOrder(id: string): Promise<void> {
    // TODO: await fetch(`/api/orders/${id}`, { method: "DELETE" });
    orders = orders.filter((o) => o.id !== id);
}
