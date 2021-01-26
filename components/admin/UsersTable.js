import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import SkeletonTable from '@/components/shared/SkeletonTable';
import DataTable from '@/components/admin/DataTable';
import { Box } from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
function UsersTable({ userType }) {
    const { user } = useAuth();
    const { data } = useSWR(
        user ? [`/api/${userType}`, user.token] : null,
        fetcher,
        {
            refreshInterval: 500
        }
    );

    if (!data) {
        return <SkeletonTable />;
    }

    return (
        <>
            {data.users ? (
                <>
                    <DataTable users={data.users} userType={userType} />
                </>
            ) : (
                <>
                    <h1>No Users</h1>
                </>
            )}
        </>
    );
}

export default UsersTable;
