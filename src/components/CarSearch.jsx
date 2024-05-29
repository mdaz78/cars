import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

const CarSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.cars.searchTerm);

  const handleSearchTermChange = (event) => {
    const { value } = event.target;
    dispatch(changeSearchTerm(value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label htmlFor="search" className="label"></label>
        <input
          type="text"
          name="search"
          id="search"
          className="input"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
};

export default CarSearch;
