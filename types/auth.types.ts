export interface AuthProps {
    middleware?: string;
    redirectIfAuthenticated?: string;
}

export interface RegisterProps {
    setErrors: (errors: string[]) => void;
    [key: string]: any;
}

export interface LoginProps {
    setErrors: (errors: string[]) => void;
    setStatus: (status: string) => void;
    [key: string]: any;
}

export interface ForgotPasswordProps {
    setErrors: (errors: string[]) => void;
    setStatus: (status: string) => void;
    email: string;
}

export interface ResetPasswordProps {
    setErrors: (errors: string[]) => void;
    setStatus: (status: string) => void;
    [key: string]: any;
}

export interface ResendEmailVerificationProps {
    setStatus: (status: string) => void;
}

export interface ErrorMessages {
    email?: string[];
    password?: string[];
    password_confirmation?: string[];
    [key: string]: string[] | undefined;
}
