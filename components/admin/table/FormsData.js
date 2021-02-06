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
     FormControl,
     Select
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
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
import { ImBackward2, ImForward2 } from 'react-icons/im';

export const Conditions = ({ values }) => {
     // Loop through the array and create a badge-like component instead of a comma-separated string
     return (
          <>
               {values.map((conditions, idx) => {
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
                    Filter: SelectColumnFilter,
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
          pageSize,
          setGlobalFilter,
          ...setAllFilters
     } = useTable(
          { columns, data },
          useFilters,
          useGlobalFilter,
          useSortBy,
          usePagination
     );

     const { globalFilter } = state;
     const { pageIndex } = state;

     const bg = useColorModeValue('white', 'gray.800');

     console.log(forms[0].createdAt);

     return (
          <>
               <GlobalFilter
                    filter={globalFilter}
                    setFilter={setGlobalFilter}
               />

               {/* <Box>Showing Date Between {forms[0].createdAt}</Box> */}

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
                    <ButtonGroup size="sm" colorScheme="teal">
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
                    </ButtonGroup>

                    <Select
                         value={pageSize}
                         width="xsm"
                         size="sm"
                         rounded="md"
                         onChange={(e) => setPageSize(Number(e.target.value))}
                    >
                         {[10, 25, 50].map((pageSize) => (
                              <option key={pageSize} value={pageSize}>
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

export default FormsData;
