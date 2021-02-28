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
import React, { useMemo } from 'react';
import ColumnFilter from './Filters/ColumnFilter';
import SelectColumnFilter from './Filters/SelectColumnFilter';
import NumberFilter from './Filters/NumberFilter';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
import { ImBackward2, ImForward2 } from 'react-icons/im';
import { RiLoader3Fill } from 'react-icons/ri';
import firebase from '@/lib/firebase';
import { FirebaseToDate } from '@/components/helper/FirebaseToDate';
import { v4 as uuidv4 } from 'uuid';
import { Styles } from './Styles';

export const Conditions = ({ values }) => {
     // Loop through the array and create a badge-like component instead of a comma-separated string
     return (
          <React.Fragment key={uuidv4()}>
               {values.map((conditions, idx) => {
                    return (
                         <Badge
                              key={idx}
                              className="badge"
                              mr={2}
                              colorScheme="teal"
                              rounded="full"
                         >
                              {conditions}
                         </Badge>
                    );
               })}
          </React.Fragment>
     );
};

export const DateCreated = ({ values }) => {
     // Loop through the array and create a badge-like component instead of a comma-separated string
     return (
          <React.Fragment key={uuidv4()}>
               {FirebaseToDate(values)}
          </React.Fragment>
     );
};

const FormsData = ({ forms, latestDoc, setDocs }) => {
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
               },
               {
                    Header: 'Submitted',
                    accessor: 'createdAt',
                    Cell: ({ cell: { value } }) => (
                         <DateCreated values={value} key={uuidv4()} />
                    ),
                    Filter: ColumnFilter,
                    disableFilters: true
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
          setDocs(forms[forms.length - 1]);
     };

     const bg = useColorModeValue('white', 'gray.800');

     return (
          <Styles>
               <div className="tableWrap">
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
               </div>
               <Flex
                    bg={bg}
                    padding="1rem 1rem"
                    mt={2}
                    width="100%"
                    rounded="lg"
                    mb={5}
                    alignItems="center"
                    boxShadow="base"
                    flexWrap="wrap"
                    justifyContent="space-between"
                    className="pagination"
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

export default FormsData;
