import { useState } from "react";
import Button from "../../ui/Button";
import Model from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import CabineTable from "./CabinTable";

function AddCabin() {
  return (
    <div>
      <Model>
        <Model.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Model.Open>
        <Model.Window name="cabin-form">
          <CreateCabinForm />
        </Model.Window>
      </Model>
    </div>
  );
}

/*function AddCabin() {
  const [isOpenModel, setIsOpenModel] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpenModel((show) => !show)}>
        Add new cabine
      </Button>
      {isOpenModel && (
        <Model onClose={() => setIsOpenModel(false)}>
          <CreateCabinForm onCloseModele={() => setIsOpenModel(false)} />
        </Model>
      )}
    </div>
  );
}*/
export default AddCabin;
