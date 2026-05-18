

import type { Employee } from "./types/employee";

export const MOCK_EMPLOYEES: Employee[] = [
    { id: "1", name: "João Silva", email: "joao@blackamber.com", password: "123456", job: "barista", active: true, avatarUrl: "" },
    { id: "2", name: "Maria Santos", email: "maria@blackamber.com", password: "123456", job: "cashier", active: true, avatarUrl: "" },
    { id: "3", name: "Pedro Almeida", email: "pedro@blackamber.com", password: "admin123", job: "manager", active: true, avatarUrl: "" },
    { id: "4", name: "Ana Oliveira", email: "ana@blackamber.com", password: "123456", job: "barista", active: false, avatarUrl: "" },
    { id: "5", name: "Carlos Souza", email: "carlos@blackamber.com", password: "123456", job: "staff", active: true, avatarUrl: "" },
    { id: "6", name: "Sofia Pereira", email: "sofia@blackamber.com", password: "123456", job: "barista", active: true, avatarUrl: "" },
    { id: "7", name: "Miguel Costa", email: "miguel@blackamber.com", password: "admin123", job: "manager", active: false, avatarUrl: "" },
    { id: "8", name: "Helena Rodrigues", email: "helena@blackamber.com", password: "123456", job: "staff", active: true, avatarUrl: "" },
    { id: "9", name: "Gonçalo Fernandes", email: "goncalo@blackamber.com", password: "123456", job: "cashier", active: true, avatarUrl: "" },
    { id: "10", name: "Beatriz Martins", email: "beatriz@blackamber.com", password: "123456", job: "barista", active: true, avatarUrl: "" },
];


import type { InventoryItem} from "./types/inventory";


export const MOCK_ITEMS_INVENTORY: InventoryItem[] = [
    { id: "1", name: "Arabica Coffee Beans", code: "COF-001", amount: 45, unit: "kg", status: "In Stock" },
    { id: "2", name: "Whole Milk", code: "MLK-001", amount: 8, unit: "L", status: "Low Stock" },
    { id: "3", name: "Oat Milk", code: "MLK-002", amount: 12, unit: "L", status: "In Stock" },
    { id: "4", name: "Vanilla Syrup", code: "SYR-001", amount: 3, unit: "L", status: "Low Stock" },
    { id: "5", name: "Paper Cups (Medium)", code: "CUP-001", amount: 250, unit: "un", status: "In Stock" },
    { id: "6", name: "Croissant (Frozen)", code: "PST-001", amount: 0, unit: "un", status: "Out of Stock" },
    { id: "7", name: "Chocolate Powder", code: "CHO-001", amount: 5, unit: "kg", status: "Low Stock" },
];

import type { MenuItem } from "./types/menu";

export const MOCK_ITEMS_MENU: MenuItem[] = [
    {
        id: "1",
        name: "Amber Reserve Espresso",
        description: "Dark roast, honey processed, notes of molasses and sun-dried cherry.",
        category: "Hot Coffee",
        price: 4.50,
        imageUrl: "",
    },
    {
        id: "2",
        name: "Obsidian Cold Brew",
        description: "24-hour steep, velvety mouthfeel, smooth chocolate finish.",
        category: "Cold Brew",
        price: 5.75,
        imageUrl: "",
    },
    {
        id: "3",
        name: "Artisan Croissant",
        description: "Flaky, buttery layers, baked fresh daily with French butter.",
        category: "Pastry",
        price: 3.50,
        imageUrl: "",
    },
];


import type { Order } from "./types/order";

export const MOCK_ORDERS: Order[] = [
    {
        id: "1",
        customer: "John Doe",
        code: "ORD-1234",
        items: { "Coffee": 1, "Croissant": 2 },
        observations: "No sugar in the coffee",
        status: "In Progress",
        total: 15.99,
    },
    {
        id: "2",
        customer: "Jane Smith",
        code: "ORD-5678",
        items: { "Latte": 1, "Muffin": 1 },
        observations: "Extra hot latte",
        status: "Created",
        total: 12.50,
    },
    {
        id: "3",
        customer: "Bob Johnson",
        code: "ORD-9012",
        items: { "Espresso": 1, "Bagel": 1 },
        observations: "No cream in the espresso",
        status: "Ready",
        total: 10.75,
    },
    {
        id: "4",
        customer: "Alice Williams",
        code: "ORD-3456",
        items: { "Cappuccino": 2, "Scone": 1 },
        observations: "Add cinnamon to the cappuccino",
        status: "Late",
        total: 14.20,
    },
    {
        id: "5",
        customer: "Charlie Brown",
        code: "ORD-7890",
        items: { "Americano": 1, "Donut": 2 },
        observations: "No cream in the americano",
        status: "Canceled",
        total: 11.50,
    },
    {
        id: "6",
        customer: "Emma Davis",
        code: "ORD-1122",
        items: { "Mocha": 1, "Brownie": 1 },
        observations: "Serve without whipped cream",
        status: "Created",
        total: 13.40,
    },
    {
        id: "7",
        customer: "Liam Wilson",
        code: "ORD-3344",
        items: { "Flat White": 2, "Cookie": 3 },
        observations: "Cookies on the side",
        status: "In Progress",
        total: 18.90,
    },
    {
        id: "8",
        customer: "Olivia Martin",
        code: "ORD-5566",
        items: { "Macchiato": 1, "Pie": 1 },
        observations: "Heat the pie before serving",
        status: "Ready",
        total: 16.25,
    },
    {
        id: "9",
        customer: "Noah Garcia",
        code: "ORD-7788",
        items: { "Iced Coffee": 2, "Sandwich": 1 },
        observations: "No ice in one of the coffees",
        status: "Late",
        total: 19.80,
    },
    {
        id: "10",
        customer: "Sophia Lee",
        code: "ORD-9900",
        items: { "Tea": 1, "Scone": 2 },
        observations: "Jam on the side",
        status: "Created",
        total: 12.10,
    },
];




import type { User } from "./types/user";

export const MOCK_USERS: User[] = [
    {
        id: "1",
        name: "João Silva",
        email: "[EMAIL_ADDRESS]",
        active: true,
        avatarUrl: "",
        orders: 0,
        saved: 0,
        score: 0,
    },
    {
        id: "2",
        name: "Maria Santos",
        email: "[EMAIL_ADDRESS]",
        active: true,
        avatarUrl: "",
        orders: 0,
        saved: 0,
        score: 0,
    },
    {
        id: "3",
        name: "Pedro Almeida",
        email: "[EMAIL_ADDRESS]",
        active: true,
        avatarUrl: "",
        orders: 0,
        saved: 0,
        score: 0,
    },
    {
        id: "4",
        name: "Ana Oliveira",
        email: "[EMAIL_ADDRESS]",
        active: false,
        avatarUrl: "",
        orders: 0,
        saved: 0,
        score: 0,
    },
    {
        id: "5",
        name: "Carlos Souza",
        email: "[EMAIL_ADDRESS]",
        active: true,
        avatarUrl: "",
        orders: 0,
        saved: 0,
        score: 0,
    },
    {
        id: "6",
        name: "Sofia Pereira",
        email: "[EMAIL_ADDRESS]",
        active: true,
        avatarUrl: "",
        orders: 0,
        saved: 0,
        score: 0,
    },
    {
        id: "7",
        name: "Miguel Costa",
        email: "[EMAIL_ADDRESS]",
        active: false,
        avatarUrl: "",
        orders: 0,
        saved: 0,
        score: 0,
    },
    {
        id: "8",
        name: "Helena Rodrigues",
        email: "[EMAIL_ADDRESS]",
        active: true,
        avatarUrl: "",
        orders: 0,
        saved: 0,
        score: 0,
    },
    {
        id: "9",
        name: "Gonçalo Fernandes",
        email: "[EMAIL_ADDRESS]",
        active: true,
        avatarUrl: "",
        orders: 0,
        saved: 0,
        score: 0,
    },
    {
        id: "10",
        name: "Beatriz Martins",
        email: "[EMA    IL_ADDRESS]",
        active: true,
        avatarUrl: "",
        orders: 0,
        saved: 0,
        score: 0,
    },
];