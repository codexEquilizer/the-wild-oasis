import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CreateCabinFormV2 from "../features/cabins/CreateCabinForm-v2";

function Cabins() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <CabinTable />
        <Button onClick={() => setShowForm((showForm) => !showForm)}>
          Add Form
        </Button>
        {showForm && <CreateCabinFormV2 />}
      </Row>
    </>
  );
}

export default Cabins;
