import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store";

const CarForm = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.forms.name);

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
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
        </div>
      </form>
    </div>
  );
};

export default CarForm;
