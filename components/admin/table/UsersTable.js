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
     ButtonGroup,
     Text,
     Flex,
     Select,
     Grid
} from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { useTable, useSortBy, useFilters, usePagination } from 'react-table';
import { useMemo } from 'react';
import ColumnFilter from './Filters/ColumnFilter';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
import { ImBackward2, ImForward2 } from 'react-icons/im';
import { RiLoader3Fill } from 'react-icons/ri';
import { FirebaseToDate } from '@/components/helper/FirebaseToDate';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import styled from 'styled-components';

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

const UsersTable = ({ users, setDocs }) => {
     const data = useMemo(() => users, []);

     const isCustomerQuery = useMediaQuery({
          query: '(max-width: 750px)'
     });
     const bg = useColorModeValue('white', 'gray.800');
     const color = useColorModeValue('gray.100', 'gray.800');

     const Styles = styled.div`
          /* This is required to make the table full-width */
          display: block;
          max-width: 100%;
          /* This will make the table scrollable when it gets too small */
          .tableWrap {
               display: block;
               max-width: 100%;
               overflow-x: scroll;
               overflow-y: hidden;
               border-bottom: 1px solid ${color};
          }
          table {
               /* Make sure the inner table is always as wide as needed */
               width: 100%;
               border-spacing: 0;
               tr {
                    :last-child {
                         td {
                              border-bottom: 0;
                         }
                    }
               }
               th,
               td {
                    margin: 0;
                    padding: 1rem;
                    border-bottom: 1px solid ${color};
                    border-right: 1px solid ${color};
                    /* The secret sauce */
                    /* Each cell should grow equally */
                    width: 1%;
                    /* But "collapsed" cells should be as small as possible */
                    &.collapse {
                         width: 0.0000000001%;
                    }
                    :last-child {
                         border-right: 0;
                    }
               }
          }
          .pagination {
               padding: 0.5rem;
          }
     `;

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

     return (
          <Styles>
               {/* <Box>Showing Date Between {forms[0].createdAt}</Box> */}
               <Box className="tableWrap">
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
                                                  <Th
                                                       {...column.getHeaderProps()}
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
                         <Tbody {...getTableBodyProps()} className="tbody">
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
               </Box>
               <Flex
                    bg={bg}
                    padding="1rem 1rem"
                    mt={2}
                    width="100%"
                    rounded="lg"
                    mb={5}
                    alignItems="center"
                    className="pagination"
                    flexWrap="wrap"
                    boxShadow="base"
                    justifyContent="space-between"
               >
                    <ButtonGroup size="sm" colorScheme="blue">
                         <Button
                              onClick={() => gotoPage(0)}
                              disabled={!canPreviousPage}
                              leftIcon={<ImBackward2 />}
                              m={1}
                         >
                              First
                         </Button>
                         <Button
                              onClick={() => previousPage()}
                              disabled={!canPreviousPage}
                              leftIcon={<IoMdArrowRoundBack />}
                              m={1}
                         >
                              Previous
                         </Button>
                         <Button
                              onClick={() => nextPage()}
                              disabled={!canNextPage}
                              leftIcon={<IoMdArrowRoundForward />}
                              m={1}
                         >
                              Next
                         </Button>
                         <Button
                              onClick={() => gotoPage(pageOptions.length - 1)}
                              disabled={!canNextPage}
                              leftIcon={<ImForward2 />}
                              m={1}
                         >
                              Last
                         </Button>
                         <Button
                              onClick={() => loadMoreDoc()}
                              disabled={canNextPage}
                              leftIcon={<RiLoader3Fill />}
                              m={1}
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
                         m={1}
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

                    <Text m={1}>
                         Page {pageIndex + 1} of {pageOptions.length}
                    </Text>
               </Flex>
          </Styles>
     );
};

export default UsersTable;
