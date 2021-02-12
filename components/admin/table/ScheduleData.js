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
     Divider,
     ButtonGroup,
     AlertDialog,
     AlertDialogBody,
     AlertDialogFooter,
     AlertDialogHeader,
     AlertDialogContent,
     AlertDialogOverlay
} from '@chakra-ui/react';

import React from 'react';
// import styled from 'styled-components';
import { useTable, usePagination } from 'react-table';

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

     return <Input value={value} onChange={onChange} onBlur={onBlur} />;
};

// Set our editable cell renderer as the default Cell renderer
const defaultColumn = {
     Cell: EditableCell
};

// Be sure to pass our updateMyData and the skipPageReset option
function ScheduleData({ columns, data, updateMyData, skipPageReset }) {
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
          <>
               <Table {...getTableProps()}>
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
          </>
     );
}

function App() {
     const columns = React.useMemo(
          () => [
               {
                    Header: 'Time',
                    accessor: 'time' // accessor is the "key" in the data
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
          ],
          []
     );

     const forms = {
          submissions: [
               {
                    time: '8:30 AM - 10:50 AM',
                    monday: 'Something',
                    tuesday: 'Another',
                    wednesday: 'Lather',
                    thursday: 'Kaska',
                    friday: 'Lophit',
                    saturday: 'Rewwedw',
                    sunday: 'Unsdaj'
               },
               {
                    time: '10:50 AM - 2:00 PM',
                    monday: 'Something',
                    tuesday: 'Another',
                    wednesday: 'Lather',
                    thursday: 'Kaska',
                    friday: 'Lophit',
                    saturday: 'Rewwedw',
                    sunday: 'Unsdaj'
               },
               {
                    time: '2:00 AM - 4:00 PM',
                    monday: 'Something',
                    tuesday: 'Another',
                    wednesday: 'Lather',
                    thursday: 'Kaska',
                    friday: 'Lophit',
                    saturday: 'Rewwedw',
                    sunday: 'Unsdaj'
               }
          ]
     };

     const [data, setData] = React.useState(() => forms.submissions);
     const [originalData] = React.useState(data);
     const [skipPageReset, setSkipPageReset] = React.useState(false);

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
     React.useEffect(() => {
          setSkipPageReset(false);
     }, [data]);

     // Let's add a data resetter/randomizer to help
     // illustrate that flow...
     const resetData = () => {
          onClose();
          setData(originalData);
     };

     const [isOpen, setIsOpen] = React.useState(false);
     const onClose = () => setIsOpen(false);
     const cancelRef = React.useRef();

     const updateData = () => [console.log(data)];

     return (
          <>
               <ScheduleData
                    columns={columns}
                    data={data}
                    updateMyData={updateMyData}
                    skipPageReset={skipPageReset}
               />

               <ButtonGroup size="sm">
                    <Button
                         mt={5}
                         onClick={() => setIsOpen(true)}
                         colorScheme="red"
                    >
                         Reset
                    </Button>
                    <Button
                         mt={5}
                         onClick={() => updateData()}
                         colorScheme="teal"
                    >
                         Submit
                    </Button>
               </ButtonGroup>

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
          </>
     );
}

export default App;
