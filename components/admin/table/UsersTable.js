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
     Badge,
     ButtonGroup,
     Text,
     Flex,
     Select
} from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { useTable, useSortBy, useFilters, usePagination } from 'react-table';
import { useMemo } from 'react';

import ColumnFilter from './Filters/ColumnFilter';
import SelectColumnFilter from './Filters/SelectColumnFilter';
import NumberFilter from './Filters/NumberFilter';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
import { ImBackward2, ImForward2 } from 'react-icons/im';
import { RiLoader3Fill } from 'react-icons/ri';
import firebase from '@/lib/firebase';
import { FirebaseToDate } from '@/components/helper/FirebaseToDate';
import useSWR from 'swr';
import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';
import Link from 'next/link';
const firestore = firebase.firestore();

export const UserLink = ({ values, index }) => {
     // Loop through the array and create a badge-like component instead of a comma-separated string
     return (
          <>
               <Link
                    key={index}
                    className="badge"
                    mr={2}
                    href={`/admin/customers/${values}`}
                    colorScheme="teal"
                    rounded="full"
               >
                    <Button colorScheme="teal" size="sm">
                         {' '}
                         Check User
                    </Button>
               </Link>
          </>
     );
};

export const DateCreated = ({ values }) => {
     // Loop through the array and create a badge-like component instead of a comma-separated string
     return <>{FirebaseToDate(values)}</>;
};

const UsersTable = ({ users, latestDoc, setDocs }) => {
     const data = useMemo(() => users, []);

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
                    Header: 'Order ID',
                    accessor: 'orderId',
                    Filter: ColumnFilter
               },
               {
                    Header: 'Actions',
                    accessor: 'id',
                    Cell: ({ cell: { value } }) => <UserLink values={value} />,
                    Filter: ColumnFilter
               }
          ],
          []
     );

     const {
          getTableProps,
          getTableBodyProps,
          headerGroups,
          page,
          prepareRow,
          state,
          nextPage,
          canNextPage,
          canPreviousPage,
          previousPage,
          pageOptions,
          gotoPage,
          setPageSize,
          pageSize
     } = useTable({ columns, data }, useFilters, useSortBy, usePagination);

     const { pageIndex } = state;

     const loadMoreDoc = () => {
          setDocs(users[users.length - 1]);
     };

     const bg = useColorModeValue('white', 'gray.800');

     return (
          <>
               {/* <Box>Showing Date Between {forms[0].createdAt}</Box> */}

               <Table
                    {...getTableProps()}
                    bg={bg}
                    shadow="base"
                    rounded="lg"
                    padding={5}
                    mt={3}
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
                         {page.map((row) => {
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
               <Flex
                    bg={bg}
                    padding="1rem 1rem"
                    mt={2}
                    width="100%"
                    rounded="lg"
                    mb={5}
                    alignItems="center"
                    boxShadow="base"
                    justifyContent="space-between"
               >
                    <ButtonGroup size="sm" colorScheme="blue">
                         <Button
                              onClick={() => gotoPage(0)}
                              disabled={!canPreviousPage}
                              leftIcon={<ImBackward2 />}
                         >
                              First
                         </Button>
                         <Button
                              onClick={() => previousPage()}
                              disabled={!canPreviousPage}
                              leftIcon={<IoMdArrowRoundBack />}
                         >
                              Previous
                         </Button>
                         <Button
                              onClick={() => nextPage()}
                              disabled={!canNextPage}
                              leftIcon={<IoMdArrowRoundForward />}
                         >
                              Next
                         </Button>
                         <Button
                              onClick={() => gotoPage(pageOptions.length - 1)}
                              disabled={!canNextPage}
                              leftIcon={<ImForward2 />}
                         >
                              Last
                         </Button>
                         <Button
                              onClick={() => loadMoreDoc()}
                              disabled={canNextPage}
                              leftIcon={<RiLoader3Fill />}
                         >
                              Load More
                         </Button>
                    </ButtonGroup>

                    <Select
                         value={pageSize}
                         width="xsm"
                         size="sm"
                         rounded="md"
                         onChange={(e) => setPageSize(Number(e.target.value))}
                    >
                         {[10, 25, 50].map((pageSize, index) => (
                              <option
                                   key={pageSize}
                                   value={pageSize}
                                   key={index}
                              >
                                   Show {pageSize}
                              </option>
                         ))}
                    </Select>

                    <Text>
                         Page {pageIndex + 1} of {pageOptions.length}
                    </Text>
               </Flex>
          </>
     );
};

export default UsersTable;
