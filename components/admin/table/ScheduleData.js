import {
     Table,
     Thead,
     Tbody,
     Tr,
     Th,
     Td,
     chakra,
     Box,
     useColorModeValue
} from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { useTable, useSortBy } from 'react-table';
import React, { useMemo } from 'react';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';
import { useAuth } from '@/lib/auth';
import SkeletonTable from '@/components/shared/SkeletonTable';

const ScheduleData = () => {
     const bg = useColorModeValue('white', 'gray.800');
     const color = useColorModeValue('teal', 'gray.700');
     const { user } = useAuth();

     //  const { data } = useSWR(
     //       user ? [`/api/admin/schedule`, user.token] : null,
     //       fetcher,
     //       {
     //            refreshInterval: 100
     //       }
     //  );

     const data = useMemo(
          () => [
               {
                    col1: 'Hello',
                    col2: 'World'
               },
               {
                    col1: 'react-table',
                    col2: 'rocks'
               },
               {
                    col1: 'whatever',
                    col2: 'you want'
               }
          ],
          []
     );

     const columns = useMemo(
          () => [
               {
                    Header: 'Column 1',
                    accessor: 'col1' // accessor is the "key" in the data
               },
               {
                    Header: 'Column 2',
                    accessor: 'col2'
               }
          ],
          []
     );

     const {
          getTableProps,
          getTableBodyProps,
          headerGroups,
          rows,
          prepareRow
     } = useTable({ columns, data }, useSortBy);

     if (!data) {
          return <SkeletonTable />;
     }

     return (
          <Table
               {...getTableProps()}
               bg={bg}
               rounded="lg"
               padding={5}
               boxShadow="base"
          >
               <Thead>
                    {headerGroups.map((headerGroup) => (
                         <Tr {...headerGroup.getHeaderGroupProps()}>
                              {headerGroup.headers.map((column) => (
                                   <Th
                                        {...column.getHeaderProps(
                                             column.getSortByToggleProps()
                                        )}
                                        isNumeric={column.isNumeric}
                                   >
                                        {column.render('Header')}
                                        <chakra.span pl="4">
                                             {column.isSorted ? (
                                                  column.isSortedDesc ? (
                                                       <TriangleDownIcon aria-label="sorted descending" />
                                                  ) : (
                                                       <TriangleUpIcon aria-label="sorted ascending" />
                                                  )
                                             ) : null}
                                        </chakra.span>
                                   </Th>
                              ))}
                         </Tr>
                    ))}
               </Thead>
               <Tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                         prepareRow(row);
                         return (
                              <Tr {...row.getRowProps()}>
                                   {row.cells.map((cell) => (
                                        <Td
                                             {...cell.getCellProps()}
                                             isNumeric={cell.column.isNumeric}
                                        >
                                             {cell.render('Cell')}
                                        </Td>
                                   ))}
                              </Tr>
                         );
                    })}
               </Tbody>
          </Table>
     );
};

export default ScheduleData;
