import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store/slices/carsSlice";

const CarList = () => {
  const dispatch = useDispatch();
  const { cars, name } = useSelector(
    ({ forms, cars: { data, searchTerm } }) => ({
      cars: data.filter(({ name }) =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
      name: forms.name,
    })
  );

  const handleCarDelete = (car) => {
    dispatch(removeCar({ id: car.id }));
  };

  const renderedCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div className={`panel ${bold && "bold"}`} key={car.id}>
        <p>
          {car.name} ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
};

export default CarList;
