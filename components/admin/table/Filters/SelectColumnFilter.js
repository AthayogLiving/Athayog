import { Select } from '@chakra-ui/react';
import { useMemo } from 'react';

// a unique option from a list
function SelectColumnFilter({
     column: { filterValue, setFilter, preFilteredRows, id }
}) {
     // Calculate the options for filtering
     // using the preFilteredRows
     const options = useMemo(() => {
          const options = new Set();
          preFilteredRows.forEach((row) => {
               options.add(row.values[id]);
          });
          return [...options.values()];
     }, [id, preFilteredRows]);

     // Render a multi-select box
     return (
          <Select
               value={filterValue}
               size="sm"
               mt={3}
               onChange={(e) => {
                    setFilter(e.target.value || undefined);
               }}
          >
               <option value="">All</option>
               {options.map((option, i) => (
                    <option key={i} value={option}>
                         {option}
                    </option>
               ))}
          </Select>
     );
}
export default SelectColumnFilter;
