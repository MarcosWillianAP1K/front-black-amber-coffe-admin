/**
 * useOrders — Custom hook encapsulating order state and operations.
 *
 * Provides the orders list and action handler ready to plug into CardOrder components.
 * Uses orderService internally — when the backend is ready, only the service changes.
 */

import { useState, useCallback, useEffect } from "react";
import type { Order, OrderStatus } from "shared-utils/types/order";
import * as orderService from "../services/orderService";

/** Maps UI button actions to their resulting OrderStatus */
const ACTION_STATUS_MAP: Record<string, OrderStatus> = {
    start: "In Progress",
    hold: "Created",
    ready: "Ready",
    complete: "Ready", // Business logic can refine this
};

interface UseOrdersReturn {
    orders: Order[];
    isLoading: boolean;
    handleAction: (orderId: string, action: string) => void;
}

export function useOrders(): UseOrdersReturn {
    const [orders, setOrders] = useState<Order[]>(() => {
        const stored = localStorage.getItem("orders");
        return stored ? JSON.parse(stored) : [];
    });
    const [isLoading, setIsLoading] = useState(() => !localStorage.getItem("orders"));

    // Initial fetch
    useEffect(() => {
        let cancelled = false;

        if (!localStorage.getItem("orders")) {
            orderService.fetchOrders().then((data) => {
                if (!cancelled) {
                    setOrders(data);
                    localStorage.setItem("orders", JSON.stringify(data));
                    setIsLoading(false);
                }
            });
        }

        return () => { cancelled = true; };
    }, []);

    const handleAction = useCallback(async (orderId: string, action: string) => {
        if (action === "delete") {
            await orderService.deleteOrder(orderId);
            setOrders((prev) => {
                const next = prev.filter((o) => o.id !== orderId);
                localStorage.setItem("orders", JSON.stringify(next));
                return next;
            });
            return;
        }

        const newStatus = ACTION_STATUS_MAP[action];
        if (!newStatus) return;

        const updated = await orderService.updateOrderStatus(orderId, newStatus);
        setOrders((prev) => {
            const next = prev.map((o) => (o.id === orderId ? updated : o));
            localStorage.setItem("orders", JSON.stringify(next));
            return next;
        });
    }, []);

    return {
        orders,
        isLoading,
        handleAction,
    };
}
