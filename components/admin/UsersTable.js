import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import SkeletonTable from '@/components/shared/SkeletonTable';
import DataTable from '@/components/admin/DataTable';
import { Box } from '@chakra-ui/react';
function UsersTable({ userType }) {
    const { data } = useSWR(`/api/${userType}`, fetcher);

    if (!data) {
        return <SkeletonTable />;
    }
    console.log(data);
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
