import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  const filterOptions = [
    {
      value: "all",
      label: "All",
    },
    {
      value: "no-discount",
      label: "No discount",
    },
    {
      value: "with-discount",
      label: "With discount",
    },
  ];

  const sortOptions = [
    { value: "name-asc", label: "Sort by name (A-Z)" },
    { value: "name-dsc", label: "Sort by name (Z-A)" },
    { value: "regularPrice-asc", label: "Sort by price (low first)" },
    { value: "regularPrice-dsc", label: "Sort by price (high first)" },
    { value: "maxCapacity-asc", label: "Sort by capacity (low first)" },
    { value: "maxCapacity-dsc", label: "Sort by capacity (high first)" },
  ];

  return (
    <TableOperations>
      <Filter filterField="discount" options={filterOptions} />
      <SortBy options={sortOptions} />
    </TableOperations>
  );
}

export default CabinTableOperations;
