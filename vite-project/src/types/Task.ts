export interface Task {
    id: string;
    name: string;
    status: "Pending" | "In Progress" | "Completed";
    priority: "Low" | "Medium" | "High";
    description: string;
}

export interface TaskFormData {
    name: string;
    status: "Pending";
    priority: "Low";
    description: string;
}