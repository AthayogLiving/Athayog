import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import SkeletonTable from '@/components/shared/SkeletonTable';
import DataTable from '@/components/admin/DataTable';
function UsersTable() {
     const { data } = useSWR('/api/users', fetcher);

     if (!data) {
          return <SkeletonTable />;
     }

     return (
          <>
               {data.users ? (
                    <DataTable users={data.users} />
               ) : (
                    <>
                         <h1>No Users</h1>
                    </>
               )}
          </>
     );
}

export default UsersTable;
