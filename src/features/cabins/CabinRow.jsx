/* eslint-disable no-unused-vars */
import { useState } from "react";
import styled from "styled-components";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";

import CreateCabinFormV2 from "./CreateCabinForm-v2";
import { useDeleteCabin } from "./useDeleteCabin";

import { formatCurrency } from "../../utils/helpers";
import { useCreateEditCabin } from "./useCreateEditCabin";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const [showEdit, setShowEdit] = useState(false);
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;

  const { deleteCabin, isDeleting } = useDeleteCabin();
  const { mutate: createCabin, isWorking } = useCreateEditCabin();

  function handleDuplicate() {
    // create duplicate cabin
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  return (
    <>
      <TableRow role="row">
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fits upto {maxCapacity}</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <div>
          <button onClick={handleDuplicate} disabled={isWorking}>
            <HiSquare2Stack />
          </button>
          <button onClick={() => setShowEdit((show) => !show)}>
            <HiPencil />
          </button>
          <button onClick={() => deleteCabin(cabinId)} disabled={isDeleting}>
            <HiTrash />
          </button>
        </div>
      </TableRow>
      {showEdit && <CreateCabinFormV2 cabinToEdit={cabin} />}
    </>
  );
}

export default CabinRow;
