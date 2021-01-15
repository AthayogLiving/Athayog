import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import SkeletonTable from '@/components/admin/SkeletonTable';
import DataTable from '@/components/admin/DataTable';
function UsersTable() {
     const { data } = useSWR('/api/users', fetcher);

     if (!data) {
          return <SkeletonTable />;
     }

     console.log(data);

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
