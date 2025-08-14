export interface User {
    id: string;
    username: string;
    email: string;
}

export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    loading: boolean;
    error: string | null;
}

export interface DashboardState {
    data: any; // Replace 'any' with a more specific type as needed
    loading: boolean;
    error: string | null;
}