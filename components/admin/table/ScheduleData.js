import { FirebaseToDate } from '@/components/helper/FirebaseToDate';

import SelectColumnFilter from './Filters/SelectColumnFilter';
import {
     Thead,
     Table,
     Tbody,
     Tr,
     Th,
     Td,
     chakra,
     Input,
     Button,
     ButtonGroup,
     AlertDialog,
     AlertDialogBody,
     AlertDialogFooter,
     AlertDialogHeader,
     AlertDialogContent,
     AlertDialogOverlay,
     useToast,
     Flex,
     Select,
     Grid,
     Text,
     useColorModeValue,
     Box
} from '@chakra-ui/react';
import axios from 'axios';

import React, { useEffect, useMemo, useRef, useState } from 'react';
// import styled from 'styled-components';
import { useTable, usePagination } from 'react-table';
import { mutate } from 'swr';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

// Create an editable cell renderer
const EditableCell = ({
     value: initialValue,
     row: { index },
     column: { id },
     updateMyData // This is a custom function that we supplied to our table instance
}) => {
     // We need to keep and update the state of the cell normally
     const [value, setValue] = React.useState(initialValue);

     const onChange = (e) => {
          setValue(e.target.value);
     };

     // We'll only update the external data when the input is blurred
     const onBlur = () => {
          updateMyData(index, id, value);
     };

     // If the initialValue is changed external, sync it up with our state
     React.useEffect(() => {
          setValue(initialValue);
     }, [initialValue]);

     const minutes = [];
     const hours = [
          '00',
          '01',
          '02',
          '03',
          '04',
          '05',
          '06',
          '07',
          '08',
          '09',
          '10',
          '11',
          '12'
     ];

     for (let i = 0; i < 60; i++) {
          if (i < 10) {
               i = i + '0';
          }
          minutes.push(i);
     }

     if (id == 'fromHours' || id == 'toHours') {
          return (
               <Select
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    width="70px"
                    size="sm"
                    rouned="lg"
               >
                    <option value={initialValue}>{initialValue}</option>
                    {hours.map((number, index) => {
                         return (
                              <option key={index} value={number}>
                                   {number}
                              </option>
                         );
                    })}
               </Select>
          );
     } else if (id == 'fromMinutes' || id == 'toMinutes') {
          return (
               <Select
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    width="70px"
                    size="sm"
                    rouned="lg"
               >
                    <option value={initialValue}>{initialValue}</option>
                    {minutes.map((number, index) => {
                         return (
                              <option key={index} value={number}>
                                   {number}
                              </option>
                         );
                    })}
               </Select>
          );
     } else if (id == 'toPeriod' || id == 'fromPeriod') {
          return (
               <Select
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    width="70px"
                    size="sm"
                    rouned="lg"
               >
                    <option value={initialValue}>{initialValue}</option>
                    {initialValue == 'am' ? (
                         <option value="pm">pm</option>
                    ) : (
                         <option value="am">am</option>
                    )}
               </Select>
          );
     } else {
          return (
               <Input
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    size="sm"
                    rouned="lg"
               />
          );
     }
};

// Set our editable cell renderer as the default Cell renderer
const defaultColumn = {
     Cell: EditableCell
};

// Be sure to pass our updateMyData and the skipPageReset option
function Schedule({ columns, data, updateMyData, skipPageReset }) {
     // For this example, we're using pagination to illustrate how to stop
     // the current page from resetting when our data changes
     // Otherwise, nothing is different here.

     const {
          getTableProps,
          getTableBodyProps,
          headerGroups,
          prepareRow,
          page,
          rows,
          canPreviousPage,
          canNextPage,
          pageOptions,
          pageCount,
          gotoPage,
          nextPage,
          previousPage,
          setPageSize,
          state: { pageIndex, pageSize }
     } = useTable(
          {
               columns,
               data,
               defaultColumn,
               // use the skipPageReset option to disable page resetting temporarily
               autoResetPage: !skipPageReset,
               // updateMyData isn't part of the API, but
               // anything we put into these options will
               // automatically be available on the instance.
               // That way we can call this function from our
               // cell renderer!
               updateMyData
          },
          usePagination
     );

     // Render the UI for your table
     return (
          <Box className="tableWrap">
               <Table {...getTableProps()} size="sm" variant="simple">
                    <Thead>
                         {headerGroups.map((headerGroup) => (
                              <Tr {...headerGroup.getHeaderGroupProps()}>
                                   {headerGroup.headers.map((column) => (
                                        <Th
                                             {...column.getHeaderProps()}
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
                                                  isNumeric={
                                                       cell.column.isNumeric
                                                  }
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
     );
}

const ScheduleData = ({ schedule, type }) => {
     const [data, setData] = useState(() => schedule);
     const [loading, setLoading] = useState(false);
     const [originalData] = useState(data);
     const toast = useToast();
     const [isOpen, setIsOpen] = useState(false);
     const onClose = () => setIsOpen(false);
     const cancelRef = useRef();
     const [skipPageReset, setSkipPageReset] = useState(false);

     const bg = useColorModeValue('white', 'gray.800');

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
               border-bottom: 1px solid ${bg};
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
                    border-bottom: 1px solid ${bg};
                    border-right: 1px solid ${bg};
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
                    Header: 'Time',
                    columns: [
                         {
                              Header: 'From Hour',
                              accessor: 'fromHours'
                         },
                         {
                              Header: 'From Minutes',
                              accessor: 'fromMinutes'
                         },
                         {
                              Header: 'Period',
                              accessor: 'fromPeriod'
                         },
                         {
                              Header: 'To Hour',
                              accessor: 'toHours'
                         },
                         {
                              Header: 'To Minutes',
                              accessor: 'toMinutes'
                         }
                    ]
               },
               {
                    Header: 'Schedule',
                    columns: [
                         {
                              Header: 'Period',
                              accessor: 'toPeriod'
                         },
                         {
                              Header: 'Monday',
                              accessor: 'monday'
                         },
                         {
                              Header: 'Tuesday',
                              accessor: 'tuesday'
                         },
                         {
                              Header: 'Wednesday',
                              accessor: 'wednesday'
                         },
                         {
                              Header: 'Thurday',
                              accessor: 'thursday'
                         },
                         {
                              Header: 'Friday',
                              accessor: 'friday'
                         },
                         {
                              Header: 'Saturday',
                              accessor: 'saturday'
                         },
                         {
                              Header: 'Sunday',
                              accessor: 'sunday'
                         }
                    ]
               }
          ],
          []
     );

     // We need to keep the table from resetting the pageIndex when we
     // Update data. So we can keep track of that flag with a ref.

     // When our cell renderer calls updateMyData, we'll use
     // the rowIndex, columnId and new value to update the
     // original data
     const updateMyData = (rowIndex, columnId, value) => {
          // We also turn on the flag to not reset the page
          setSkipPageReset(true);
          setData((old) =>
               old.map((row, index) => {
                    if (index === rowIndex) {
                         return {
                              ...old[rowIndex],
                              [columnId]: value
                         };
                    }
                    return row;
               })
          );
     };

     // After data chagnes, we turn the flag back off
     // so that if data actually changes when we're not
     // editing it, the page is reset
     useEffect(() => {
          setSkipPageReset(false);
     }, [data]);

     // Let's add a data resetter/randomizer to help
     // illustrate that flow...
     const resetData = () => {
          onClose();
          setData(originalData);
     };

     const DateCreated = ({ values }) => {
          // Loop through the array and create a badge-like component instead of a comma-separated string
          return <>{FirebaseToDate(values)}</>;
     };

     const updateSchedule = async () => {
          setLoading(true);

          await axios
               .post(`/api/schedule/${type}Schedule`, {
                    data
               })
               .then(function (response) {
                    setLoading(false);

                    toast({
                         title: 'Schedule Updated.',
                         description: "We've updated the schedule for you.",
                         status: 'success',
                         duration: 9000,
                         isClosable: true
                    });

                    mutate(`/api/schedule/${type}Schedule`);
               })
               .catch(function (error) {
                    setLoading(false);

                    toast({
                         title: 'An error occurred.',
                         description: error.message,
                         status: 'error',
                         duration: 5000,
                         isClosable: true
                    });
               });
     };

     return (
          <Styles>
               <Schedule
                    columns={columns}
                    data={data}
                    updateMyData={updateMyData}
                    skipPageReset={skipPageReset}
               />

               <Flex justify="space-between" alignItems="center" mt={5}>
                    <ButtonGroup size="sm">
                         <Button
                              onClick={() => setIsOpen(true)}
                              colorScheme="red"
                         >
                              Reset
                         </Button>
                         <Button
                              onClick={() => updateSchedule()}
                              colorScheme="teal"
                              isLoading={loading}
                         >
                              Submit
                         </Button>
                    </ButtonGroup>
               </Flex>

               <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                    blockScrollOnMount={false}
               >
                    <AlertDialogOverlay>
                         <AlertDialogContent>
                              <AlertDialogHeader
                                   fontSize="lg"
                                   fontWeight="bold"
                              >
                                   Rest Modiefied Data
                              </AlertDialogHeader>

                              <AlertDialogBody>
                                   Are you sure? You can't undo this action
                                   afterwards.
                              </AlertDialogBody>

                              <AlertDialogFooter>
                                   <Button ref={cancelRef} onClick={onClose}>
                                        Cancel
                                   </Button>
                                   <Button
                                        colorScheme="red"
                                        onClick={resetData}
                                        ml={3}
                                   >
                                        Delete
                                   </Button>
                              </AlertDialogFooter>
                         </AlertDialogContent>
                    </AlertDialogOverlay>
               </AlertDialog>
          </Styles>
     );
};

export default ScheduleData;
