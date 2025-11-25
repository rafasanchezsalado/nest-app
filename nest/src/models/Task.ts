class Task {
    id: number;
    name: string;
    description: string;
    completed: boolean;
    repetition: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'custom';
    repetitionDays?: string[];
    startDate: Date;
    endDate: Date;
    priority: number;

    constructor(id: number, name: string, description: string, repetition: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'custom', repetitionDays: string[] | undefined, startDate: Date, endDate: Date, priority: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.completed = false;
        this.repetition = repetition;
        this.repetitionDays = repetitionDays;
        this.startDate = startDate;
        this.endDate = endDate;
        this.priority = priority;
    }
}