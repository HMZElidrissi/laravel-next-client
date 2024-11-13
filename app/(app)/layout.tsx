'use client';

import { useAuth } from '@/hooks/auth';
import Navigation from '@/app/(app)/Navigation';
import Loading from '@/app/(app)/Loading';

interface Props {
    children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
    const { user } = useAuth({ middleware: 'auth' });

    if (!user) {
        return <Loading />;
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Navigation />

            <main>{children}</main>
        </div>
    );
};

export default AppLayout;
