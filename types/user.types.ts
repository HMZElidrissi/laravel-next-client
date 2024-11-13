export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string | null;
    created_at?: string;
    updated_at?: string;
    avatar?: string | null;
    roles?: string[];
    permissions?: string[];
}

// Common user-related states
export type UserState = {
    user: User | null;
    isLoading: boolean;
    error?: string | null;
};

// User registration data
export interface UserRegistrationData extends Partial<User> {
    password: string;
    password_confirmation: string;
}

// User update data
export interface UserUpdateData extends Partial<User> {
    current_password?: string;
    new_password?: string;
    new_password_confirmation?: string;
}

export type { User as default };
