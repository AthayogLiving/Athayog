import {
     Table,
     Thead,
     Tbody,
     Tr,
     Th,
     Td,
     Input,
     chakra,
     Box,
     Button,
     useColorModeValue,
     Badge
} from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import {
     useTable,
     useSortBy,
     useGlobalFilter,
     useFilters,
     usePagination
} from 'react-table';
import { useMemo } from 'react';

import GlobalFilter from './Filters/GlobalFilter';
import ColumnFilter from './Filters/ColumnFilter';
import SelectColumnFilter from './Filters/SelectColumnFilter';
import NumberFilter from './Filters/NumberFilter';

export const Conditions = ({ values }) => {
     // Loop through the array and create a badge-like component instead of a comma-separated string
     return (
          <>
               {values.map((conditions, idx) => {
                    console.log('Data', conditions);
                    return (
                         <Badge
                              className="badge"
                              mr={2}
                              colorScheme="teal"
                              rounded="full"
                         >
                              {conditions}
                         </Badge>
                    );
               })}
          </>
     );
};

const FormsData = ({ forms }) => {
     const data = useMemo(() => forms, []);
     console.log(forms);

     const columns = useMemo(
          () => [
               {
                    Header: 'Name',
                    accessor: 'name',
                    Filter: ColumnFilter
               },
               {
                    Header: 'email',
                    accessor: 'email',
                    Filter: ColumnFilter
               },
               {
                    Header: 'phone',
                    accessor: 'phone',
                    Filter: NumberFilter,
                    filter: 'number'
               },
               {
                    Header: 'gender',
                    accessor: 'gender',
                    Filter: SelectColumnFilter,
                    filter: 'equals'
               },

               {
                    Header: 'course',
                    accessor: 'course',
                    Filter: SelectColumnFilter,
                    filter: 'includes'
               },
               {
                    Header: 'referral',
                    accessor: 'referral',
                    Filter: SelectColumnFilter,
                    filter: 'includes'
               },
               {
                    Header: 'conditions',

                    accessor: 'conditions',
                    Cell: ({ cell: { value } }) => (
                         <Conditions values={value} />
                    ),
                    Filter: ColumnFilter,
                    filter: 'array'
               },

               {
                    Header: 'type',
                    accessor: 'type',
                    Filter: SelectColumnFilter,
                    filter: 'includes'
               }
          ],
          []
     );

     const {
          getTableProps,
          getTableBodyProps,
          headerGroups,
          rows,
          prepareRow,
          state,

          setGlobalFilter,
          ...setAllFilters
     } = useTable({ columns, data }, useFilters, useGlobalFilter, useSortBy);

     const { globalFilter } = state;

     const bg = useColorModeValue('white', 'gray.800');

     return (
          <>
               <GlobalFilter
                    filter={globalFilter}
                    setFilter={setGlobalFilter}
               />

               <Table
                    {...getTableProps()}
                    bg={bg}
                    shadow="base"
                    rounded="lg"
                    padding={5}
                    colorScheme="green"
               >
                    <Thead>
                         {headerGroups.map((headerGroup) => (
                              <Tr {...headerGroup.getHeaderGroupProps()}>
                                   {headerGroup.headers.map((column) => (
                                        <>
                                             <Th {...column.getHeaderProps()}>
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
                                                  <div>
                                                       {column.canFilter ? (
                                                            column.render(
                                                                 'Filter'
                                                            )
                                                       ) : (
                                                            <Box mt="1">
                                                                 <Input visibility="hidden" />
                                                            </Box>
                                                       )}
                                                  </div>
                                             </Th>
                                        </>
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
                                                  isNumeric={cell.column}
                                             >
                                                  {cell.render('Cell')}
                                             </Td>
                                        ))}
                                   </Tr>
                              );
                         })}
                    </Tbody>
               </Table>
          </>
     );
};

export default FormsData;
