import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";

import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabine } from "./useDeleteCabine";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useCreateCabine } from "./useCreateCabine";
import Model from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

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

// eslint-disable-next-line react/prop-types
function CabinRow({ cabin }) {
  // eslint-disable-next-line react/prop-types
  const {
    id: cabineId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
  } = cabin;

  const { isDeleting, deleteCabin } = useDeleteCabine();
  const { isCreating, createCabine } = useCreateCabine();
  function handleDeuplicate() {
    createCabine({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
    });
  }
  return (
    <>
      <Table.Row role="row">
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <div>
          <button onClick={handleDeuplicate}>
            <HiSquare2Stack />
          </button>
          <Model>
            <Model.Open opens="edit">
              <button>
                <HiPencil />
              </button>
            </Model.Open>
            <Model.Window name="edit">
              <CreateCabinForm cabinToEdit={cabin} />
            </Model.Window>

            <Model.Open opens="delete">
              <button>
                <HiTrash />
              </button>
            </Model.Open>
            <Model.Window name="delete">
              <ConfirmDelete
                resourceName="cabins"
                disabled={isDeleting}
                onConfirm={() => deleteCabin(cabineId)}
              />
            </Model.Window>
          </Model>
          <Menus.Menu id={cabineId}>
            <Menus.Toggle id={cabineId} />
            <Menus.List>
              <Menus.Button>Duplicate</Menus.Button>
              <Menus.Button>Editing</Menus.Button>
              <Menus.Button>Delete</Menus.Button>
            </Menus.List>
          </Menus.Menu>
        </div>
      </Table.Row>
    </>
  );
}

export default CabinRow;
