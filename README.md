# Laravel Breeze - Next.js TypeScript Edition ▲

## Introduction

This repository is a TypeScript implementation of the [Laravel Breeze](https://laravel.com/docs/starter-kits) application / authentication starter kit frontend in [Next.js](https://nextjs.org). All of the authentication boilerplate is already written for you - powered by [Laravel Sanctum](https://laravel.com/docs/sanctum), allowing you to quickly begin pairing your beautiful Next.js frontend with a powerful Laravel backend.

## Installation

1. First, create a directory for your project and navigate into it:

```bash
mkdir nextjs-laravel-project
cd nextjs-laravel-project
```

2. Create a Next.js compatible Laravel backend by installing Laravel Breeze into a [fresh Laravel application](https://laravel.com/docs/installation) and installing Breeze's API scaffolding:

```bash
# Create the Laravel application...
laravel new api

cd api

# Install Breeze and dependencies...
composer require laravel/breeze --dev

php artisan breeze:install api

# Run database migrations...
php artisan migrate
```

3. Set your application's environment variables in `.env`:
```env
APP_URL=http://localhost:8000
FRONTEND_URL=http://localhost:3000
```

4. Start the Laravel development server:
```bash
php artisan serve
```

5. Clone this repository:

```bash
git clone https://github.com/HMZElidrissi/laravel-next-client.git
```

6. Install dependencies using PNPM:
```bash 
pnpm install
```

7. Copy the environment file and configure your backend URL:
```bash
cp .env.example .env
```

8. Update `.env`:
```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```

9. Start the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## Authentication Hook

This Next.js application contains a strongly-typed `useAuth` React hook that handles all authentication logic. The hook provides comprehensive TypeScript support for authentication operations including login, registration, password reset, and email verification.

### Basic Usage

```typescript
const ExamplePage = () => {
    const { user, logout } = useAuth({ 
        middleware: 'auth',
        redirectIfAuthenticated: '/dashboard'
    });

    return (
        <>
            <p>Welcome {user?.name}</p>
            <button onClick={logout}>Sign out</button>
        </>
    );
};
```

### Hook Interface

```typescript
interface AuthProps {
    middleware?: string;         // 'auth' | 'guest'
    redirectIfAuthenticated?: string;
}

// The hook provides the following typed methods:
const {
    user,              // The authenticated user object
    register,          // Register a new user
    login,            // Log in an existing user
    forgotPassword,   // Initiate password reset
    resetPassword,    // Complete password reset
    resendEmailVerification,  // Resend verification email
    logout            // Log out the current user
} = useAuth({ middleware: 'auth' });
```

### Authentication Operations

```typescript
// Registration
const registerUser = async () => {
    const setErrors = (errors: string[]) => {
        // Handle validation errors
    };
    
    await register({
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password',
        password_confirmation: 'password',
        setErrors,
    });
};

// Login
const loginUser = async () => {
    const setErrors = (errors: string[]) => {
        // Handle validation errors
    };
    const setStatus = (status: string) => {
        // Handle status updates
    };
    
    await login({
        email: 'john@example.com',
        password: 'password',
        remember: true,
        setErrors,
        setStatus,
    });
};

// Password Reset
const resetUserPassword = async () => {
    const setErrors = (errors: string[]) => {
        // Handle validation errors
    };
    const setStatus = (status: string) => {
        // Handle status updates
    };
    
    await forgotPassword({
        email: 'john@example.com',
        setErrors,
        setStatus,
    });
};
```

The hook integrates with Laravel Sanctum for secure authentication and handles CSRF protection automatically. It also manages email verification states and redirects based on authentication status.

> Note: The optional chaining operator (`user?.name`) is used to safely access user properties during Next.js's initial server-side render.
> For convenience, [Ziggy](https://github.com/tighten/ziggy#spas-or-separate-repos) may be used to reference your Laravel application's named route URLs from your React application.

## Development Scripts

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run type checking
pnpm type-check

# Run linting
pnpm lint

# Format code
pnpm format
```
