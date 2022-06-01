export interface Task {
    id: number;
    name: string;
    description: string;
    startDate?: Date;
    endDate?: Date;
    members?: string[];
    completed: boolean;
    status?: string;
    comments?: number;
    attachments?: number;
}