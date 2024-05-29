import { useDispatch, useSelector } from "react-redux";
import { changeCost, changeName } from "../store";

const CarForm = () => {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => ({
    name: state.forms.name,
    cost: state.forms.cost,
  }));

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event) => {
    const cost = parseInt(event.target.value) || 0;
    dispatch(changeCost(cost));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              value={name}
              type="text"
              name="car-name"
              id="name"
              className="input is-expanded"
              onChange={handleNameChange}
            />
          </div>

          <div className="field">
            <label htmlFor="name" className="label">
              Cost
            </label>
            <input
              value={cost || ""}
              type="number"
              name="car-name"
              id="name"
              className="input is-expanded"
              onChange={handleCostChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
