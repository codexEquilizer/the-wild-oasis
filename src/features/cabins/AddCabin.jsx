import { useState } from "react";

import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinFormV2 from "./CreateCabinForm-v2";

function AddCabin() {
  const [isOpenModel, setIsOpenModel] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpenModel((isOpenModel) => !isOpenModel)}>
        Add Form
      </Button>
      {isOpenModel && (
        <Modal onClose={() => setIsOpenModel((isOpenModel) => !isOpenModel)}>
          <CreateCabinFormV2
            onCloseModal={() => setIsOpenModel((isOpenModel) => !isOpenModel)}
          />
        </Modal>
      )}
    </>
  );
}

export default AddCabin;
