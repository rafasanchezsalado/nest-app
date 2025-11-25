class User {
    id: number;
    username: string;
    email: string;
    password: string;
    tasks: Task[];
    themePreference: 'dark' | 'light';

    constructor(id: number, username: string, email: string, password: string, tasks: Task[], themePreference: 'dark' | 'light') {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.tasks = tasks;
        this.themePreference = themePreference;
    }
}